Page({

  /**
   * 页面的初始数据
   */
  data: {
    connectList:[{
      id:1,
      groupName:'特别关心',
      num:'0/0',
      isExpanded: true,// 列表展开与否
      children:[]
    }, {
      id: 2,
      groupName: '我的好友',
      num: '3/4',
      isExpanded: true,// 列表展开与否
      children: [{
        id: 1,
        userName: '我的电脑',
        userImage: '/images/icon.png',
        content: '你已在电脑上登录，可以传文件到电脑上;你已在电脑上登录，可以传文件到电脑上',
        time: '12:00',
        count: 0
      }, {
        id: 2,
        userName: '张三',
        userImage: '/images/cityse.png',
        content: '放假啦！！！！',
        time: '2018-04-03',
        count: 20
      }, {
        id: 3,
        userName: "马化腾",
        userImage: "http://img1.3lian.com/gif/more/11/201212/cd1d745ed855bef27f47c8aff0786067.jpg",
        content: "哈哈哈，我要一统江湖啦，",
        time: "15:15",
        count: 22
      },
      {
        id: 4,
        userName: "一声问候",
        userImage: "/images/icon1.png",
        content: "朋友生日要到了，送个祝福吧",
        time: "14:23",
        count: 0
      }]
    }]
  },
openList(e) {
  var id = e.currentTarget.dataset.id
  var connectList = this.data.connectList.map(function (item) {
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