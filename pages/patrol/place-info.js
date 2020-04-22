// pages/patrol/place-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 'ceshi',
    option1: [
      { text: '餐饮', value: 0 },
      { text: '超市', value: 1 },
      { text: '药店', value: 2 },
      { text: '美容美发', value: 3 }
    ],
    value1: 0,
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
  },
  onRadioChange(e) { },

  /**
   * 生命周期函数--监听页面加载
   */
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