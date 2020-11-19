// pages/answer/answer.js
const app=getApp()
var questions,question
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionList:[],
    questionId:0,

    //界面渲染相关
    item:0,
    question:{},
    
    //items: [],

    showModal: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.questionList){
      questions=app.globalData.questionList
      question=questions[this.data.item]
      this.data.questionList=questions
      this.data.questionId=question.questionId
      this.setData({
        //questionList:questions,
        question:question,
        //questionId:question.questionId,
        //items:question.optionList
    
      })
      console.log(1)
      console.log(this.data.questionList)
      console.log(this.data.question)

    }
    else{
      console.log(2)
    }
    
    
    

  },


  //点下一题重新渲染界面
  nextQue:function(){
    this.data.item+=1
    //var questions=app.globalData.questionList
    question=questions[this.data.item]
    this.data.questionId=question.questionId
    this.setData({
      //questionId:question.questionId,
      item:this.data.item,
      question:question,
      //items:question.optionList
    })

  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
 //确认提交答案
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value.radio)
   var id=this.data.questionId
   var item={answerList:"["+ e.detail.value.radio +"]"}
    app.postData('/question/'+id,item,function(res){
      console.log(res.data)
    })
  },
  
  showDialogBtn: function() {
      this.setData({
        showModal: true
      })
    },

  hideModal: function () {
    this.setData({
      showModal: false
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