module.exports = [
  {
    "path": "pages/index",
    "config": {
      "navigationBarTitleText": "首页",
      "enablePullDownRefresh": true,
      "usingComponents": {
        "van-row": "../../static/vant/row/index",
        "van-col": "../../static/vant/col/index",
        "van-search": "../../static/vant/search/index",
        "van-icon": "../../static/vant/icon/index",
        "van-toast": "../../static/vant/toast/index"
      }
    }
  },
  {
    "path": "pages/classify",
    "config": {
      "navigationBarTitleText": "分类",
      "enablePullDownRefresh": true,
      "usingComponents": {}
    }
  },
  {
    "path": "pages/shopcart",
    "config": {
      "navigationBarTitleText": "购物车",
      "enablePullDownRefresh": true,
      "usingComponents": {}
    }
  },
  {
    "path": "pages/my",
    "config": {
      "navigationBarTitleText": "我的",
      "enablePullDownRefresh": true,
      "usingComponents": {}
    }
  },
  {
    "path": "pages/message",
    "name": "message",
    "config": {
      "navigationBarTitleText": "消息",
      "enablePullDownRefresh": true,
      "usingComponents": {
        "van-row": "../../static/vant/row/index",
        "van-col": "../../static/vant/col/index"
      }
    }
  },
]
