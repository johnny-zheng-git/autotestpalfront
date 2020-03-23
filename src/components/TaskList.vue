<template>
  <el-container>
    <el-aside width="201px" class="aside">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>消息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2" @click="clicktime()">
          <i class="el-icon-menu"></i>
          <span slot="title">日历</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main class="main">
        <el-calendar v-model="value" v-show="this.time"></el-calendar>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>

  <!-- <button @click="time()">test</button> -->
</template>
<script>
export default {
  data() {
    return {
      activeNames: ["1"],
      value: new Date(),
      time: true
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clicktime() {
      this.time = !this.time;
      //   alert(this.time);
    }
  }
};
</script>
<style lang="scss" scoped>
// .el-footer {
//   background-color: #b3c0d1;
//   color: #333;
//   text-align: center;
//   line-height: 60px;
// }

// // .el-aside {
// //   background-color: rgb(100, 94, 84);
// //   color: #333;
// //   text-align: center;
// //   // height: 100%;
// //   //   line-height: 800px;
// // }

// .el-main {
//   background-color: #226bb4;
//   color: #333;
//   text-align: center;
//   // line-height: 160px;
// }
</style>