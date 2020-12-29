var net = require('net')
var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n')
  // socket.pipe(socket)
})
server.on('data',function(data) {
  console.log(data.toString())
})
server.listen(3000)