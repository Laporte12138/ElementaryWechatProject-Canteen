Page({
  // 页面的初始数据
  data: {
    inputShowed: false,  //初始文本框不显示内容
    imgUrls: [
      'cloud://progmme2-5g6pg1lo66480fe7.7072-progmme2-5g6pg1lo66480fe7-1303509378/gate.png',//放入轮播图相应的url
      'cloud://progmme2-5g6pg1lo66480fe7.7072-progmme2-5g6pg1lo66480fe7-1303509378/canteen.png',
      'cloud://progmme2-5g6pg1lo66480fe7.7072-progmme2-5g6pg1lo66480fe7-1303509378/dormitory.png',
      'cloud://progmme2-5g6pg1lo66480fe7.7072-progmme2-5g6pg1lo66480fe7-1303509378/library.png',
      'cloud://progmme2-5g6pg1lo66480fe7.7072-progmme2-5g6pg1lo66480fe7-1303509378/square.png' 
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    hidden1:true,
    chosen:'',
    word:''
  },
  // 使文本框进入可编辑状态
  showInput: function () {
    this.setData({
      inputShowed: true,   //设置文本框可以输入内容
    });
  },
  // 取消搜索
  hideInput: function () {
    this.setData({
      inputShowed: false
    });
  },

  a:function(e){                                  //获取用户输入数据
    console.log(e.detail)                         //上传用户输入数据到data
    var character=this.data.word
    character = e.detail.value
    this.setData({
      word:character
   })
  },


  goInput:function(){
        var that=this
        var word_1 = this.data.word
        let deviceid = "your deviced id"   //与onenet联动，要替换
        let apikey = "your apikey" //要替换
        let data={
            "datastreams": [{
                    "datapoints": [{                         
                            "value": word_1      //上传搜索框内输入的数据，要替换
                        }] ,
                    "id": "user"                //自定义，要替换
                },]  
        }
          
    wx.request({
            url: "your website's url",//要替换
            method:'POST',
            header:{
              "content-type": 'application/json',
              "api-key": "your apikey"//要替换
            },
            data:JSON.stringify(data),
            success(res){
              console.log("更新数据成功",res)
            },
            fail: function(res){  
              wx.showToast({ title: '系统错误' })     
            },
            complete:function(res){
              wx.hideLoading()
            }
          })

     wx.navigateTo({                                  //跳转页面
      url: '../search_more/search_more',
    })
        },  
});
