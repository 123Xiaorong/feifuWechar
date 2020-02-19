// pages/cake/cart/cart.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodArr:[],
    display:null,
    totalNum:1,
  },
  goShopping:e=>{
    // console.log(e.currentTarget.dataset.aid);//undefined
    wx.switchTab({
      url: '../index/index',
    })
  },
  cartRes:function(e) {
    console.log(this.data.totalNum)
    app.globalData.totalNum = this.data.totalNum;
    wx.switchTab({
      url: '../myCenter/myCenter',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if (this.data.goodArr.length == 0) {
    //   // console.log(11);
    //   this.data.display='block';
    // } else {
    //   // console.log(22);
    //   this.data.display='none';
    //   onShow();
    // }
  },

  subNum:function(){
    // console.log(this.data.totalNum)
    if (this.data.totalNum>1){
      this.data.totalNum--;
    }
    this.setData({
      totalNum: this.data.totalNum
    })
    // console.log(this.data.totalNum)
  },
  addNum:function(){
    // console.log(this.data.totalNum)
    if (this.data.totalNum >= 1) {
      this.data.totalNum++;
    }
    this.setData({
      totalNum: this.data.totalNum
    })
    // console.log(this.data.totalNum)
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
    
    var goodId,goodArr;
    goodId = app.globalData.goodId;
    // console.log(goodId);
    // console.log(app.globalData.userInfo)
    goodArr = app.globalData.goodsArr;
    // console.log(goodArr);
    for (var i = 0; i < goodArr.length;i++){
      if (goodArr[i].G_id == goodId){
        // console.log(goodArr[i]);
        this.data.goodArr.push(goodArr[i]);
        // console.log(this.data.goodArr)
      }
    }
    this.setData({
      goodArr : this.data.goodArr,
    })
    // 声明全局变量
    app.globalData.goodArr = this.data.goodArr;

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