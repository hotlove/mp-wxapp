<template>
  <div>
    分类
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 1
      };
    },
    onShow() {
      this.$root.$mp.page.getTabBar().setData({
        activeIndex: 1 //对应页面的index
      });
    },
    methods: {}
  };
</script>

<style scoped>
  .message {
    color: red;
    padding: 10px;
    text-align: center;
  }
</style>
