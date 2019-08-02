<template>
    <div>
        <!-- 头部 -->
        <van-row>
            <div class="index-header">
                <van-col span="3">
                    <div class="header-scan-center">
                        <div class="header-scan-icon">
                          <van-icon size="20px" name="scan"/>
                        </div>
                        <div class="header-scan-text">扫一扫</div>
                    </div>

                </van-col>
                <van-col span="17">
                    <van-search :value="searchValue" shape="round" placeholder="请输入搜索关键词" />
                </van-col>
                <van-col span="4">

                </van-col>
            </div>
        </van-row>

        <!-- 主题部分 -->
        <van-row>

        </van-row>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        searchValue: ''
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

<style lang="scss">
  .index-header  {
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
</style>
