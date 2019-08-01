Component({
    data: {
        activeIndex: 0,
        list: [
            // 这里要使用绝对路径
            "/pages/index/index",
            "/pages/count/index",
            "/pages/my",
        ]
    },
    methods: {
        handleProxy(e) {
            const url = this.data.list[e.detail];
            wx.switchTab({
                url
            });
            this.setData({
                activeIndex: e.detail
            })
        }
    }
})
