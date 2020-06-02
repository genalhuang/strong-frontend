// AOP实现装饰者模式(不改变Function原型)

// var before = function(fn,beforeFn) {
//   return function() {
//     beforeFn.apply(this,arguments)
//     fn.apply(this,arguments)
//   }
// }

// var a = before(
//   function(){console.log(3)},
//   function(){console.log(2)}
// )

// a = before(a, function(){console.log(1)})
// a()

// 利用AOP动态改变函数的参数
Function.prototype.before = function(beforeFn) {
  var _self = this;
  return function() {
    beforeFn.apply(this,arguments);
    return _self.apply(this,arguments);
  }
}

var func = function(param) {
  console.log(param);
}

func = func.before(function(param) {
  param.b = 'b'
})

func({a: 'a'})