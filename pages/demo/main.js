// pages/demo/main.js
import { getDate, howDaysThisMonth, getDaysArr, MAX_GRIDE_ITEM} from "dateUtils.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dates:[],
    weeks:["一","二","三","四","五","六","日"],
    nowMonth:new Date().getMonth() + 1,
    nowYear:new Date().getFullYear(),
    nowDay:new Date().getDate(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    year: new Date().getFullYear()
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
  updateUI: function () {
    var days = getDaysArr(this.data.nowYear, this.data.nowMonth)
    this.setData({
      dates: days
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.updateUI()
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
  
  },
  onLeftClick:function(e){
    console.log(this.data.nowMonth, this.data.nowYear)
    if(this.data.nowMonth == 1) {
        this.setData({
          nowMonth:12,
          nowYear:this.data.nowYear - 1
        })
    } else {
        this.setData({
          nowMonth:this.data.nowMonth - 1
        })
    }
    this.updateUI()
  },
  onRightClick:function(e) {
    if(this.data.nowMonth == 12) {
        this.setData({
          nowMonth:1,
          nowYear:this.data.nowYear + 1
        })
    } else {
        this.setData({
            nowMonth:this.data.nowMonth + 1
        })
    }
    this.updateUI()
  }
})