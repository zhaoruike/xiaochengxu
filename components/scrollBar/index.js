const app = getApp()
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  properties: {
    barList: {
      type: Array,
      value: [{
          text: "news",
          action: ""
        },
        {
          text: "news",
          action: ""
        },
        {
          text: "news",
          action: ""
        },
        {
          text: "news",
          action: ""
        },
        {
          text: "news",
          action: ""
        },
        {
          text: "news",
          action: ""
        },
        {
          text: "news",
          action: ""
        },
        {
          text: "news",
          action: ""
        }
      ]
    },
    actionIndex: {
      type: Number,
      value: 0
    },
    width:{
      type: String,
      value:"50px"
    }
  },
  created() {
  },

  attached: function() {
    this._changeAction();
    var len = this.data.barList.length;
    this.setData({
      parentWidth:len*parseInt(this.data.width)+"px"
    })
  },
  moved: function() {},
  detached: function() {},

  /**
   * 私有数据,组件的初始数据
   * 可用于模版渲染
   */
  data: {
    left:0,
    parentWidth:"0px"
  },

  /**
   * 组件的方法列表
   * 更新属性和数据的方法与更新页面数据的方法类似
   */
  methods: {
    _changeAction(newIndex) {
      var self = this
      if(newIndex == this.data.actionIndex) return;
      var oldIndex = this.data.actionIndex;
      var newBarList = this.data.barList.map(function(item, index) {
        if (newIndex!=undefined) {
          self.setData({
            actionIndex: newIndex
          })
          if (oldIndex == index) {
            return {
              text: item.text,
              action: ""
            }
          }
          if (newIndex == index) {
            return {
              text: item.text,
              action: "action"
            }
          }
          if (newIndex != index && oldIndex != index) {
            return item
          }
        } else {
          if (oldIndex == index) {
            return {
              text: item.text,
              action: "action"
            }
          } else {
            return item
          }
        }
      })
      this.setData({
        barList: newBarList
      })
    },
    getIndex(event){
      return event.currentTarget.dataset.index;
    },
    moveBar(index){
      var scrollLeft = (index + 0.5) * parseInt(this.data.width);
      var screenWidth = app.screenWidth;
      this.setData({
        left: scrollLeft - screenWidth / 2
      })
    },
    _callback(event) {
      var index = this.getIndex(event)
      this.moveBar(index)
      // var screenWidth = app.screenWidth;
      // var distance = screenWidth/2-event.detail.x
      // if(distance>0){
      //   this.setData({
      //     left: event.currentTarget.offsetLeft - Math.abs(distance)
      //   })
      // }
      // if (distance < 0) {
      //   this.setData({
      //     left: event.currentTarget.offsetLeft + Math.abs(distance)
      //   })
      // }
      this._changeAction(index);
      this.triggerEvent("callback",{index:index})
    }
  }
})