// process.on('message', function(m, server) {
//   if(m==='server') {
//     server.on('connection', function(socket) {
//       socket.end('handled by child\n')
//     })
//   }
// })





var http = require('http');
var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/plain' });
  res.end('handled by child, pid is ' + process.pid + '\n')
})

process.on('message', function (m, tcp) {
  if (m === 'server') {
    tcp.on('connection', function (socket) {
      server.emit('connection', socket)
    })
  }
})