// components/HeadSearchCom/headSearchCom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: true,
    inputVal: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //   方法废弃
    showInput: function () {
      this.setData({
          inputShowed: true
      });
  },
  hideInput: function () {
    //   this.setData({
    //       inputVal: "",
    //       inputShowed: true
    //   });
      //回退
      wx.navigateBack({
        delta: 1
      })   
  },
  clearInput: function () {
      this.setData({
          inputVal: ""
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value
      });
  }
  }
})
