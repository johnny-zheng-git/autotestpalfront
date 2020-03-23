<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total='total_num'
    class="pagintions"
  ></el-pagination>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1, //初始页
      pagesize: 10, //    每页的数据
    //   dataList: [],
      total_num:0
    };
  },
  methods: {
    handleSizeChange(size) {
      this.pagesize = size;
      console.log(this.pagesize); //每页下拉显示数据
      this.$parent.setpag()
      
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.$parent.setpag()
    //   console.log(this.currentPage); //点击第几页
    }
  },

};
</script>
<style lang="scss" scoped>
.pagintions {
  position: absolute;
//   bottom: 0px;
  right: 10px;
  // background-color: fuchsia;
}
</style>    
