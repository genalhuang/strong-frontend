// 虚拟代理
// 文件同步案例
var syncFile = function(id) {
  console.log('开始同步文件，id为:' + id)
}

var proxySyncFile = (function() {
  var cache = [] // 保存一段时间内需要同步的id
  var timer;

  return function(id) {
    cache.push(id)
    if(timer) {
      return
    }
    timer = setTimeout(function() {
      syncFile(cache.join(','))
      clearTimeout(timer)
      timer = null
      cache = []
    },2000)
  }
})()

proxySyncFile('123abc')

// 缓存代理
var mult = function() {
  console.log('开始计算乘积')
  var a = 1;
  for(var i=0;i<arguments.length;i++) {
    a *= arguments[i]
  }
  return a
}

var proxyMultFactory = function(fn) {
  var cache = {}
  return function() {
    var args = Array.prototype.join.call(arguments,',');
    if(args in cache) {
      console.log('使用代理缓存')
      return cache[args]
    }
    return cache[args] = fn.apply(this,arguments)
  }
}
proxyMult = proxyMultFactory(mult)
console.log(proxyMult(1,2,3,4))
console.log(proxyMult(1,2,3,4))