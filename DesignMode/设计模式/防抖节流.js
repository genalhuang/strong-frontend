// 防抖
function debounce(fn,wait) {
  var timer = null;
  return function() {
    var context = this
    var args = arguments
    if(timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(function () {
      fn.apply(context,args)
    },wait)
  }
}



// 节流
var throttle = function(fn,interval) {
  var self = fn,
  timer
  firstTime = true;
  return function() {
    var args = arguments;
    if(firstTime) {
      self.apply(this,args);
      return firstTime = false;
    }
    if(timer) {
      return false;
    }
    timer = setTimeout(function() {
      clearTimeout(timer);
      timer = null;
      self.apply(this,args)
    },interval || 500)
  }
}

window.onresize = throttle(function() {
  console.log(1)
},500)

