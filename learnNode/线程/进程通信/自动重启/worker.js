// var http = require('http')
// var server = http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-type': 'text/plain'});
//   res.end('handled by child, pid is ' + process.pid + '\n')
// })
// var worker;
// process.on('message',function(m, tcp) {
//   if(m==='server') {
//     worker = tcp;
//     // 如果有错误代码，那么会被uncaught监听到 然后关闭该进程
//     // worker.a=c;
//     worker.on('connection', function(socket) {
//       server.emit('connection',socket)
//     })
//   }
// })

// process.on('uncaughtException', function() {
//   console.log('进程发生错误')
//   worker.close(function() {
//     // 已有的连接断开后，退出进程
//     process.exit(1)
//   })
// })




// 自杀信号
var http = require('http')
var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-type': 'text/plain'});
  throw new Error('throw exception')
})
var worker;
process.on('message',function(m, tcp) {
  if(m==='server') {
    worker = tcp;
    worker.on('connection', function(socket) {
      server.emit('connection',socket)
    })
  }
})
process.on('uncaughtException', function(err) {
  process.send({act: 'suicide'});
  worker.close(function() {
    process.exit(1)
  })
})