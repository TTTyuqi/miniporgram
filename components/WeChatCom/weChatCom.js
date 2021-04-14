// components/WeChatCom/weChatCom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
        // nav数据列表
        tabData:{
          type:Array,
          value:[],
          observer: "dataChange"
        },
        //设置nav的height
        size:{
          type:Number,
          value:90,
          observer:"sizeChange"
        },
        //外部监听nav的index变化
        getabCurindex: {
          type: Number,
          value: 0,
          observer: "tabCurChange"
        },
        //控制是否开启滚动
        scrolling:{
          type:Boolean,
          value:true
        }, 
        // 设置颜色
        bgwdcol:{
          type:String,
          value:'#1296db'
        },
        // 设置边距
        margin:{
          type:String,
          value:'0rpx 100rpx'
        },
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabItems:[],
    currentIndex:0,
    windowWidth:0,//获取屏幕宽度
    scrollLeft:0, // scroll-view 左边滚动距离
    needTransition:false,
    translateX:0,
    lineWidth:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 监听数据变化 结局dom获取不到的情况
    dataChange(){
      setTimeout(()=> {
        this.init()
      })
    },
    	/**
		 *  监听 tab 高度变化, 最小值为80rpx
		 */
		sizeChange(newVal, oldVal) {
			if (newVal <= 80) {
				this.setData({size: 80});
			}
    },
    		/**
		 *  监听 tabCur 变化, 做对应处理
		 */
		tabCurChange(newVal, oldVal) {
			this.scrollByIndex(newVal);
		},
    // 点击对应的tab
    toggleTab(e){
      
        // console.log("e",e)
        this.scrollByIndex(e.currentTarget.dataset.index)
        this.triggerEvent('changeNav',{index:e.currentTarget.dataset.index})
    },
    /**
       * 滑动到指定位置
       * @param tabCur: 当前激活的tabItem的索引
       * @param needTransition: 下划线是否需要过渡动画, 第一次进来应设置为false
       */
      scrollByIndex(tabCur, needTransition = true){
          let item = this.data.tabItems[tabCur]
          console.log("item",item)
          if (!item) return;
          let itemWidth = item.width || 0,
            itemLeft = item.left || 0;
            this.setData({needTransition: needTransition});
            if (this.data.scrolling) { // 超出滚动的情况
              // 保持滚动后当前 item '尽可能' 在屏幕中间
              let scrollLeft = itemLeft - (this.data.windowWidth - itemWidth) / 2;
      
              this.setData({
                currentIndex: tabCur,
                scrollLeft: scrollLeft,
                translateX: itemLeft,
                lineWidth: itemWidth
              });
            } else { // 不超出滚动的情况
              this.setData({
                currentIndex: tabCur,
                translateX: itemLeft,
                lineWidth: itemWidth
              });
            }
      },
    // 初始化nav 
    init(){
      // 获取当前屏幕的宽度
      const {windowWidth} = wx.getSystemInfoSync();
      this.setData({windowWidth: windowWidth || 375});
      //是否开启scroll滚动
      // 使用选着器选择对应的dom对象
      this.createSelectorQuery().selectAll('.tabs__item-child').boundingClientRect((res) => {
        // console.log("res.width",res)
        this.setData({
          tabItems:res
        })
        this.scrollByIndex(this.data.currentIndex,false)
      }).exec();
    
    },

  },
  ready(){
    this.init()
  }
})
