// 状态模式之闭包 实现一个开关灯例子
var delegate = function(client, delegation) {
  return {
    buttonWasPressed: function() {
      return delegation.buttonWasPressed.apply(client, arguments);
    }
  }
}

var FSM = {
  off: {
    buttonWasPressed: function() {
      console.log('关灯');
      this.button.innerHTML = "下一次开灯"
      this.currState = this.onState;
    }
  },
  on: {
    buttonWasPressed: function() {
      console.log('开灯')
      this.button.innerHTML = '下一次关灯'
      this.currState = this.offState;
    }
  }
}

var Light = function() {
  this.offState = delegate(this, FSM.off);
  this.onState = delegate(this, FSM.on);
  this.currState = this.offState;
  this.button = null;
}
Light.prototype.init = function() {
  var button = document.createElement('button');
  var self = this;
  this.button = document.body.appendChild(button);
  this.button.innerHTML = "已关灯";
  this.button.onclick = function() {
    self.currState.buttonWasPressed();
  }
}

var light = new Light()
light.init()