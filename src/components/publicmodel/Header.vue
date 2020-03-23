<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo myheader"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1" @click="home()">自动化测试平台</el-menu-item>
    <el-menu-item index="2" @click="tasklist()">我的工作台</el-menu-item>
    <el-menu-item index="3" @click="interfacetest()">接口测试</el-menu-item>
    <el-submenu index="4">
      <template slot="title">性能测试</template>
      <el-menu-item index="4-1">选项1</el-menu-item>
      <el-menu-item index="4-2">选项2</el-menu-item>
      <el-menu-item index="4-3">选项3</el-menu-item>
      <el-submenu index="4-4">
        <template slot="title">选项4</template>
        <el-menu-item index="4-4-1">选项1</el-menu-item>
        <el-menu-item index="4-4-2">选项2</el-menu-item>
        <el-menu-item index="4-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">自动化测试</template>
      <el-menu-item index="5-1">选项1</el-menu-item>
      <el-menu-item index="5-2">选项2</el-menu-item>
      <el-menu-item index="5-3">选项3</el-menu-item>
      <el-submenu index="5-4">
        <template slot="title">选项4</template>
        <el-menu-item index="5-4-1">选项1</el-menu-item>
        <el-menu-item index="5-4-2">选项2</el-menu-item>
        <el-menu-item index="5-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title">个人中心</template>
      <el-menu-item index="6-1">test</el-menu-item>
      <el-menu-item index="6-2">修改密码</el-menu-item>
      <el-menu-item index="6-3">退出登录</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    home() {
      this.$router.push({ name: "home" });
    },
    tasklist() {
      this.$router.push({ name: "tasklist" });
    },
    interfacetest() {
      this.$router.push({ name: "projectlist" });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
