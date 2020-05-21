const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
// ctx 上下文 context 包含了rquest和response等信息
router.get('/', async (ctx, next) => {
  // 返回数据 等于res.writeHead() res.end() 
  // 但是注意即便是这句话执行完，后面的中间件还是会执行
  // 除非你不调用next方法
  ctx.body='Hello koa';
  
  console.log('home')
  next()

}).get('/news', async (ctx, next) => {
  // 获取get传值
  // 1从ctx中读取 获取到的是对象
  console.log(ctx.query)
  // 2从querystring中读取，获取到的是一个字符串
  console.log(ctx.querystring)
  // 3从requet里面获取
  console.log(ctx.request.url)
  console.log('xinwen')
  ctx.body='新闻 page'
  next()
})


app.use(router.routes())
app.use((ctx, next)=>{
  console.log('中间件')
  next()
})
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('start 3000')
})