let proto = {
 // proto.url = ctx.request.url
}

function defineGetter(property, name) {
  // 自定义获取器 代理
  proto.__defineGetter__(name, function(){
    return this[property][name]
  })
}

function defineSetter(property, name){
  proto.__defineSetter__(name, function(value) {
    this[property][name] = value
    return value
  })
}


defineGetter('request', 'url');
defineGetter('request', 'path');
defineGetter('response', 'body')
defineSetter('response', 'body')
module.exports = proto;