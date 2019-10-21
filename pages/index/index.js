Page({

  /**
   * 页面的初始数据
   */
  data: {
    navlist:[],
    currentIndexNav:0,
    swiperlist:[],
    videoslist:[]
  },
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  // 在data同级目录发起请求
  // request内部是一个对象，包含两个部分，1是请求地址，2是成功的回调
  getNavList(){
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success:(res)=>{
        if(res.data.code===0){
          this.setData({
            navlist:res.data.data.navList
          })
        }
      }
    })
  },
  getSwiPerList(){
    wx.request({
      url:'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success:(res)=>{
        if(res.data.code===0){
          console.log(res)
          this.setData({
            swiperlist:res.data.data.swiperList
          })
        }
      }
    })
  },
  getVideoList(){
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success:(res)=>{
        console.log(res.data.data.videosList)
        if(res.data.code===0){
          this.setData({
            videoslist:res.data.data.videosList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getSwiPerList();
    this.getVideoList();
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