// pages/difficulty/difficulty.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    staticUrl: app.globalData.staticUrl,
    background: '../../images/difficulty_bg.jpg',
    difficulty_logo: "../../images/difficulty_logo.png"
  },

  changetoanswer:function(event){
    var type = event.target.dataset.type;
    // 获取题目并跳转页面
    app.getData('/question?type='+type,function(res){
      if (res.data.code == 200) {
        app.globalData.questionList=res.data.data.questionList
        console.log(app.globalData.questionList)
        wx.navigateTo({
          url: '../answer/answer',
        })
      } else if (res.data.code == 401) {
        wx.navigateTo({
          url: '../index/index',
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.headerSn);
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