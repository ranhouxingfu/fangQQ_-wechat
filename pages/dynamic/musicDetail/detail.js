// pages/dynamic/musicDetail/detail.js
var api = require('../../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicUrl: '',
    lyricUrl: '', // 歌词
    lyricData: ''
  },
  get_lyric(message) {
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
      type: 'lyric',
      _: Date.now()
    };
    api.requestLoading(this.data.lyricUrl, data, message, function (res) {
      console.log(res)
      that.setData({
        lyricData: res
      })
    }, function (error) {
      // console.log(error)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let params = JSON.parse(options.params)
    this.setData({
      musicUrl: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000' + params.albummid + '.jpg',
      lyricUrl: 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg?songmid='+ params.songmid
      // lyricUrl: 'http://s.plcloud.music.qq.com/fcgi-bin/fcg_yqq_song_detail_info.fcg?songmid=' + params.songmid
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.lyricUrl)
    this.get_lyric('正在加载数据...')
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