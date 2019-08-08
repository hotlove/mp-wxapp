<template>
  <div class="register-body">
    <div class="register-body-avatar">
      <div>
        <i-avatar :src="profileInfo.avatarUrl" size="large"></i-avatar>
      </div>
      <div v-if="profileInfo.nickName != null">{{ profileInfo.nickName }}</div>
    </div>
    <div class="register-body-btncontent" v-if="profileInfo.nickName == null">
      <button class="register-btn" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @click="getUserInfo1">注册微信</button>
    </div>
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
    mounted() {
      // this.getSetting();
    },
    computed: {
    },
    methods: {
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
        if (e.mp.detail.rawData){
          //用户按了允许授权按钮
          this.profileInfo = e.mp.detail.rawData;
          setTimeout(() => {
              // 3s后自动返回上一页面
              this.$router.back();
          }, 3000)
        } else {
          //用户按了拒绝按钮
        }
      },
    }
  };
</script>

<style lang="scss">
  @import "../../static/css/main.css";
  .register-body {
    text-align: center;

    .register-body-avatar {
       margin-top: 30px;
    }
    .register-body-btncontent {
      margin-top: 20px;
    }
    .register-btn {
      width: 150px;
      height: 30px;
      font-size: 12px;
      background: #c54713;
    }
  }
</style>
