var Model = function(sex) {
  this.sex = sex
}
Model.prototype.takePhoto = function() {
  console.log('sxe = ' + this.sex + ' underwear = ' + this.underwear)
}

var maleModel = new Model('male')
var femaleModel = new Model('female')

for(var i=0;i<=5;i++) {
  maleModel.underwear = 'underwear' + i
  maleModel.takePhoto()
}

for(var i=0;i<=5;i++) {
  femaleModel.underwear = 'underwear' + i
  femaleModel.takePhoto()
}




// 亨元模式加入对象池优化
var objPoolFactory = function(createObjFn) {
  var objPool = []

  return {
    create: function() {
      var obj = objPool.length === 0 ? createObjFn.apply(this,arguments) : objPool.shift()
      return obj
    },
    recover: function(obj) {
      objPool.push(obj)
    }
  }
}

var iframeFactory = objPoolFactory(function() {
  var iframe = document.createElement('iframe')
  document.body.appendChild(iframe)
  iframe.onload = function() {
    iframe.onload = null
    iframeFactory.recover(iframe)
  }
  console.log(iframe)
  return iframe
})

var iframe1 = iframeFactory.create()
console.log(iframe1)
iframe1.src = 'http://www.baidu.com'

var iframe2 = iframeFactory.create()
iframe2.src = 'http://www.weibo.com'
console.log(iframe1,iframe2)