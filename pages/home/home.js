// pages/home.js
const app = getApp()
Page({


  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    score:0,
    showModal: false,
  },

  hideModal: function () {
    this.setData({
      showModal: false
    })
  },
  
  signEveryDay: function() {
    const that=this
    app.postData('/user/checkin',{},function(res){
      console.log(res.data)
      //第一次签到
      if(res.data.code==200)
      {
         //获取积分
      app.getData('/user/self',function(res){
        app.globalData.score=res.data.data.score
        that.setData({
          score:app.globalData.score,
          showModal:true
        })
      })

      }
     
    
  })
},

  okBtn: function () {
    this.hideModal();
  },

  changeToTitlt:function(){
    wx.navigateTo({
      url: '../difficulty/difficulty',
    })
  },

  changeToRank:function(){
    wx.navigateTo({
      url: '../rank/rank',
    })
  },

  onLoad: function () {
    const that=this
    //获取积分等数据
          app.getData('/user/self',function(res){
            app.globalData.userInfo=res.data.data
            app.globalData.score=res.data.data.score
            console.log(res.data)
            console.log(app.globalData.userInfo)
            console.log(app.globalData.score)
            that.setData({

              userInfo: app.globalData.userInfo,
              score:app.globalData.score
            })

          })

    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true,
    //     score:app.globalData.score
    //   })
    // }
    console.log(this.data.score)
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {

  // },

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