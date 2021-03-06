// pages/classchat/classchat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    duration: 300,  // swiper-item 切换过渡时间
    tabData:['我发布的','我赞评的'],//nav 数据
    categoryNavData:['0','1'],//tab数据
    categoryCur:0,// 当前nav列索引
    requesting:false
  },

  	// 顶部tab切换事件
	toggleCategory(e) {
		console.log(1212)
		// this.setData({
		// 	duration: 0
		// });
		setTimeout(() => {
			this.setData({
				categoryCur: e.detail.index
			});
		}, 0);
  },
  // 切换swiper-item动画结束时触发的方法
  animationFinish(e){
    // console.log("swiper-item",e)
    this.setData({
      categoryCur:e.detail.current
    })
  },
  // 下拉刷新
  refresh(){
    this.setData({
      requesting:true
    })
    console.log("下拉刷新·····")
    setTimeout(() => {
      this.setData({
        requesting:false
      })
    },200)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})