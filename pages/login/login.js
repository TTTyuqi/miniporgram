// pages/login/login.js
import HttpRequest from '../../http/request'
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用
     canIuse: wx.canIUse('button.open-type.getUserInfo'),
     userInfo:{},//信息
  },
  //登陆授权按钮
  getUserInfo(res){
    wx.showLoading({
      title: '授权中',
    })
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    this.promissingLogin().then((res) => {
      app.globalData.userInfo = res.userInfo;//存全局的账号信息
      this.setData({
        userInfo: res.userInfo,
      }),
      // this.login()
      wx.navigateBack({
        delta: 1
      })
    }).catch(err => {
      console.log(err)  
    })  
    wx.hideLoading()
  },
  //登陆授权promise
  promissingLogin(){
    return new Promise((resolve,reject) => {
      wx.getUserProfile({
        desc: '授权用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log('授权用户信息',res)
          resolve(res)
        },
        fail:(err) => {
          reject(err)
        }
      })
    })
  },
  //登录
  login(){
    wx.login({
      success: (res) => {
        if (res.code) {
          //发起网络请求
          HttpRequest.post('/users/user',{code:res.code}).then(res => {
            console.log(res)
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //进入页面---判断全局是否有数据
    var  that=this;
    // console.log(app.globalData.userInfo)
    //进入页面后---获取本地存储是否有数据授权----------
    if(app.globalData.userInfo){

         this.setData({
           userInfo:app.globalData.userInfo
         })
    } 
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