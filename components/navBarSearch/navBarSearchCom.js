// components/navBarSearchCom.js
const App = getApp();
Component({
  options:{
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {
    attached: function () {
      this.setData({
        navH: App.globalData.navHeight,
        navT: App.globalData.navTop
      })
     }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
