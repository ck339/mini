//index.js
//获取应用实例
//index.js
Page({
  data: {
    //C:\Users\饭饭\WeChatProjects
    //轮播图配置
    autoplay: true,
    interval: 3000,
    duration: 1200
  },
  onLoad: function () {
    var that = this; 
    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "../../images/lunbo1.jpg"
        },
        {
          "id": 2,
          "imgurl": "../../images/lunbo2.jpg"
        },
        {
          "id": 3,
          "imgurl": "../../images/lunbo3.jpg"
        }
      ]
    }; 
    that.setData({
      lunboData: data.datas
    })
  }
})

