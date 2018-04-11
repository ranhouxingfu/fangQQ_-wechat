var api = require('../../../utils/service/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicList: [],
    musicId: '',
    musicSrc: '',
    poster:'',
    singname:'',
    singerauthor:'',
    isOpen: false,
    autoplay:true,
    innerAudioContext:{}
  },
  // 获取音乐列表
  get_music_list(id, message) {
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
      tpl: 3,
      page: 'detail',
      type: 'top',
      topid: id,
      _: Date.now()
    };
    api.requestLoading('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg', data, message, function (res) {
      that.setData({
        musicList: res.songlist
      })
    }, function (error) {
      console.log(error)
    })
  },
  // 点击播放当前音乐
  playing_music(e) {
    let that = this;
    that.setData({
      musicUrl: 'http://ws.stream.qqmusic.qq.com/C100' + e.currentTarget.dataset.songdata.songmid + '.m4a?fromtag=0',
      poster: 'http://y.gtimg.cn/music/photo_new/T002R150x150M000' + e.currentTarget.dataset.songdata.albummid + '.jpg',
      singname: e.currentTarget.dataset.songdata.songname,
      singerauthor: e.currentTarget.dataset.songdata.singer[0].name,
      isOpen: true
    })
    that.innerAudioContext = wx.createAudioContext('myAudio');
    that.innerAudioContext.autoplay = true;
    that.innerAudioContext.setSrc('http://ws.stream.qqmusic.qq.com/C100' + e.currentTarget.dataset.songdata.songmid +'.m4a?fromtag=0')
    that.innerAudioContext.play()
    // wx.playBackgroundAudio({
    //   dataUrl: that.musicUrl,
    //   title: that.singname,
    //   coverImgUrl: that.poster
    // })
    
  },

  /**
   * 跳转到歌词页面
   */
  go_to_detail(e){
    wx.navigateTo({
      url: `/pages/dynamic/musicDetail/detail?params=${JSON.stringify(e.currentTarget.dataset.lyricsdata)}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      musicId: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.get_music_list(this.data.musicId, '正在加载数据...');
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