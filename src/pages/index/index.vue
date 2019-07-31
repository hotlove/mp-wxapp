<template>
  <div>
    首页
    <!--<i-tab-bar :fixed="true" current="mine" >-->
    <!--<i-tab-bar-item key="remind" icon="remind" current-icon="remind_fill" title="主页"></i-tab-bar-item>-->
    <!--<i-tab-bar-item key="mine" icon="mine" current-icon="mine_fill" title="我的"></i-tab-bar-item>-->
    <!--</i-tab-bar>-->
    <!--<van-tabbar :active="active" @change="onChange">-->
      <!--<van-tabbar-item icon="home-o">标签</van-tabbar-item>-->
      <!--<van-tabbar-item icon="search">标签</van-tabbar-item>-->
      <!--<van-tabbar-item icon="friends-o">标签</van-tabbar-item>-->
      <!--<van-tabbar-item icon="setting-o">标签</van-tabbar-item>-->
    <!--</van-tabbar>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: 0,
        msg: 'Hello'
      }
    },
    onShow () {
      this.$root.$mp.page.getTabBar().setData({
        activeIndex: 0 //对应页面的index
      })
    },
    methods: {
      clickHandle () {
        this.msg = 'Clicked!!!!!!'
      },
      skipPage() {
        this.$router.push({path: '/pages/count/index', isTab: true });
      },
      onChange(event) {
        let index = event.mp.detail;

        this.active = index;

        if (index == 1) {
          this.$router.push({path: "/pages/count/index", isTab: true})
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
