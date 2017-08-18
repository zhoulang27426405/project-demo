import Vue from 'vue'
import Router from 'vue-router'
import config from '../config'

Vue.use(Router)

// 1、定义路由
const regRoutes = (config) => {
  let route= []
  let addRoute = (page) => {
    let child = {}
    // 定义组件
    child.component = {}
    child.component.template = `<embed src="/static/${page.url}" loop="0" autostart="true" hidden="true" style="height:0px; width:0px;0px;">
      </embed>`
    child.path = page.path
    route.push(child)
  }
  config.map(item => {
    if (item && item.path) {
      addRoute(item)
      if (item.children) {
        item.children.map(item => {
          addRoute(item)
        })
      }
    }
  })
  return route
}
const routes = regRoutes(config)

// 2、创建router实例
const router = new Router({
  routes
})

// 3、挂载根实例
export default router
