// pages/cake/goodDetail/goodDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    G_id:0,
    goodDetailsArr:[],
    goodDetailsImgsArr:[],
    goodDetailturnImg:[],
    // 是否显示面板指示点
    indicatorDots: true,
    // 滑动方向是否为纵向
    vertical: false,
    // 是否自动切换
    autoplay: true,
    // 自动切换时间间隔
    interval: 3000,
    // 滑动动画时长
    duration: 1000,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.G_id)
    wx.request({
      url: 'http://localhost:8888/getCake.do',
      data: {
        G_id:options.G_id,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        this.data.goodDetailsArr = res.data[0],
        this.data.goodDetailsImgsArr=res.data[0].imgs.split(",");
        if (res.data[0].turnImg.split(",").length==1){
          this.data.goodDetailturnImg = Array(res.data[0].turnImg);
        }else{
          this.data.goodDetailturnImg = res.data[0].turnImg.split(",");
        }
        this.setData({
          goodDetailsArr: this.data.goodDetailsArr,
          goodDetailsImgsArr: this.data.goodDetailsImgsArr,
          goodDetailturnImg: this.data.goodDetailturnImg,
        })
        // console.log(this.data.goodDetailsArr)
        // console.log(this.data.goodDetailsImgsArr);
        // console.log(this.data.goodDetailturnImg)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 轮播图只有一张图
    // if (this.data.goodDetailturnImg.length == 1) {
    //   this.data.indicatorDots = false;
    // } else {
    //   this.data.indicatorDots = true;
    // }
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