var router = require('koa-router')()

router.get('/',(ctx)=>{
  ctx.body='这是一个a的首页'
})
router.get('/page',(ctx)=>{
  ctx.body='这是一个a的子页'
})

module.exports = router.routes()