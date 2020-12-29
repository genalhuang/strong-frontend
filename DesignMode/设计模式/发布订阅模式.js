// 通用实现
var event = {
  clientList: {},
  listen: function (key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn);
  },
  trigger: function () {
    var key = Array.prototype.shift.call(arguments);
    var fns = this.clientList[key]
    if (!fns || fns.listen === 0) {
      return false;
    }

    for (var i = 0; i < fns.length; i++) {
      var fn = fns[i];
      fn.apply(this, arguments);
    }
  },
  // 取消监听
  remove: function (key, fn) {
    var fns = this.clientList[key];
    if (!fns) {
      console.log('你本来就没监听这个房子')
      return
    }
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (var l = fns.length - 1; l >= 0; l--) {
        var _fn = fns[l]
        if (_fn === fn) {
          fns.splice(l, 1)
        }
      }
    }
  }
}

// 给对象动态安装发布-订阅功能
var installEvent = function (obj) {
  for (var i in event) {
    obj[i] = event[i]
  }
}

// 测试
var salesOffices = {};
installEvent(salesOffices)

// 测试取消监听
let listenHouse = function (price) {
  console.log('88平房子价格 =', price)
}
salesOffices.listen('squareMeter88', listenHouse)
salesOffices.remove('squareMeter88', listenHouse)
salesOffices.remove('squareMeter150', listenHouse)

salesOffices.listen('squareMeter120', function (price) {
  console.log('120平房子价格 =', price)
})

salesOffices.trigger('squareMeter88', 20000)
salesOffices.trigger('squareMeter120', 40000)



// 全局的发布订阅模式
var event = (function(){
  var clientList= {};
  var listen = function (key, fn) {
    if (!clientList[key]) {
      clientList[key] = []
    }
    clientList[key].push(fn);
  }
  var trigger = function () {
    var key = Array.prototype.shift.call(arguments);
    var fns = clientList[key]
    if (!fns || fns.listen === 0) {
      return false;
    }

    for (var i = 0; i < fns.length; i++) {
      var fn = fns[i];
      fn.apply(this, arguments);
    }
  }
  var remove = function (key, fn) {
    var fns = clientList[key];
    if (!fns) {
      console.log('你本来就没监听这个房子')
      return
    }
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (var l = fns.length - 1; l >= 0; l--) {
        var _fn = fns[l]
        if (_fn === fn) {
          fns.splice(l, 1)
        }
      }
    }
  }

  return {
    listen,
    trigger,
    remove
  }
})()

event.listen('squareMeter120', function (price) {
  console.log('120平房子价格 =', price)
})

event.trigger('squareMeter120', 40000)