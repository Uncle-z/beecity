// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    text: "滚动信息测试滚动信息测试滚动信息测试滚动信息测试滚动信息测试滚动信息测试滚动信息测试",
    speedValue: 30,
    show: false,
    actions: [
      {
        name: '一周之内'
      },
      {
        name: '一个月之内'
      },
      {
        name: '总计',
        subname: '副文本'
      }
    ],
    hasChecked: '一周之内'
  },
  onChange(event) {
    console.log(event)
    let urlname = event.detail
    if (urlname == 'score'){
      wx.navigateTo({
        url: '/pages/' + urlname + '/index' ,
      })
    }else{
      wx.navigateTo({
        url: '/pages/index/' + urlname,
      })
    }
    // wx.showToast({
    //   title: `点击标签 ${event.detail + 1}`,
    //   icon: 'none'
    // });
  },
  goTo(event){
    console.log(event)
    let urlname = event.currentTarget.dataset.url
    wx.navigateTo({
      url: '/pages/index/' + urlname,
    })
  },
  onCheckTime(){
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  onSelect(event) {
    console.log(event.detail);
    let times = event.detail.name;
    this.setData({ hasChecked: times })
  },

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