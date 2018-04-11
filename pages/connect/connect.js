import connectList from '../../utils/mock/connect.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    connectList:[]
  },
openList(e) {
  var id = e.currentTarget.dataset.id
  let connectList = this.data.connectList.map(function (item) {
    if (item.id === id) {
      item.isExpanded = !item.isExpanded
    }
    return item
  })
  this.setData({
    connectList:connectList
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      connectList: connectList.data
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