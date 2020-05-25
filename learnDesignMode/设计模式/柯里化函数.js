// 先来个简单版
// var cost = (function() {
//   var args = []
//   return function() {
//     if(arguments.length === 0) {
//       var money = 0;
//       for(var i=0,l=args.length;i<l;i++) {
//         money += args[i]
//       }
//       return money;
//     } else {
//       [].push.apply(args,arguments)
//     }
//   }
// })()
// cost(100)
// cost(20)
// console.log(cost())


// 通用科里化
var currying = function(fn) {
  var args = [];
  return function a() {
    if(arguments.length === 0) {
      let newargs = Array.prototype.concat([],args) // 因为（）不传的情况
      // 之后如果再调用传参，应该清空一下计算过的args里面的值
      args = [];
      return fn.apply(this,newargs);
    } else {
      [].push.apply(args,arguments);
      return arguments.callee;// 这个很重要，返回当前函数 实现链式调用
      // return  a; 当然也可以用函数名替代
    }
  }
}

// 使用闭包
// var cost = (function() {
//   var money = 0;
//   return function() {
//     for(var i=0,l=arguments.length;i<l;i++) {
//       money +=arguments[i]
//     }
//     return money;
//   }
// })();

// 不用闭包也行的
var money = 0;
var cost =  function() {
  for(var i=0,l=arguments.length;i<l;i++) {
    money +=arguments[i]
  }
  return money;
}

debugger;
var cost = currying(cost)
console.log(cost(100).toString())
console.log(cost(200)(600)())
console.log(cost(200)())

// 实现
var currying = function(fn) {
  var args = [];
  return function a( ) {
    if(arguments.length === 0 ) {
      let newargs  = Array.prototype.concat([],args)
      args = []
      return fn.apply(this,newargs)
    } else {
      [].push(args,arguments)
      return a
    }
  }
}
var cost = (function() {
  var money = 0;
  return function() {
    for(var i=0,l=arguments.length;i<l;i++) {
      money +=arguments[i]
    }
    return money;
  }
})();
