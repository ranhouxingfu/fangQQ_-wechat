Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null, // 音乐ID
    musicData:{}
  },
  getMusic(e){
    let that = this;
    console.log(this)
    // var data = {
    //   g_tk: 5381,
    //   uin: 0,
    //   format: 'json',
    //   inCharset: 'utf-8',
    //   outCharset: 'utf-8',
    //   notice: 0,
    //   platform: 'h5',
    //   needNewCode: 1,
    //   _: Date.now()
    // };
    wx.request({
      url: `http://tsmusic24.tc.qq.com/${this.data.id}.mp3`,
      // data: data,
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        if (res.statusCode === 200) {
          that.setData({
            musicData: res.data.data.songList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getMusic()
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