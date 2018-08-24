//index.js
//获取应用实例
const app = getApp()

Page({

  /**
 * 生命周期函数--监听页面初次渲染完成
 */
  onReady: function () {
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
    console.log(getCurrentPages())
  },

  showDialog(){
    this.dialog.showDialog();
  },
  tolog(){
    
  },

   //取消事件
  cancel(){
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  confirm(){
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },
  navigateTo(){
    wx.redirectTo({
      url:'/pages/logs/logs'
    })
  }

})