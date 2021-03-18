// components/ClassNavBarCom/classNavBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      classArray:{
        type:Array,
        value:[]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    currentClassClic(event){
      console.log("______",event.currentTarget.dataset.index)
      console.log("______",event.currentTarget.dataset.item)
      this.setData({
        currentIndex:event.currentTarget.dataset.index
      })
      this.triggerEvent('curClassName',{name:event.currentTarget.dataset.item})
    }
  }
})
