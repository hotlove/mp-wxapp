const routes = require('./router/index.js');

module.exports = {
    "pages": routes,
    "window": {
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "#fff",
        "navigationBarTitleText": "测试的小程序",
        "navigationBarTextStyle": "black"
    },

    "tabBar": {
        "custom": true,
        "color": "#000000",
        "selectedColor": "#000000",
        "backgroundColor": "#000000",
        "list": [{
            "pagePath": "pages/index/index",
            "text": "首页"
        }, {
            "pagePath": "pages/count/index",
            "text": "统计"
        },{
            "pagePath": "pages/my",
            "text": "我的"
        }
        ]
    },
    "usingComponents": {}
}
