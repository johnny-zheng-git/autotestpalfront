<template>
  <el-container>
    <el-aside width="201px" class="aside">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1" @click="projectlist()">
          <i class="el-icon-menu"></i>
          <span slot="title">项目列表</span>
        </el-menu-item>
        <el-menu-item index="2" @click="about()">
          <i class="el-icon-menu"></i>
          <span slot="title">关于我们</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    about() {
      this.$router.push({ name: "about" });
    },
    projectlist() {
      this.$router.push({ name: "projectlist" });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
// .el-footer {
//   background-color: #b3c0d1;
//   color: #333;
//   text-align: center;
//   line-height: 60px;
// }



</style>
