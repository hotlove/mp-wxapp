module.exports = [
  {
    "path": "pages/index/index",
    "config": {
      "navigationBarTitleText": "首页",
      "enablePullDownRefresh": true,
      "usingComponents": {
        "i-button": "../../static/iview/button/index",
        "i-tab-bar": "../../static/iview/tab-bar/index",
        "i-tab-bar-item": "../../static/iview/tab-bar-item/index",
      }
    }
  }, {
    "path": "pages/count/index",
    "config": {
      "navigationBarTitleText": "计算页面",
      "enablePullDownRefresh": true
    }
  }
]
