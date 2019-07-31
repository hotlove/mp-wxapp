<template>
  <div>
    统计
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 1,
        msg: 'count'
      }
    },
    onShow () {
      this.$root.$mp.page.getTabBar().setData({
        activeIndex: 1 //对应页面的index
      })
    },
    methods: {
      clickHandle () {
        this.msg = 'Clicked!!!!!!'
      },
      onChange(event) {
        let index = event.mp.detail;

        this.active = index;

        if (index == 0) {
          this.$router.push({path: "/pages/index/index", reLaunch: true})
        }
      }
    }
  }
</script>

<style scoped>
  .message {
    color: red;
    padding: 10px;
    text-align: center;
  }
</style>
