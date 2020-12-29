var net = require('net');
var client = net.connect({port: 8000},function() {
  client.write('chenguanxi')
})
client.on('data', function(res){
  console.log(res.toString())
})