<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import store from "./vuex/store";
export default {
  store,
  methods: {},
  created() {
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      console.log("刷新页面", sessionStorage);
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }
};
</script>
<style lang="scss" scoped>
</style>
