// pages/dynamic/dynamic.js
import common from "../../utils/public.js";
var pageNum=0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dyLists:[],
    onLoading:false
  },

  getDyList(page=1){
    pageNum=page
    this.setData({
      onLoading:true
    })
    wx.request({
      url: 'https://ku.qingnian8.com/school/list.php',
      data:{
        num:7,
        page:page
      },
      success:res=>{

        if(res.data.length==0 || res.data.length<7){
          this.setData({
            onLoading:false
          })
        }

        res.data.forEach(item=>{
          item.posttime=common.getMyData(item.posttime,"Y-m-d");
        })


        var oldDyList=this.data.dyLists;
        var newDyList=oldDyList.concat(res.data);
        this.setData({
          dyLists:newDyList
        })
        wx.stopPullDownRefresh()
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDyList()
  },

 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {    
    this.getDyList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    pageNum++
    this.getDyList(pageNum);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})