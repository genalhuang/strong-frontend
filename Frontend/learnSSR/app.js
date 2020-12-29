const Vue = require('vue');

module.exports = function createApp(context) {
  return new Vue({
    data: {
      url: context.url
    },
    template: `<div>访问的URL是: {{url}}</div>`
  })
}

// const Vue = require('vue')
// const server = require('express')()
// const fs = require('fs')
// const renderer = require('vue-server-renderer').createRenderer({
//   // 设置默认html模板
//   template: fs.readFileSync('./index.template.html','utf-8')
// })

// server.get('*', (req, res) => {
//   const app = new Vue({
//     data: {
//       url: req.url
//     },
//     template: `<div>访问的 URL 是： {{ url }}</div>`
//   })

//   // 设置html模板的差值的值
//   const context = {
//     name: '陈冠希',
//     content:'陈冠希做的ssr'
//   }
//   renderer.renderToString(app, context, (err, html) => {
//     if (err) {
//       res.status(500).end('Internal Server Error')
//       return
//     }

//     res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
//     res.end(`${html}`)
//   })
// })

// server.listen(8080)
