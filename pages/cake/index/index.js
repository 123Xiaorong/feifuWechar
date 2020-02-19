// pages/cake/index/index.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // ================轮播图=====================
    // 轮播数据
    arrLunBo: [
      {
      img:"bread7_lunbo1.jpg"
    }, {
        img: "bread9_lunbo1.jpg"
      }, {
        img: "goods9_lunbo1.jpg"
      }, {
        img: "goods16_lunbo1.jpg"
      }],
      // 商品数组
      goodsArr:[],
      // 类别数组
      goodStyleArr:[],
    // 搜索框的值
    searchVal:null,
    // 查找的商品
    goodSearchArr:[],
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
    // ================分类查看=====================
    arrStyle:[
      {
        id: 1,
        icon: "../../../images/image/6.jpg",
        title: "推荐"
      },
      {
        id: 2,
        icon: "../../../images/image/1.jpg",
        title: "巧克力"
      },
      {
        id: 3,
        icon: "../../../images/image/2.jpg",
        title: "芝士"
      },
      {
        id: 4,
        icon: "../../../images/image/3.jpg",
        title: "慕斯"
      },
      {
        id: 5,
        icon: "../../../images/image/4.jpg",
        title: "奶油"
      }
    ],
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // ================轮播图:动态请求=====================
    // wx.request({
    //   method: 'post',
    //   url: 'http://172.17.2.207:8888/getAllCake.do', //仅为示例，并非真实的接口地址
    //   success:res=>{
    //     // console.log(res.data);
    //     //  数组去重
    //     for (var j = 0; j < res.data.length; j++) {
    //       for (var k = j + 1; k < res.data.length; k++) {
    //         if (res.data[j].G_id == res.data[k].G_id) {
    //           res.data.splice(j + 1, 1);
    //           k--;
    //         }
    //       }
    //     }
    //     //  console.log(res.data);
    //     this.data.arrLunBo = res.data
    //     this.data.arrLunBo = this.data.arrLunBo.splice(0, 4);
    //     // 必须重新写入数据
    //     this.setData({
    //      arrLunBo: this.data.arrLunBo
    //     })
    //     // console.log(this.data.arrLunBo)
    //     // console.log(this.data.arrTest)
        
    //   }
    // })
    // ================商品展示=====================
    // this.setData({
    //   list: this.data.arrGoods
    // })
    wx.request({
      method: 'post',
      url: 'http://localhost:8888/getAllCake.do', //仅为示例，并非真实的接口地址
      success:res=>{
        // console.log(res.data);
        //  数组去重
        for (var j = 0; j < res.data.length; j++) {
          for (var k = j + 1; k < res.data.length; k++) {
            if (res.data[j].G_id == res.data[k].G_id) {
              res.data.splice(j + 1, 1);
              k--;
            }
          }
        }
        //  console.log(res.data);
        this.data.goodsArr = res.data
        // this.data.goodsArr = this.data.goodsArr.splice(0, 14);
        // 必须重新写入数据
        this.setData({
          goodsArr: this.data.goodsArr
        })
        // 声明全局变量
        app.globalData.goodsArr = this.data.goodsArr;
        // console.log(this.data.goodsArr)
        // console.log(this.data.arrTest)
      }
    })

  },
  searchVal:function(e){
    // console.log(e.detail);
    this.setData({
      searchVal: e.detail.value
    })
  },
  // 搜索商品点击函数
  searchGood: function (e) {
    // console.log("搜索商品了")
    console.log(this.data.searchVal)
    for(var p=0;p<this.data.goodsArr.length;p++){
      if (this.data.goodsArr[p].goodsname == this.data.searchVal){
        this.data.goodSearchArr.push(this.data.goodsArr[p]);
      }
    }
    this.setData({
      goodsArr: this.data.goodSearchArr
    })
  },

  //标签切换
  switchTab:function(e){
    // console.log(123)
    console.log(e.currentTarget.dataset.id)
    // console.log(this.data.arrStyle)
    // console.log(this.data.goodsArr)
    for (var t = 0; t < this.data.arrStyle.length;t++){
      if (this.data.arrStyle[t].id==e.currentTarget.dataset.id){
        console.log(this.data.arrStyle[t].title)
        if (this.data.arrStyle[t].title=="芝士"){
          this.data.arrStyle[t].title ="芝士口味";
          for (var j = 0; j < this.data.goodsArr.length;j++){
            if (this.data.goodsArr[j].flavor == this.data.arrStyle[t].title){
              // console.log('找到了')
              this.data.goodStyleArr.push(this.data.goodsArr[j]);
            }
          }
          // console.log(this.data.goodStyleArr)
          this.setData({
            goodsArr:this.data.goodStyleArr
          })
          // console.log(this.data.goodsArr)
        }
        else if (this.data.arrStyle[t].title == "巧克力") {
          this.data.arrStyle[t].title = "巧克力味";
          for (var j = 0; j < this.data.goodsArr.length; j++) {
            if (this.data.goodsArr[j].flavor == this.data.arrStyle[t].title) {
              // console.log('找到了')
              this.data.goodStyleArr.push(this.data.goodsArr[j]);
            }
          }
          // console.log(this.data.goodStyleArr)
          this.setData({
            goodsArr: this.data.goodStyleArr
          })
          // console.log(this.data.goodsArr)
        }
        else if (this.data.arrStyle[t].title == "慕斯") {
          this.data.arrStyle[t].title = "慕斯口味";
          for (var j = 0; j < this.data.goodsArr.length; j++) {
            if (this.data.goodsArr[j].flavor == this.data.arrStyle[t].title) {
              // console.log('找到了')
              this.data.goodStyleArr.push(this.data.goodsArr[j]);
            }
          }
          // console.log(this.data.goodStyleArr)
          this.setData({
            goodsArr: this.data.goodStyleArr
          })
          // console.log(this.data.goodsArr)
        }
        else if (this.data.arrStyle[t].title == "奶油") {
          this.data.arrStyle[t].title = "奶油口味";
          for (var j = 0; j < this.data.goodsArr.length; j++) {
            if (this.data.goodsArr[j].flavor == this.data.arrStyle[t].title) {
              // console.log('找到了')
              this.data.goodStyleArr.push(this.data.goodsArr[j]);
            }
          }
          // console.log(this.data.goodStyleArr)
          this.setData({
            goodsArr: this.data.goodStyleArr
          })
          // console.log(this.data.goodsArr)
        }
        else if (this.data.arrStyle[t].title == "推荐") {
          this.data.goodStyleArr = this.data.goodsArr.splice(6, 6);
          this.setData({
            goodsArr: this.data.goodStyleArr
          })
        }

      }
    }
    
  },
  getDetail:e=>{
    // console.log(e.currentTarget.dataset.aid);
    wx.navigateTo({
      url: '../goodDetail/goodDetail?G_id=' + e.currentTarget.dataset.aid,
    })
  },
  purseTap:e=>{
    // 声明全局变量
    app.globalData.goodId = e.currentTarget.dataset.aid;
    // console.log(app.globalData.shwoDialog)
    wx.switchTab({
      url: '../cart/cart',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})