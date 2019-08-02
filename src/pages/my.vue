<template>
  <div>
    我的
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: 3
      };
    },
    onShow() {
      this.$root.$mp.page.getTabBar().setData({
        activeIndex: 3 //对应页面的index
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
