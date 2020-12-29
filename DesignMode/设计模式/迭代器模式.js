// 内部迭代
// var each = function(ary,callback) {
//   for(var i=0;i<ary.length;i++) {
//     callback.call(ary[i],i,ary[i])
//   }
// }

// each([1,2,3],function(i,n) {
//   console.log(i,n)
// })

// 外部迭代
var Iterator = function(arr) {
  var current = 0;
  var next = function() {
    current++
  }
  var isDone = function() {
    return current >= arr.length
  }
  var getCurrItem = function() {
    return arr[current]
  }

  return {
    next,
    isDone,
    getCurrItem,
    length: arr.length
  }
}

var compare = function(Iterator1,Iterator2) {
  if(Iterator1.length !== Iterator2.length) {
    return console.log('1 2不相等')
  }
  while(!Iterator1.isDone() && !Iterator2.isDone()) {
    if(Iterator1.getCurrItem() != Iterator2.getCurrItem()) {
      console.log('1 2不相等')
      return
    }
    Iterator1.next()
    Iterator2.next()
  }
  console.log('1 2相等')
}
compare(new Iterator([0,1,2]),new Iterator([0,1,2]))