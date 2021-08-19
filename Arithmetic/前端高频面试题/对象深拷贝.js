// 基础版
// 没有解决set里面包含了引用类型怎么处理
var obj = {
  number: 1,
  string: 'string',
  array: [1, 2, 3, 4],
  obj: {
    obj: {
      number: 2
    }
  },
  regexp: new RegExp(/a/),
  set: new Set().add([1, 2, 3, 4, 5, 6])
}
obj.set.add('string')


function deepMerge(data) {
  if (Object.prototype.toString.call(data) !== '[object Object]') {
    throw new Error('无法拷贝非对象类型')
  }
  let mydata = {}
  for (var key in data) {
    if (Object.prototype.toString.call(data[key]) === '[object Array]') {
      mydata[key] = []
      for (var item of data[key]) {
        mydata[key].push(item)
      }
    } else if (Object.prototype.toString.call(data[key]) === '[object Object]') {
      mydata[key] = deepMerge(data[key])
    } else if (Object.prototype.toString.call(data[key]) === '[object Function]') {
      mydata[key] = data[key].bind()
    } else if (Object.prototype.toString.call(data[key]) === '[object Set]') {
      mydata[key] = new Set()
      for (var item of data[key]) {
        mydata[key].add(item)
      }
    } else {
      mydata[key] = data[key]
    }
  }
  return mydata
}
var b = deepMerge(obj)
console.log(b, obj)
