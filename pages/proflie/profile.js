// pages/proflie/profile.js
import HttpRequest from '../../http/request'
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin:false,
    loginstyle:'未登录',
    userInfo:{}
  },
  //跳转到登陆授权页面
  login(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    HttpRequest.get('/users/user/5f686888a586494270c1f6b6'
    ).then(res =>{
      console.log("yonghu",res)
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
    console.log("app",app)
    if(app.globalData.userInfo){
        this.setData({
          isLogin:true,
          loginstyle:'当前登录状态:微信登录',
          userInfo:app.globalData.userInfo
        })
    }
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