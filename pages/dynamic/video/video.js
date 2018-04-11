Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollY:true,
    hasRefesh: false,
    hasMore: false,
    videoList: [{
      id: 1,
      src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      title: '测试',
      time: '2018-04-10'
    }, {
      id: 2,
      src: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      title: '测试1',
      time: '2018-04-09'
    }]
  },
  /** refesh 刷新处理 */
  refesh() {
    this.setData({
      hasRefesh: true
    })
    setTimeout(function () {
      this.setData({
        hasRefesh: false
      })
    }, 1000)
  },
  /**loadMore 加载更多 */
  loadMore() {
    this.setData({
      hasMore: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.connectSocket({
    //   url: 'wss://192.168.43.109',
    //   data:{
    //     x:'',
    //     y:''
    //   },
    //   header:{
    //     'content-type':'application/json'
    //   },
    //   protocols:['protocoll'],
    //   method:'GET',
    //   success(res){
    //     console.log(res)
    //   },
    //   fail(){
    //     console.log('error')
    //   }
    // })
    // wx.onSocketOpen(function (res) {
    //   console.log('WebSocket连接已打开！')
    // })
    // wx.onSocketError(function (res) {
    //   console.log('WebSocket连接打开失败，请检查！')
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})