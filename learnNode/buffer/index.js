// var buffer1 = new Buffer(1)
// var buffer2 = new Buffer(9)
// var arr = buffer1 + buffer2
// console.log(arr)// 输出空 因为buffer相加会转换成字符串 两个都是空buffer

// var buffer1 = new Buffer(1)
// var buffer2 = new Buffer(9)
// var arr = [buffer1 ,buffer2]
// console.log(Buffer.concat(arr))// 输出空 因为buffer相加会转换成字符串 两个都是空buffer


// + 处理buffer
// var http = require('http');
// http.createServer(function (request, response) {
//   var a = ''
//   request.on('data', function (chunk) {
//     a += chunk
//   })
//   request.on('end',function() {
//     console.log(a)
//   })
//   response.writeHead(200, { 'Content-Type': 'text/plain' });

//   // 发送响应数据 "Hello World"
//   response.end('Hello World\n');
// }).listen(8888);

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');





// 数组处理buffer 这样返回的就是buffer
// var http = require('http');
// http.createServer(function (request, response) {
//   var a = []
//   request.on('data', function (chunk) {
//     a.push(chunk)
//   })
//   request.on('end',function() {
//     console.log(a)
//   })
//   response.writeHead(200, { 'Content-Type': 'text/plain' });

//   // 发送响应数据 "Hello World"
//   response.end('Hello World\n');
// }).listen(8888);

// // 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');


// buffer转字符串
// console.log(new Buffer('你','utf-8'))

