<template>
  <div>
    <div class="my-header">
      <div class="my-header-setting"></div>
      <div class="my-header-userinfo">
        <van-row v-if="profileInfo.nickName != null" gutter="20">
          <van-col span="4">
            <i-avatar :src="profileInfo.avatarUrl" size="large">{{ profileInfo.nickName }}</i-avatar>
          </van-col>
          <van-col span="20">{{ profileInfo.nickName }}</van-col>
        </van-row>
        <van-row v-if="profileInfo.nickName == null" gutter="20">
          <van-col span="4"><i-avatar :src="profileInfo.avatarUrl" size="large"></i-avatar></van-col>
          <van-col span="20">
            <button class="text-fs-14" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">登陆/注册</button>
          </van-col>
        </van-row>
      </div>
      <div></div>
    </div>
    <div class="my-body">

    </div>
    <!--<button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">获取权限</button>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        profileInfo: {
          nickName: null
        }
      };
    },
    onShow() {
      this.$root.$mp.page.getTabBar().setData({
        activeIndex: 3 //对应页面的index
      });
    },
    mounted() {
      this.getSetting();
    },
    computed: {
    },
    methods: {
      getSetting(){
        wx.getSetting({
          success: (res) => {
            if (res.authSetting['scope.userInfo']) {
              wx.getUserInfo({
                success: (res) => {
                  // 说明已经授权过
                  this.profileInfo = res.userInfo;
                  console.log(this.profileInfo)
                }
              })
            }else{
              // 说明还有授权
            }
          }
        })
      },
      getUserInfo1(){
        console.log('click事件首先触发')
        // 判断小程序的API，回调，参数，组件等是否在当前版本可用。  为false 提醒用户升级微信版本
        // console.log(wx.canIUse('button.open-type.getUserInfo'))
        if(wx.canIUse('button.open-type.getUserInfo')){
          // 用户版本可用
        }else{
          console.log('请升级微信版本')
        }
      },
      bindGetUserInfo(e) {
        console.log(e.mp.detail.rawData)
        if (e.mp.detail.rawData){
          //用户按了允许授权按钮
          this.profileInfo = e.mp.detail.rawData;
        } else {
          //用户按了拒绝按钮
        }
      },
    }
  };
</script>

<style lang="scss">
  @import "../../static/css/main.css";
  .my-header {
    background: #FFC416;
    padding: 5px 10px;
    .my-header-setting {

    }

    .my-header-userinfo {
      height: 46px;
      line-height: 46px;
    }
  }
</style>
