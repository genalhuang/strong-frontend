const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
router.get('/:aid/:cid', async (ctx, next) => {
  ctx.body='动态路由';
  console.log(ctx.params)// {aid:xxx,cid:xxx}
  next()

})

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('start 3000')
})