/**职责链模式
 * 
 * 1. 不同的逻辑放进不同的函数
 * 2. 定义一个chain构造函数，并设置链中的下一个节点
 * */

// 不同的购买策略
var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500元定金预购，得到100优惠券')
  } else {
    return 'nextSuccessor'
  }
}

var order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200元定金预购，得到50优惠券')
  } else {
    return 'nextSuccessor'
  }
}

var orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买，无优惠券')
  } else {
    console.log('手机库存不足')
  }
}

// 定义职责链构造函数
var Chain = function (fn) {
  this.fn = fn
  this.successor = null
}
Chain.prototype.setNextSuccessor = function (successor) {
  return this.successor = successor
}
Chain.prototype.passRequest = function () {
  var ret = this.fn.apply(this, arguments)
  if (ret === 'nextSuccessor') {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments)
  }
  return ret
}

// 测试
var ChainOrder500 = new Chain(order500)
var ChainOrder200 = new Chain(order200)
var ChainOrderNormal = new Chain(orderNormal)

// 设置职责链
ChainOrder500.setNextSuccessor(ChainOrder200)
ChainOrder200.setNextSuccessor(ChainOrderNormal)

ChainOrder500.passRequest(1,true,500)
ChainOrder500.passRequest(2,true,500)
ChainOrder500.passRequest(3,true,100)
ChainOrder500.passRequest(3,false,0)


// 使用AOP实现职责链
// 不同的购买策略
var order500 = function (orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    console.log('500元定金预购，得到100优惠券')
  } else {
    return 'nextSuccessor'
  }
}

var order200 = function (orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    console.log('200元定金预购，得到50优惠券')
  } else {
    return 'nextSuccessor'
  }
}

var orderNormal = function (orderType, pay, stock) {
  if (stock > 0) {
    console.log('普通购买，无优惠券')
  } else {
    console.log('手机库存不足')
  }
}

Function.prototype.after = function (fn) {
  var self = this;
  return function () {
    var ret = self.apply(this, arguments);
    if (ret === 'nextSuccessor') {
      return fn.apply(this, arguments)
    }
    return ret;
  }
}

var order = order500.after(order200).after(orderNormal)

order(1, true, 500)
order(2, true, 500)
order(1, false, 500)
order(3, false, 500)
order(3, true, 0)