// 注册小程序入口
App({
  globalData:{

  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // console.log("options",options)
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
