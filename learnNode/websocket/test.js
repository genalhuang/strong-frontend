var shasum = require('shasum')
var webSocket = function(url) {
  this.options = parseUrl(url);
  this.cokkect();
}
var key ='asdfasdf'
webSocket.prototype.setSocket = function (socket) {
  this.scoket = socket;
}
webSocket.prototype.connect = function() {
  var that = this;
  var key = new Buffer(this.options.protocolVersion + '-' + Date.now()).toString('base64');
  var shasum = crypto.createHash('sha1')
}
var expected = shasum.update(key + 'asdfasdfasdfas').digest('base64');
var options = {
  prot: this.options.port,
  host: this.options.hostname,
  headers: {
    "Connection":'Upgrade',
    'Sec-WebSocket-Version': this.options.protocolVersion,
    'Sec-WebSocket-key': key
  }
};
var req = http.request(options);
req.end();
req.on('upgrade', function(res, socket, upgradeHead) {
  that.sectSocket(socket);
  that.onopen();
})