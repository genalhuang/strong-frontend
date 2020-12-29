var router = require('koa-router')()
router.get('/',(ctx)=>{
  ctx.body='这是一个b的首页'
})
router.get('/page',(ctx)=>{
  ctx.body='这是一个b的子页'
})

module.exports = router.routes()