<template>
  <div id="app">
    <div class="type-info">{{typeInfo}}</div>
    <ul class="box">
      <li class="box-item" @click="keyClick('1')"><p>1</p></li>
      <li class="box-item" @click="keyClick('2')"><p>2</p></li>
      <li class="box-item" @click="keyClick('3')"><p>3</p></li>
      <li class="box-item" @click="keyClick('4')"><p>4</p></li>
      <li class="box-item" @click="keyClick('5')"><p>5</p></li>
      <li class="box-item" @click="keyClick('6')"><p>6</p></li>
      <li class="box-item" @click="keyClick('7')"><p>7</p></li>
      <li class="box-item" @click="keyClick('8')"><p>8</p></li>
      <li class="box-item" @click="keyClick('9')"><p>9</p></li>
      <li class="box-item" @click="keyClick('*')"><p>*</p></li>
      <li class="box-item" @click="keyClick('0')"><p>0</p></li>
      <li class="box-item" @click="keyClick('#')"><p>#</p></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeInfo: '',
      tempTypeInfo: '',
      param: '',
      path: ''
    }
  },
  mounted() {
  },
  methods: {
    keyClick(key) {
      if ('*' == key) {
        let length = this.$route.path.length;
        let index = this.$route.path.lastIndexOf('/');
        let infoIndex = this.typeInfo.length - (length - 1 - index);
        this.tempTypeInfo = this.typeInfo = this.typeInfo.substring(0, infoIndex);
        if (0 == this.typeInfo.indexOf('10086')) {
          this.path = this.$route.path.substring(0, index);
        } else {
          this.path = '/';
        }
        this.$router.push({path: this.path});
      } else if ('#' == key) {
        if (0 == this.typeInfo.indexOf('10086')) {
          this.param = this.typeInfo.substring(this.tempTypeInfo.length);
          if ('/' != this.$route.path) {
            this.param = '/' + this.param;
          }
          this.path = this.$route.path + this.param;
          this.$router.push({path: this.path});
        } else {
          this.typeInfo = '';
        }
        this.tempTypeInfo = this.typeInfo;
      } else {
        this.typeInfo += key;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.type-info {
  font-size: 40px;
  line-height: 40px;
  height: 40px;
  margin-bottom: 80px;
}
.box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  width: 700px;
  height: 900px;
  margin: 0 auto;
}
.box-item {
  box-sizing: border-box;
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 1px solid #eee;
  list-style: none;
}
.box-item p {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width:100%;
  height: 40px;
  margin: auto;
  line-height: 40px;
  font-size: 40px;
}
</style>
