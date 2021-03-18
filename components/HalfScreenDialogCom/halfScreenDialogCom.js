// components/HalfScreenDialogCom/halfScreenDialogCom.js
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
    dialog2: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close: function() {
      this.setData({
          dialog2: false
      });
    },
    open2() {
        this.setData({
            dialog2: true
        });
    },
  }
})
