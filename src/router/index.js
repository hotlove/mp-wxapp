module.exports = [
  {
    path: 'pages/index/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '文章列表',
      enablePullDownRefresh: true,
      usingComponents: {
        "i-button": "../../static/iview/button/index"
      }
    }
  }, {
    path: 'pages/count/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
    config: { // 页面配置，即 page.json 的内容，可选
      navigationBarTitleText: '计算页面',
      enablePullDownRefresh: true
    }
  }
]
