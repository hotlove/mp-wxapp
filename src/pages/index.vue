<template>
  <div>
    <!-- 头部 -->
    <van-row>
      <div class="index-header">
        <van-col span="3">
          <div class="header-scan-center" @click="scanQrCode">
            <div class="header-scan-icon">
              <van-icon size="20px" name="scan"/>
            </div>
            <div class="header-scan-text">扫一扫</div>
          </div>
        </van-col>

        <van-col span="18">
          <van-search :value="searchValue" shape="round" placeholder="请输入搜索关键词"/>
        </van-col>

        <van-col span="3">
          <div class="header-scan-center" @click="goMessageInfo">
            <div class="header-scan-icon">
              <van-icon size="20px" name="comment-o"/>
            </div>
            <div class="header-scan-text">消息</div>
          </div>
        </van-col>

      </div>
    </van-row>

    <!-- 主题部分 -->
    <van-row>
      <div class="index-body">

      </div>
    </van-row>

    <!-- 提示 -->
    <van-toast id="van-toast" />
  </div>
</template>

<script>
    import Toast from '../../static/vant/toast/toast';
    export default {
        data() {
            return {
                searchValue: ""
            };
        },
        onShow() {
            this.$root.$mp.page.getTabBar().setData({
                activeIndex: 0 //对应页面的index
            });
        },
        methods: {
            // 扫描二维码
            scanQrCode() {
                wx.scanCode({
                    onlyFromCamera: true,
                    success (res) {
                        console.log(res);
                        Toast.success(res.result);
                    },
                    fail () {

                    }
                })
            },
            goMessageInfo() {
                this.$router.push({path: '/pages/message'})
            }
        }
    };
</script>

<style lang="scss">
  .index-header {
    .van-search {
      padding: 0;
    }
  }

  .header-scan-center {
    text-align: center;
  }

  .header-scan-icon {
    height: 25px;
  }

  .header-scan-text {
    font-size: 9px;
    height: 10px;
  }

  .index-body {
    height: 56px;
    border: 1px solid red;
  }
</style>
