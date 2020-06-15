// 垃圾简单版
var data = {
  val: [1,2,4,5],
  left:  {
    val: 2,
    left: null,
    rigth: {
      val: 3
    }
  },
  right:  function () {
    console.log(a)
  }
}

function deepMerge(data) {
  if(Object.prototype.toString.call(data) !== '[object Object]') {
    throw new Error('无法拷贝非对象类型')
  }
  let mydata = {}
  for(var key in data) {
    if(Object.prototype.toString.call(data[key]) === '[object Array]') {
      mydata[key] = []
      for(var item of data[key]) {
        mydata[key].push(item)
      }
    } else if(Object.prototype.toString.call(data[key]) === '[object Object]') {
      mydata[key] = deepMerge(data[key])
    } else {
      mydata[key] = data[key]
    }
  }
  return mydata
}

console.log(deepMerge(data))