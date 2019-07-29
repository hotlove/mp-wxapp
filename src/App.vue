<script>
export default {
  onLaunch() {
    console.log('启动了---------------------')
    console.log(wx)
    wx.hideTabBar();
  },
  created () {
    console.log('miniapp created!!!')
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
