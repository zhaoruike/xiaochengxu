//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.screenWidth = wx.getSystemInfoSync().windowWidth
  },
  onShow: function (options) {
  },
  onHide: function () {
    // Do something when hide.
  },
  onError: function (msg) {
  },
  onPageNotFound: function(res){
    // wx.redirectTo({
    //   url: 'pages/logs/log'
    // }) 
    // 如果是 tabbar 页面，请使用 wx.switchTab
    wx.switchTab({
      url: 'pages/logs/logs',
    })
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  screenWidth:0
})