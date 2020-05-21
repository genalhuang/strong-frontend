// buffer 互转 字符串
var buf = new Buffer('我是陈冠希', 'utf-8')
console.log(buf.toString('utf-8'))

// 判断是否支持某编码
console.log(Buffer.isEncoding('utf-8'))