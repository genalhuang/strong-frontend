var http = require('http');
var fs = require('fs')
// var mime = require('mime')
var path = require('path')
http.createServer(function (req, res) {
  req.sendfile = function(filepath) {
      var stream = fs.createReadStream(__dirname + filepath);
      res.setHeader('Content-Disposition','attachment; filename="' + 'edison.js' + '"')
      res.writeHead(200);
      stream.pipe(res);
  }
  req.sendfile('/data.js')

}).listen(8888);




