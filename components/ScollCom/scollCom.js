// components/ScollCom/scollCom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    	// 加载中
		requesting: {
			type: Boolean,
			value: false,
			observer: 'requestingEnd',
    },
    		// 加载完毕
		end: {
			type: Boolean,
			value: false,
		},
  	// 控制空状态的显示
		emptyShow: {
			type: Boolean,
			value: true,
		},
    // 空状态
    emptyUrl:{
      type: String,
      value: "/assets/imgs/empt/empty.png"
    },
    // 空状态的文字提示
		emptyText: {
			type: String,
			value: "未找到数据"
    },
  // 下拉刷新的高度
		refreshSize: {
			type: Number,
			value: 90,
			observer: 'refreshChange'
		},
     // iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向
     enableBackToTop: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    mode: 'refresh', // refresh 和 more 两种模式
    move: -65, // movable-view 偏移量
    scrollTop:0, //设置竖向滚动条位置
    timer: null, //清楚定时器
    refreshStatus: 1, // 1: 下拉刷新, 2: 松开更新, 3: 加载中, 4: 加载完成
    successShow: false, // 显示success
    successTran: false, // 过度success
    scrollHeight1: 0, // refresh view 高度负值
		scrollHeight2: 0, // refresh view - success view 高度负值
  },

  /**
   * 组件的方法列表
   */
  methods: {
    	/**
		 * movable-view 滚动监听
		 */
    aresChange(e){
        console.log("滚动监听",e)
        let refreshStatus = this.data.refreshStatus,
				diff = e.detail.y;

			if (refreshStatus >= 3) return;

			if (diff > -10) {
				this.setData({
					refreshStatus: 2
				});
			} else {
				this.setData({
					refreshStatus: 1
				});
			}
    },
    	/**
		 * movable-view 触摸结束事件
		 */
    touchEnd(e){
      console.log("触摸结束",e)
      let refreshStatus = this.data.refreshStatus;

			if (refreshStatus >= 3) return;

			if (refreshStatus === 2) {
				wx.vibrateShort();
				this.setData({
					refreshStatus: 3,
					move: 0,
					mode: 'refresh'
				});
				this.triggerEvent('refresh');
			} else if (refreshStatus === 1) {
				this.setData({
					move: this.data.scrollHeight1
        });
        console.log("222",this.data.scrollHeight1)
			}
    },

    	/**
		 * 处理 bindscrolltolower 失效情况
     * 实时监听scroll-view的滚动
		 */
    scroll(e){
      console.log("scroll-view的滚动",e)
      clearTimeout(this.data.timer);
			this.setData({
				timer: setTimeout(() => {
					this.setData({
						scrollTop: e.detail.scrollTop
					})
				}, 100)
			});
    },
    		/**
		 * 监听下拉刷新高度变化, 如果改变重新初始化参数, 最小高度80rpx
		 */
		refreshChange(newVal, oldVal) {
			if (newVal <= 80) {
				this.setData({
					refreshSize: 80
				});
			}
			// 异步加载数据时候, 延迟执行 init 方法, 防止基础库 2.7.1 版本及以下无法正确获取 dom 信息
			setTimeout(() => this.init(), 10);
		},
    	/**
		 * 加载更多
		 */
		more() {
			if (!this.properties.end) {
				this.setData({
					mode: 'more'
				});
			
      }
      this.triggerEvent('more');
    }, 
    /**
     * 加载中
     */
    requestingEnd(newVlaue,oldvaue){
      if (this.data.mode === 'more') return;

			if (oldvaue === true && newVlaue === false) {
				setTimeout(() => {
					this.setData({
						successShow: true,
						refreshStatus: 4,
						move: this.data.scrollHeight2
					});
					setTimeout(() => {
						this.setData({
							successTran: true,
							move: this.data.scrollHeight1
						});
						setTimeout(() => {
							this.setData({
								refreshStatus: 1,
								successShow: false,
								successTran: false,
								move: this.data.scrollHeight1
							});
						}, 350)
					}, 1500)
				}, 600)
			} else {
				if (this.data.refreshStatus !== 3) {
					this.setData({
						refreshStatus: 3,
						move: 0
					});
				}
			}
    },
    		/**
		 * 初始化scroll组件参数, 动态获取 下拉刷新区域 和 success 的高度
		 */
		init() {
			let {windowWidth} = wx.getSystemInfoSync();
			let successHeight = (windowWidth || 375) / 750 * 70;
      // console.log('-res.successHeight',successHeight)
			this.createSelectorQuery().select("#refresh").boundingClientRect((res) => {
        console.log('-res.height',-res.height)
        // console.log('successHeight - res.height',successHeight - res.height)
				this.setData({
					scrollHeight1: -res.height,
					scrollHeight2: successHeight - res.height
				});
			}).exec();
		},
  },
  ready(){
    this.init()
  }
  
})
