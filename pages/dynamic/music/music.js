var api = require('../../../utils/service/api.js')
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ['我的', '好友在听', '电台'],
    Inx: 0,  // 当前选中导航的index值,
    userInfo: {}, // 获取用户信息
    hasUserInfo: false,
    musicList: [],
    show: false,
    music_src: ''
  },
  // 切换导航
  changeTab: function (e) {
    this.setData({
      Inx: e.currentTarget.dataset.index
    })
  },
  // 获取用户信息
  getUserInfo: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // 获取音乐列表
  getMusicList: function (message) {
    let that = this;
    var data = {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: Date.now()
    };
    api.requestLoading('https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg', data, message, function (res) {
      that.setData({
        musicList: res.data.topList
      })
    }, function (error) {
      console.log(error)
    })
  },
  // 随机播放播放音乐
  playSong: function () {
    this.setData({
      show: true,
    })

    // 使用wx.createAudioContext获取audio上下文 context
    this.audioCtx = wx.createAudioContext('myAudio');
    this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46');
    this.audioCtx.play()
  },
  // 跳转到歌单页面
  Go_music_list(e) {
    let listId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/dynamic/musicList/musicList?id=${listId}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo();
    this.getMusicList('正在加载数据...')
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
   this.setData({
      show: false
    })
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