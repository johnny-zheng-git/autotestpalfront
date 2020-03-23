<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" v-show="this.showlist">
      <el-form-item label="项目名称">
        <el-input
          v-model="formInline.project_name"
          placeholder="项目名称"
          :hide-required-asterisk="true"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">新增</el-button>
      </el-form-item>
    </el-form>
    <div v-show="this.showlist">
      <el-table
        :data="tableData.slice((currentPage - 1) * pagesize,currentPage * pagesize)"
        border
        style="width: 100%"
        v-loading="loading"
      >
        <el-table-column
          sortable
          fixed
          type="index"
          :index="this.indexStartNum+(currentPage-1)*pagesize"
          label="序号"
          width="60"
        ></el-table-column>

        <el-table-column sortable prop="project_name" label="项目名称" width="115"></el-table-column>
        <el-table-column sortable prop="user_name" label="创建人" width="100"></el-table-column>
        <el-table-column prop="project_v" label="版本号" width="76"></el-table-column>
        <el-table-column sortable prop="project_state" label="项目状态" width="115"></el-table-column>
        <el-table-column sortable prop="create_time" label="创建日期" width="160"></el-table-column>
        <el-table-column sortable prop="updata_time" label="修改日期" width="160"></el-table-column>
        <el-table-column sortable prop="project_id" label="项目ID" width="100"></el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
            <el-button type="text" size="small" @click="delete_(scope.row.project_id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <v-pagintions ref="pag"></v-pagintions>
    </div>
    <router-view v-show="!this.showlist"></router-view>
  </div>
</template>
<script>
import pagintions from "./../publicmodel/Pagination";
import projectselect from "./../api/interfacejs/Projectselect";
import projectdelete from "./../api/interfacejs/Projectdelete";
export default {
  data() {
    return {
      showlist: true,
      indexStartNum: 1, // 序号起始位置
      loading: false, // 加载中
      tableData: [], // 异步请求数据
      currentPage: 1, // 引用分页vue功能第几页
      pagesize: 10, // 页面展示数据
      formInline: {
        project_name: "" // 查询参数
      }
    };
  },
  components: {
    "v-pagintions": pagintions // 分页模块导入
  },

  methods: {
    /** 父子组件双向数据绑定，setpag中内容获取子组件分页信息数据，子组件点击按钮后调用父组件setpag回传数据给父组件 */
    setpag() {
      this.currentPage = this.$refs.pag.currentPage;
      this.pagesize = this.$refs.pag.pagesize;
    },
    /** 调用按项目模糊查询，异步请求 */
    onSubmit() {
      projectselect(this.formInline).then(res => {
        this.tableData = res.data.project;
      });
    },
    /** 新增项目页面，方法一隐藏显示页面，方法二路由 */
    add() {
      this.showlist = false;
      this.$router.push({ name: "addproject" });
    },
    /** 删除项目 */
    delete_(project_id) {
      this.$confirm("确认删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          /** 延时调用查询刷新页面 */
          projectdelete({ project_id: project_id });
          this.loading = true;
          function sleep(time) {
            return new Promise(resolve => setTimeout(resolve, time));
          }
          sleep(300).then(() => {
            // 这里写sleep之后需要去做的事情
            this.onSubmit();
            this.loading = false;
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  mounted() {
    /**进入页面加载项目信息 */
    this.loading = true;
    projectselect(this.formInline).then(res => {
      this.tableData = res.data.project; // 返回数据
      this.$refs.pag.total_num = this.tableData.length; //与分页模块交互，告知多少条数据
      this.loading = false;
    });
  }
};
</script>
<style lang="scss" scoped>
.my-demo-form-inline {
  color: rgb(85, 42, 165);
  font-size: 30px;
}
body {
  margin: 0;
}
</style>