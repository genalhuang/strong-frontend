// 垃圾简单版
var data = {
  val: 99,
  left:  {
    val: 12,
    left: null,
    right:   { 
      val: 13, 
      left: null, 
      right: {
        val: 52,
        left: {
          val: 29,
          left: null,
          right: null
        },
        right: null
      } 
    }
  },
  right:  [1,3,4,5,56]
}

function deepMerge(data) {
  if(Object.prototype.toString.call(data) !== '[object Object]') {
    throw new Error('无法拷贝非对象类型')
  }
  let mydata = {}
  for(var key in data) {
    if(typeof key === 'string') {
      mydata[key] = data[key]
    } else if(Object.prototype.toString.call(key) === '[object Array]') {
      mydata[key] = []
      for(var item of data[key]) {
        mydata[key].push(item)
      }
    } else if(Object.prototype.toString.call(key) === '[object Object]') {
      deepMerge(data[key])
    }
  }
  return mydata
}

console.log(deepMerge(data))