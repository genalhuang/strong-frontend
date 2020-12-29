// const Koa = require('koa');
// const router = require('koa-router')();
// const app = new Koa();

// // 应用级中间件
// // 可以匹配任何路由
// app.use(async(ctx,next)=> {

//   console.log('中间件', new Date())

//   await next() //当前卤藕匹配完成以后继续向下完成匹配
//   // 如果不写next则不会继续向下匹配
// })


// router.get('/', async (ctx, next) => {
//   ctx.body='hello koa';
// })

// app.use(router.routes())
// app.use(router.allowedMethods())
// app.listen(3000, () => {
//   console.log('start 3000')
// })










// 总结 next执行遵循微宏任务逻辑 注意async函数await前的代码以及new primise中的代码都是同步任务
// 微任务执行顺序先看微任务then层级后看微任务同层级的前后顺序，位置靠前执行越早
const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

app.use( (ctx,next)=>{
  console.log('应用级中间件')
   next() // next后面的代码在这个函数下的所有next执行完后会继续往下执行
  console.log('第一个中间件的next')
  if(ctx.status === 404) {
    ctx.status === 404;
    ctx.body = '这是一个404页面'
  } else {
    console.log(ctx.url)
  }
})

router.get('/news', async (ctx, next) => {
  console.log('这是一个新闻')
  await next();
  console.log('第一个路由匹配的next')
})

router.get('/news', async (ctx, next) => {
  console.log('这是第二个新闻')
  // ctx.body='这是第二个新闻'
  await next(); //当最后匹配到的路由没有调用next 则下一个应用级中间件不会执行
  console.log('第二个路由匹配的next')
})

app.use(router.routes())
app.use( (ctx, next) => {
  console.log('路由匹配后的中间件')
   next()
  console.log('路由匹配后的中间件2')
})
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('start 3000')
})




















