import dynamicData from '../../utils/mock/dynamic.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dynimacList:[]
  },
  narvagation(e){
    var id = e.currentTarget.dataset.id
    switch(id){
      case 4:
      wx.navigateTo({
        url: "/pages/dynamic/music/music",
      });
      break;
      case 5:
      wx.navigateTo({
        url: '/pages/dynamic/video/video',
      })
      break;
      case 8:
      wx.navigateTo({
        url: '/pages/dynamic/sport/sport',
      })
      break;
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(dynamicData)
    this.setData({
      dynimacList: dynamicData.data
    })
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