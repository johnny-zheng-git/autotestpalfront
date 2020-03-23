<template>
  <div class="root"></div>
</template>

<script>
// import Header from './Header.vue';
// import Axios from 'axios';

export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>


.root {
  height:100%;width:100%;
/*width: 100%;*/
border: 1px solid green;
position:fixed;
// background-color: chartreuse;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 2000px;
  // height: 100%;
  // margin:0
}

.el-main {
  // background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 100%;
  // height: 100%;
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
