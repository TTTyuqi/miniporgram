// 注册一个页面
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:new Date().toString(),
    classArray:['推荐','计算机','研究生课','经济管理','文史哲','医药卫生','工学','理学','艺术设计','其他'],
    currClassName:'推荐'
  },
  // 获取课程名称
  getClassName(e){
    console.log(e.detail.name)
    this.setData({
      currClassName:e.detail.name
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.heafDialog= this.selectComponent("#healfDialog")
    this.heafDialog.open2()
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