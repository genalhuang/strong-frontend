// var child = require('child_process').fork('son.js');

// var server = require('net').createServer();
// server.on('connection', function(socket) {
//   socket.end('handled by parent\n');
// })
// server.listen(8000, function() {
//   child.send('server', server);
// })



var cp = require('child_process');
var child1 = cp.fork('son.js')
var child2 = cp.fork('son.js')

var server = require('net').createServer();
server.listen(8000, function() {
  child1.send('server',server)
  child2.send('server',server)
  server.close()
})