<template>
    <div>
        首页
    </div>
</template>

<script>
  export default {
      data() {
          return {
              active: 0
          };
      },
      onShow() {
          this.$root.$mp.page.getTabBar().setData({
            activeIndex: 0 //对应页面的index
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
