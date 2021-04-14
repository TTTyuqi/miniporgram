// components/ClassNavBarCom/classNavBar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      classArray:{
        type:Array,
        value:[],
        observer: "dataChange"
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
       windowWidth: 0, // 屏幕宽度
      currentIndex:0,
      translateX:0,// 下划 line 的移动距离
      tabItems: [], // 所有 tab 节点信息
      needTransition: false, // 下划线是否需要过渡动画,
      lineWidth: 0, // 下划 line 宽度
      scrollLeft: 0, // scroll-view 左边滚动距离
  },

  /**
   * 组件的方法列表
   */
  methods: {
    	/**
		 * 监听数据变化, 如果改变重新初始化参数
		 */
		dataChange(newVal, oldVal) {
			// 异步加载数据时候, 延迟执行 init 方法, 防止基础库 2.7.1 版本及以下无法正确获取 dom 信息
			setTimeout(() => this.init(), 0);
    },
    /**
		 *  初始化函数
		 */
		init() {
      const {windowWidth} = wx.getSystemInfoSync();
      this.setData({windowWidth: windowWidth || 375});
      
			this.createSelectorQuery().selectAll(".nav-item").boundingClientRect((res) => {
				this.setData({
					tabItems: res
				});
				this.scrollByIndex(this.data.currentIndex,false);
			}).exec();
		},
    currentClassClic(event){
      // console.log("______",event.currentTarget.dataset.index)
      // console.log("______",event.currentTarget.dataset.item)
      this.setData({
        currentIndex:event.currentTarget.dataset.index
      })
      this.triggerEvent('curClassName',{name:event.currentTarget.dataset.item})
      this.scrollByIndex(event.currentTarget.dataset.index);
    },

    scrollByIndex(tabIndex,needTransition=true){
      let item = this.data.tabItems[tabIndex];
      // console.log("item",item)
			if (!item) return;
      let itemLeft = item.left || 0,
          itemWidth = item.width || 0
      // 保持滚动后当前 item '尽可能' 在屏幕中间
      let scrollLeft = itemLeft - (this.data.windowWidth - itemWidth) / 2;
        this.setData({
          needTransition: needTransition,
          translateX: itemLeft,
          lineWidth:itemWidth,
          scrollLeft:scrollLeft
        });
    }
  },
  ready(){
    this.init();
      console.log("=====")
  }
})
