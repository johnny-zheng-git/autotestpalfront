<template>
<div>
  <h2>新建项目</h2>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="项目名称" prop="project_name">
      <el-input v-model="ruleForm.project_name" placeholder="项目名称"></el-input>
    </el-form-item>
    <el-form-item label="版本号" prop="project_v">
      <el-input v-model="ruleForm.project_v" placeholder="V1.0"></el-input>
    </el-form-item>

    <el-form-item label="项目描述" prop="project_desc">
      <el-input type="textarea" v-model="ruleForm.project_desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :plain="true" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
import projectadd from './../api/interfacejs/ProjectAdd'
export default {
  data() {
    return {
      ruleForm: {
        project_name: "",
        project_v: "",
        project_desc: ""
      },
      rules: {
        project_name: [
          { required: true, message: "请输入项目名称", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        project_v: [
          { required: true, message: "请输入项目版本号", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        project_desc: [
          { required: true, message: "请输入项目描述", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          projectadd(this.ruleForm,this.$message.error)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
// div{background: brown;}
h2{
  text-align: center;
  color: #606266;
}
</style>
