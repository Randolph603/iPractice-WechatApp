import common from "../../utils/public.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[]
  },

  //发送网络请求获取真实的行业动态列表
  getRequest(){
    
    wx.request({
      url: 'https://ku.qingnian8.com/school/list.php',
      data:{
        num:5        
      },
      success:res=>{ 
        res.data.forEach(item=>{
          item.posttime=common.getMyData(item.posttime,"Y-m-d")
          item.title=common.getStrLen(item.title,25)
        })  
        this.setData({
          dataList:res.data
        }) 
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    this.getRequest();

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