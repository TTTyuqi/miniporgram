// components/HansAccordionCom/hansAccordionCom.js
Component({
  options:{
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
      accorData:{
        type:Array,
        value:[
          {
            quesTitle:'账号问题',
            answersCont:[
              {
                conTitle:'如何在线注册账号',
                anserQuestion:'在浏览器中输入该网站地址,打开网页右上角注册按钮,通过微信授权绑定注册'
              },
              {
                conTitle:'如何在线注册账号',
                anserQuestion:'在浏览器中输入该网站地址,打开网页右上角注册按钮,通过微信授权绑定注册'
              },
              {
                conTitle:'如何在线注册账号',
                anserQuestion:'在浏览器中输入该网站地址,打开网页右上角注册按钮,通过微信授权绑定注册'
              }
            ]
          },
          {
            quesTitle:'课程问题',
            answersCont:[
              {
                conTitle:'如何在线注册账号',
                anserQuestion:'在浏览器中输入该网站地址,打开网页右上角注册按钮,通过微信授权绑定注册'
              },
              {
                conTitle:'如何在线注册账号',
                anserQuestion:'在浏览器中输入该网站地址,打开网页右上角注册按钮,通过微信授权绑定注册'
              },
              {
                conTitle:'如何在线注册账号',
                anserQuestion:'在浏览器中输入该网站地址,打开网页右上角注册按钮,通过微信授权绑定注册'
              }
            ]
          },
          {
            quesTitle:'认证证书',
            answersCont:[
              {
                conTitle:'课程视频界面无法打开',
                anserQuestion:'在浏览器中输入该网站地址,打开网页右上角注册按钮,通过微信授权绑定注册'
              },
              {
                conTitle:'课程过程中发现课程内容以及习题错误',
                anserQuestion:'在浏览器中输入该网站地址,打开网页右上角注册按钮,通过微信授权绑定注册'
              },
              {
                conTitle:'课程是否可以提前结束',
                anserQuestion:'在浏览器中输入该网站地址,打开网页右上角注册按钮,通过微信授权绑定注册'
              },
              {
                conTitle:'课程视频界面无法打开',
                anserQuestion:'在浏览器中输入该网站地址,打开网页右上角注册按钮,通过微信授权绑定注册'
              },
              {
                conTitle:'课程问题可以重复回答嘛',
                anserQuestion:'在浏览器中输入该网站地址,打开网页右上角注册按钮,通过微信授权绑定注册'
              },
              {
                conTitle:'课程是否有答案可以参考',
                anserQuestion:'在浏览器中输入该网站地址,打开网页右上角注册按钮,通过微信授权绑定注册'
              }
            ]
          }
        ]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
      currentIndex:-1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickAccord(e){
      // console.log(e.currentTarget.dataset.index)
      if(e.currentTarget.dataset.index == this.data.currentIndex){
        this.setData({
          currentIndex: -1
        })
        // console.log("currentIndex",this.currentIndex)
      }else{
        this.setData({
          currentIndex: e.currentTarget.dataset.index
        })
        // console.log("currentIndex2",this.data.currentIndex)
      }
    }
  }
})
