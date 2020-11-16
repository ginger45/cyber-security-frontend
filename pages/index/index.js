//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: '../../images/index_bg.png',
    index_logo: '../../images/index_logo.png',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../home/home'
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    var userData=app.globalData.userInfo
    console.log(userData)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.reLaunch({
      url: '/pages/home/home',
    })
    wx.login({
      success:function(res){
        console.log(res.code)
        var data={code:res.code,gender:userData.gender,image:userData.avatarUrl,nickname:userData.nickName}
        console.log(data)
        app.postData('/user/login',data,function(res){
          console.log(123);
          app.globalData.headerSn = res.data.data.sn;
          console.log(res.data);
          console.log(app.globalData.headerSn)
          //获取积分等数据
          app.getData('/user/self',function(res){
            app.globalData.userInfo=res.data.data
            app.globalData.score=res.data.data.score
            console.log(res.data)

          })
        })
      }
    })
  },

  goSign() {
    wx.reLaunch({
      url: '/pages/home/home',
    })
  }
})
