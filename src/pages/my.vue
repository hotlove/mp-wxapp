<template>
  <div class="my-body">
    <div class="my-header">
      <div class="my-header-setting">
        <van-icon size="20px" name="setting-o"/>
        <van-icon customStyle="margin-left: 15px;" size="20px" name="comment-o" @click="goMessage"/>
      </div>
      <div class="my-header-userinfo">
        <van-row gutter="10" class="my-header-adjust">
          <van-col span="4">
            <i-avatar :src="profileInfo.avatarUrl" size="large"></i-avatar>
          </van-col>
          <van-col span="6" v-if="profileInfo.nickName != null">{{ profileInfo.nickName }}</van-col>
          <a v-if="profileInfo.nickName == null" class="text-fs-14" @click="goRegister">登陆/注册</a>
        </van-row>
      </div>
      <div class="my-header-menu text-center">
        <van-row>
          <van-col span="6">
            <div>0</div>
            <div>优惠券</div>
          </van-col>
          <van-col span="6">
            <div>0</div>
            <div>领云钻</div>
          </van-col>
          <van-col span="6">
            <div>0</div>
            <div>我的关注</div>
          </van-col>
          <van-col span="6">
            <div>0</div>
            <div>足迹</div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="my-body-content">
        <!-- 我的订单 -->
        <div class="my-body-content-border">

        </div>

        <!-- 必备工具 -->
        <div class="my-body-content-border">

        </div>
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

  .my-body {
    background: #F8F8F8;
  }

  .my-header {
    background: #FFC416;
    padding: 5px 10px;
    .my-header-setting {
      text-align: right;
      padding-right: 25px;
    }

    .my-header-userinfo {
      height: 46px;
      line-height: 46px;
      padding-left: 20px;

      .my-header-adjust {
        /*padding: 0 10px;*/
      }
    }

    .my-header-menu {
      margin-top: 10px;
    }
  }


  .my-body-content {
    background: #ececec;
    padding: 0 10px;
    .my-body-content-border {
      background: #ffffff;
      border: 1px solid red;
      border-radius: 5px;
      height: 34px;
    }
  }

</style>
