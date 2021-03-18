// components/AddMyClassCom/addMyClassCom.js
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
    imgsrc:"/assets/imgs/tabbar/add.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
      //手动添加我的课程
      addAcive(){
        console.log("eee")
        this.setData({
          imgsrc:"/assets/imgs/tabbar/add.png"
        })
      },
      addEnd(){
        console.log("2222")
        this.setData({
          imgsrc:"/assets/imgs/tabbar/add_active.png"
        })
      }
  }
})
