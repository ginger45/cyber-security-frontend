// pages/answer/answer.js
const app=getApp()
var questions,question
Page({

  /**
   * 页面的初始数据
   */
  data: {
    staticUrl: app.globalData.staticUrl,
    questionList:[],
    item:0,
    question:{},
    questionId:0,
    type: 0,
    showModal: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.data.questionList = app.globalData.questionList
    console.log(this.data.questionList)
    if (this.data.questionList) {
      var question = this.data.questionList[this.data.item];
      this.setData({
        question,
        questionId: question.questionId,
        type: question.type,
      })
    }
  },

  //点下一题重新渲染界面
  nextQue:function(){
    this.data.item += 1
    //var questions=app.globalData.questionList
    question=questions[this.data.item]
    this.data.questionId=question.questionId
    this.setData({
      item:this.data.item,
      question:question,
    })
  },

  // 显示测试
  changeTest: function (e) {
    console.log('发生change事件，携带value值为：', e.detail.value)
  },

  //确认提交答案
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var that = this;
    var data = {};
    if (that.data.type == 3) {
      data.answerList = JSON.stringify(e.detail.value.checkbox.map(function(v) {
        return parseInt(v, 10);
      }))
    } else {
      data.answerList = "["+ e.detail.value.radio +"]";
    }
    console.log(data)
    app.postData('/question/'+that.data.questionId,data,function(res){
      console.log(res.data)
      if (res.data.code == 200) {
        that.setData({
          showModal: 1
        })
      } else if (res.data.code == 402) {
        that.setData({
          showModal: 2
        })
      }
    })
  },

  hideModal: function () {
    this.setData({
      showModal: 0
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  
  okBtn: function () {
    this.hideModal();
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