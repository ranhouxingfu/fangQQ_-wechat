Page({

  /**
   * 页面的初始数据
   */
  data: {
    dynimacList:[{
      id:1,
      url:'/images/game.png',
      name:'游戏'
    },{
      id: 2,
      url: '/images/weather.png',
      name: '日迹'
      },{
        id: 3,
        url: '/images/kan.png',
        name: '看点'
    },{
      id: 4,
      url: '/images/song.png',
      name: '音乐'
      },{
        id: 5,
        url: '/images/video.png',
        name: '直播'
    },{
      id: 6,
      url: '/images/qun.png',
      name: '附近的群'
      },{
        id: 7,
        url: '/images/cityse.png',
        name: '同城服务'
    },{
      id: 8,
      url: '/images/sport.png',
      name: '运动'
    }]
  },
  narvagation(e){
    var id = e.currentTarget.dataset.id
    switch(id){
      case 4:
      wx.navigateTo({
        url: "/pages/dynamic/music/music",
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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