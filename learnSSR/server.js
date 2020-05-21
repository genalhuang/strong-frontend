const createApp = require('./app')
const server = require('express')()
const fs = require('fs')
const renderer = require('vue-server-renderer').createRenderer()

server.get('*',(req,res) => {
  const context = {url: req.url}
  const app = createApp(context)
  res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
  renderer.renderToString(app, (err,html) => {
    res.end(html)
  })
})

server.listen(8080)