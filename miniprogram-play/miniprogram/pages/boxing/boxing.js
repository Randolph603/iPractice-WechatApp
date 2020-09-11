"use strict";
var app = getApp();
Page({
  /**
   * Page initial data
   */
  data: {
    userInfo: {},
    hasUserInfo: false,
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    var _this = this;
    if (app.globalData.userInfo) {
        this.setData({
            userInfo: app.globalData.userInfo,
            hasUserInfo: true,
        });
    } else {
        wx.getUserInfo({
            success: function (res) {
                app.globalData.userInfo = res.userInfo;
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                });
            },
        });
    }
  }
})