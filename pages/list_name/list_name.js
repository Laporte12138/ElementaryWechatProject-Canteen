// pages/list_name/list_name.js
Page({
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
f:function(){
  wx.navigateTo({
    url: '../../../first_flood/first_flood',
  })
},

s:function(){
  wx.navigateTo({
    url: '../../../second_flood/second_flood',
  })
},


t:function(){
  wx.navigateTo({
    url: '../../../third_flood/third_flood',
  })
},







  onLoad: function (options) {

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