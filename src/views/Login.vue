<template>
  <div class="index">
    <div class="reg">
      <div class="title">
        <h2>系统登录</h2>
      </div>
      <!-- <hr> -->
      <el-form
        :label-position="left"
        label-width="80px"
        :inline="true"
        :model="formInline"
        class="demo-form-inline"
      >
        <el-form-item>
          <el-input v-model="formInline.username" placeholder="User"></el-input>
        </el-form-item>
        <br />
        <el-form-item>
          <el-input v-model="formInline.password" placeholder="Password" type="password"></el-input>
        </el-form-item>
        <br />
        <el-form-item>
          <el-button class="nn" type="primary" :plain="true" @click="onSubmit()">登录</el-button>  <!-- :plain="true" 弹框报错  -->
          <el-button class="nn" type="primary" @click="reg()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import login from "./../components/api/userjs/UserLogin";
import store from "./../vuex/store";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      // img: require('./static/background.jpg')
      formInline: {
        username: "",
        password: ""
      }
    };
  },
  store,
  components: {
    // 'v-header':Header
  },
  methods: {
    onSubmit() {
      login(this.formInline,this.$message.error)  //this.$message.error element弹出框信息
    },
    reg() {
      this.$router.push({ name: "reg" });
    }
  },
  mounted(){
    
  }
};
</script>

<style lang="scss" scoped>
.index {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0px;
  background: url("./../assets/img/background.jpg") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  // background:url('./static/background.jpg')no-repeat;
  // background-size:cover ;
  // overflow: hidden;
  .reg {
    border-radius: 20px;
    // 居中
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    // 背景透明
    background-color: rgba(51, 51, 51, 0.5);
    width: 300px;
    height: 300px;
    text-align: center;
    .title {
      margin-top: 20px;
      color: #f0f0f0;
      text-align: center;
    }
  }
}

.nn {
  margin: 20px 33px 15px 20px;
  text-align: center;
  // background-color: salmon;
}
.pwderr {
  color: red;
  margin: 0px, 0px, 0px;
  // padding-top: 0px;
  // margin-top: 0px;
  // margin-left: 0px;
  font-size: 12px;
  // background-color: rgba(146, 34, 34, 0.5);
}
</style>
