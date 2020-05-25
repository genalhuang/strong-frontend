Function.prototype.uncurrying = function () {
  var self = this;
  return function () {
    var obj = Array.prototype.shift.call(arguments)
    return self.apply(obj, arguments)
  }
}

var push = Array.prototype.push.uncurrying()

  (function () {
    push(arguments, 4)
    console.log(arguments)
  })(1, 2, 3)