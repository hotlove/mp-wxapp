<template>
  <div>
    <div class="my-header">
      <div class="my-header-setting">
        <van-icon size="20px" name="setting-o"/>
        <van-icon customStyle="margin-left: 15px;" size="20px" name="comment-o" @click="goMessage" />
      </div>
      <div class="my-header-userinfo">
        <van-row gutter="20">
          <van-col span="4">
            <i-avatar :src="profileInfo.avatarUrl" size="large"></i-avatar>
          </van-col>
          <van-col span="20" v-if="profileInfo.nickName != null">{{ profileInfo.nickName }}</van-col>
          <a v-if="profileInfo.nickName == null" class="text-fs-14" @click="goRegister">登陆/注册</a>
        </van-row>
      </div>
      <div></div>
    </div>
    <div class="my-body">

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
    onShow() {
      this.$root.$mp.page.getTabBar().setData({
        activeIndex: 3 //对应页面的index
      });
    },
    mounted() {
      this.getSetting();
    },
    computed: {},
    methods: {
      getSetting() {
        wx.getSetting({
          success: (res) => {
            if (res.authSetting["scope.userInfo"]) {
              wx.getUserInfo({
                success: (res) => {
                  // 说明已经授权过
                  this.profileInfo = res.userInfo;
                  console.log(this.profileInfo);
                }
              });
            } else {
              // 说明还有授权
            }
          }
        });
      },
      goRegister() {
        this.$router.push("/pages/register");
      },
      goMessage() {
        this.$router.push("/pages/message")
      }
    }
  };
</script>

<style lang="scss">
  /*@import "../../static/css/main.css";*/

  .my-header {
    background: #FFC416;
    padding: 5px 10px;
    .my-header-setting {
      text-align: right;
    }

    .my-header-userinfo {
      height: 46px;
      line-height: 46px;
    }
  }
</style>
