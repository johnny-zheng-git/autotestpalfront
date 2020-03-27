<template>
  <div>
    <h2>修改项目</h2>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="项目名称" prop="project_name">
        <el-input v-model="ruleForm.project_name" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="版本号" prop="project_v">
        <el-input v-model="ruleForm.project_v"></el-input>
      </el-form-item>

      <el-form-item label="项目描述" prop="project_desc">
        <el-input type="textarea" v-model="ruleForm.project_desc"></el-input>
      </el-form-item>
      <el-form-item label="项目转态" prop="project_state">
        <el-select v-model="ruleForm.project_state" placeholder="请选择项目转态">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" :plain="true" @click="updata('ruleForm')">立即修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import projectupdata from "./../api/interfacejs/ProjectUpdata";
// import { Loading } from 'element-ui';
export default {
  data() {
    return {
      options: [
        {
          value: 0,
          label: "进行中"
        },
        {
          value: 1,
          label: "项目暂停"
        },
        {
          value: 2,
          label: "项目结束"
        }
      ],
      value: "",

      ruleForm: {
        project_name: "",
        project_v: "",
        project_desc: "",
        project_id: "",
        project_state: ""
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
        ],
        project_state: [
          { required: true, message: "请输入项目转态", trigger: "blur" }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
      // fullscreenLoading: false
    };
  },
  methods: {
    updata(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // Loading.service(true);
          projectupdata(this.ruleForm, this.$message);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {
    this.ruleForm.project_name = sessionStorage.getItem("project_name");
    this.ruleForm.project_v = sessionStorage.getItem("project_v");
    this.ruleForm.project_desc = sessionStorage.getItem("project_desc");
    this.ruleForm.project_id = sessionStorage.getItem("project_id");
    this.ruleForm.project_state = sessionStorage.getItem('project_state');
    // console.log(sessionStorage.getItem("project_state"))
  }
};
</script>
<style lang="scss" scoped>
// div{background: brown;}
h2 {
  text-align: center;
  color: #606266;
}
</style>
