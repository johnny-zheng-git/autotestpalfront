<template>
  <div class="testapilistroot">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Host配置" name="first" @click="tohostlist">
        <router-view ref="hostlist"></router-view>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second" @click="tohostlist">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="角色管理" name="third">
        <router-view></router-view>
      </el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">
        <router-view></router-view>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      project_id: "",
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    tohostlist() {
      this.$router.push({name:'hostlist',params:{project_id:this.project_id}})
    }
  },
  mounted() {
    this.project_id = this.$refs.hostlist.project_id;
    
  }
};
</script>
<style lang="scss" scoped>
.testapilistroot {
  // background: chartreuse;
}
.apititle {
  text-align: center;
  color: #606266;
}
</style>
