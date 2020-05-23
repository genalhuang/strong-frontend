Function.prototype.before = function(beforeFn) {
  var __self = this;
  return function() {
    beforeFn.apply(this,arguments)
    return __self.apply(this,arguments)
  }
}

Function.prototype.after = function(afterFn) {
  var __self = this;
  return function() {
    var ret = __self.apply(this.arguments)
    afterFn.apply(this,arguments)
    return ret
  }
}
var func = function() {
  console.log(2)
  return 2
}

func = func.before(function() {
  console.log(1)
})
.after(function() {
  console.log(3)
})

console.log(func())