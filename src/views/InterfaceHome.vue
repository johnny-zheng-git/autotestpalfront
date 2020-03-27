<template>
  <div class="root">
    <el-container class="container">
      <div class="myheader">
      <el-header>
        <v-header></v-header>
      </el-header>
      </div>
      <div class="conent">
        <router-view></router-view>
      </div>
    </el-container>
  </div>
</template>

<script>
import Header from "./../components/publicmodel/Header";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      id: ""
    };
  },
  components: {
    "v-header": Header
  },
  methods: {},
  mounted() {
    // console.log(this.$route.params);
    this.id = this.$route.params;
  }
};
</script>

<style lang="scss" >
.root {
  position: absolute;
  width: 100%;
  min-height: 100%;
  left: 0px;
  top: 0px;
  right: 0px;
  // border: 2px solid firebrick;
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    // border: 2px solid rgb(89, 6, 245);
    // background: forestgreen;
    .myheader{
      position: absolute;
      width: 100%;
      height: 60px;
      left: 0px;
      top: 0px;
      left: 0px;
      z-index:1;
      // background-color:"#545c34";
      border: 1px solid #545c64;
    }
    .conent {
      position: absolute;
      height: auto;
      top: 59px;
      left: 0px;
      right: 0px;
      bottom: 0px;

      // border: 10px solid rgb(3, 186, 241);
    }
  }
}
// .el-aside {
//   background-color: #545C64;
//   color: #333;
//   text-align: center;
//   height: 100%;
//   // line-height: 200px;
// }

.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.aside{
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  background-color: #545C64;
  text-align: center;
  // border: 1px solid #545C64;
}
.main{
  position: absolute;
  right: 0px;
  top: 0px;
  left: 200px;
  bottom: 0px;
  background-color: #e8e7ff;
  // border: 5px solid rgb(50, 3, 138);
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
