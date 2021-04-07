// pages/searchview/searchview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getClicClass:'',
    hotClass:['C语言层序设计','四级','财务','疾风计划','英语','清华大学','高等数学','心理学','线性代数','大学物理','计算机','Java','Vuejs']
  },
  // 获取点击的热门课程
  currentHotclass(e){
    console.log("index", e.currentTarget.dataset.index)
    console.log("name",e.currentTarget.dataset.item)
    this.setData({
      getClicClass: e.currentTarget.dataset.item
  });

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