//logs.js
const util = require('../../utils/util.js')

Page({ // page是页面构造器，这个构造器生成了一个页面
  data: {
    logs: []
  },
  onLoad: function () {
    // 页面渲染之后执行
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
