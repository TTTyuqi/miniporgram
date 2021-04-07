// components/HeadSearchCom/headSearchCom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inputVal:{
      type:String,
      default:'',
      observer:(newVlaue,oldValue)=> {
        // console.log('newVlaue',newVlaue)
        // console.log('oldValue',oldValue)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputShowed: true,
    // inputVal: "",
    textClass:[],
    orignClass:['C语言层序设计','四级','财务','疾风计划','英语','清华大学','高等数学','心理学','线性代数','大学物理','计算机','Java','Vuejs']
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
      this.setData({
          inputVal: "",
          textClass:[]
      });
      //回退
      // wx.navigateBack({
      //   delta: 1
      // })   
  },
  clearInput: function () {
      this.setData({
          inputVal: "",
          textClass:[]
      });
  },
  inputTyping: function (e) {
      this.setData({
          inputVal: e.detail.value,
          textClass:[]
      });
      console.log("this.inputVal",this.data.orignClass.indexOf(this.data.inputVal) > -1)
      if(this.data.orignClass.indexOf(this.data.inputVal) > -1){
        this.setData({
          textClass:[this.data.inputVal]
        })
        // console.log("this.textClass1",this.data.textClass)
      }else{
        this.setData({
          textClass:this.data.orignClass
        })
        // console.log("this.textClass2",this.data.textClass)
      }
  },
  //获取远程搜索的课程标题
  getOringClass(e){
    console.log("远程搜索的课程标题",e.currentTarget.dataset.item)
    this.setData({
      inputVal: e.currentTarget.dataset.item
    });
    //此处发送请求
  }
  }
})
