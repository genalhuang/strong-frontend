var cp = require('child_process');
var n = cp.fork(__dirname + '/sub.js');
n.on('message',function(m) {
  console.log('Parent got message:', m)
})
n.send({hello: 'world'})