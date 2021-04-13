// 注册小程序入口
App({
  globalData:{
    cityInfo: '',
    userInfo:null,
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    this.chang_windows()
  },
  //   //进入页面获取是否授权----------------------------     
  //   wx.getSetting({
  //           success: (options) =>{
  //               if (options.authSetting['scope.userInfo']) {
  //                 console.log("用户授权了");
  //                   // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
  //                   wx.getUserProfile({
  //                     success: function (res) {
  //                       console.log(res.userInfo);
  //                       //存储到本地
  //                       that.globalData.userInfo = res.userInfo;

  //                       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //                       // 所以此处加入 callback 以防止这种情况
  //                       if (that.userInfoReadyCallback) {
  //                         that.userInfoReadyCallback(res)
  //                       }
  //                     }
  //                     })
  //               } else {
  //                 //用户没有授权
  //                 console.log("用户没有授权");
  //                   wx.navigateTo({
  //                     url: '/pages/login/login',
  //                   })
  //               }
  //             }
  //           })
  // },
  chang_windows(){
    let menuButtenObj = wx.getMenuButtonBoundingClientRect()
    console.log("menuButtenObj",menuButtenObj)
    wx.getSystemInfo({
      success:(res) => {
        console.log("res",res)
        let statusBarHeight = res.statusBarHeight,
        navTop = menuButtenObj.top,//胶囊按钮与顶部的距离
        navHeight = statusBarHeight + menuButtenObj.height + (menuButtenObj.top - statusBarHeight)*2;//导航高度
        this.globalData.navHeight = navHeight
        this.globalData.navTop = navTop
      },
      fail:(err) => {
        console.log("err",err)
      }
    }) 
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //判断小程序的进入场景
    console.log(options.scene)
    switch(options.scene){
        case 1001:

          break;
        case 1005:

          break;
        default:
          
          break;
          

    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
