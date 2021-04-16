// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classData:['课程列表','直播课程'],//nav 数据
    categoryNavData:['0','1'],//tab数据
    categoryCur:0,// 当前nav列索引
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