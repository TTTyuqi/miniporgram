// 注册一个页面
// pages/home/home.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight:App.globalData.navHeight,
    time:new Date().toString(),
    classArray:['推荐','计算机','研究生课','经济管理','文史哲','医药卫生','工学','理学','艺术设计','其他'],
    currClassName:'推荐',
    vieoHotclass:[
      {
        videoId:"121212",
        videoIdName:'java从入门到放弃维吾尔文二翁rwerw',
        videoBgImg:"/assets/swiperimgs/1.jpg"
      },
      {
        videoId:"2",
        videoIdName:'c++从入门到放弃',
        videoBgImg:"/assets/swiperimgs/2.jpg"
      },
      {
        videoId:"3",
        videoIdName:'c从入门到放弃',
        videoBgImg:"/assets/swiperimgs/3.jpg"
      },
      {
        videoId:"4",
        videoIdName:'c++从入门到放弃',
        videoBgImg:"/assets/swiperimgs/4.jpg"
      },
      {
        videoId:"5",
        videoIdName:'vue从入门到放弃',
        videoBgImg:"/assets/swiperimgs/5.jpg"
      },
      {
        videoId:"6",
        videoIdName:'c#从入门到放弃',
        videoBgImg:"/assets/swiperimgs/6.jpg"
      }
    ]
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