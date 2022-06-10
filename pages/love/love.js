// pages/love/love.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      love:''
  },

  trace:function(){       
    var that=this
    let deviceid = "your deviced id"      //要替换
    let apikey = "your apikey"  //要替换
    var AK = "2hvBtYohaexm2qERHbtrBGu6uYZ1TITZ" 
   wx.request({
      url: "your website's url",    //要替换
      method:'GET',
      header:{
        "content-type": 'application/json',
        "api-key": "your apikey"//要替换
      },
      success(res){
        console.log("更新数据成功",res)
          that.setData({  //下面dishes以及路径替换为你的变量名以及获取数据的路径
          love:res.data.data.datastreams[1].datapoints[0].value[0]
        }) 
      },
      fail: function(res){
        wx.showToast({ title: '系统错误' })
      },
      complete:function(res){
        wx.hideLoading()
      }
    })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.trace(options.id)
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