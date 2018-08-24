//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
    this.scrollBar = this.selectComponent("#scrollbar");
    console.log(getCurrentPages())
  },

  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    current:0,
    scrollBar:null,
    itemData:[
      [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
      [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
      [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
      [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
      [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
      [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3]
    ]
  },
  change(event){
    this.scrollBar._changeAction(event.detail.current)
    this.scrollBar.moveBar(event.detail.current)
  },

  //取消事件
  cancel() {
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  confirm() {
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },
  navigateTo() {
    wx.redirectTo({
      url: '/pages/logs/logs'
    })
  },
  callback(e) {
    this.setData({
      current: e.detail.index
    })
  }

})