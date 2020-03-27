
<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="chackadd(1)">新增</el-button>
        <el-button type="primary" @click="select()">刷新</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="index" :index="1" label="序号" width="60" :fit="true"></el-table-column>
      <el-table-column prop="host_name" label="名称" width="180"></el-table-column>
      <el-table-column prop="host_addr" label="HOST" width="180"></el-table-column>
      <el-table-column prop="host_desc" label="描述"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="chackupdata(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            :plain="true"
            @click="deletehost(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      class="forntaddhost"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm hostadd"
      >
        <el-form-item label="名称" prop="host_name">
          <el-input v-model="ruleForm.host_name" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="HOST" prop="host_addr">
          <el-input v-model="ruleForm.host_addr" placeholder="127.0.0.1"></el-input>
        </el-form-item>

        <el-form-item label="描述" prop="host_desc">
          <el-input type="textarea" v-model="ruleForm.host_desc"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" :plain="true" @click="resetForm('ruleForm')">取 消</el-button>
        <el-button type="primary" :plain="true" @click="addhost('ruleForm')" v-show="sign">确 定</el-button>
        <el-button type="primary" :plain="true" @click="updatahost('ruleForm')" v-show="!sign">修 改</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import hostadd from "./../api/interfacejs/HostAdd";
import hostselect from "./../api/interfacejs/Hostselect";
import hostdelect from "./../api/interfacejs/HostDelete";
import hostupdata from "./../api/interfacejs/HostUpdata";
export default {
  data() {
    return {
      sign: true,
      project_id: null,
      dialogVisible: false,
      tableData: null,
      ruleForm: {
        host_name: null,
        host_addr: null,
        host_desc: null,
        project_id: null,
        host_id:null
      },
      rules: {
        host_name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        host_addr: [
          { required: true, message: "请输入主机地址", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    chackadd() {
      this.sign = true;
      this.dialogVisible = true;
    },
    chackupdata(row) {
      this.sign = false;
      
      this.ruleForm.host_name = row.host_name
      this.ruleForm.host_addr = row.host_addr
      this.ruleForm.host_desc = row.host_desc
      this.ruleForm.host_id = row.host_id
      // console.log('=========__=======',this.ruleForm);
      this.dialogVisible = true;
      
    },
    updatahost(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          hostupdata(this.ruleForm, this.$message).then(() => {
            this.dialogVisible = false;
            this.select();
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      // (formName).then(()=>{
      //   this.dialogVisible = true;
      // })
    },
    deletehost(index, row) {
      // console.log(index, row);
      this.$confirm("确认删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        hostdelect({ host_id: row.host_id }, this.$message).then(() => {
          this.select();
        });
      });
      // console.log(index, row);
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    addhost(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          hostadd(this.ruleForm, this.$message).then(() => {
            this.dialogVisible = false;
            this.select();
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.dialogVisible = false;
    },
    select() {
      hostselect({ project_id: this.project_id }).then(res => {
        this.tableData = res.data.host_list;
      });
    }
  },
  mounted() {
    this.project_id = this.$route.query.project_id;
    this.ruleForm.project_id = this.project_id;
    this.select();
  }
};
</script>
<style lang="scss" scoped>
.hostadd {
  left: 0px;
}
</style>
