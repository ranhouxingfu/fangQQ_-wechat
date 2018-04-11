var Mock = require('mock.js');
var connectData = new Mock.mock({
  'error_code':'',
  'error_msg':'',
  'data': [{
    id: 1,
    groupName: '特别关心',
    num: '0/0',
    isExpanded: true,// 列表展开与否
    children: []
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
      count: 0,
      online: true
    }, {
      id: 2,
      userName: '张三',
      userImage: '/images/cityse.png',
      content: '放假啦！！！！',
      time: '2018-04-03',
      count: 20,
      online: true
    }, {
      id: 3,
      userName: "马化腾",
      userImage: "http://img1.3lian.com/gif/more/11/201212/cd1d745ed855bef27f47c8aff0786067.jpg",
      content: "哈哈哈，我要一统江湖啦，",
      time: "15:15",
      count: 22,
      online: true
    },
    {
      id: 4,
      userName: "一声问候",
      userImage: "/images/icon1.png",
      content: "朋友生日要到了，送个祝福吧",
      time: "14:23",
      count: 0,
      online: false
    }]
  }]
})
export default connectData