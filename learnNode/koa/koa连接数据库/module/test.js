const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const DB = require('./db')

// 数据查
router.get('/', async (ctx, next) => {
  console.log(ctx.params)
  ctx.body = await DB.find('user',{})
  next()
})

//数据增
router.get('/add/:name/:age', async (ctx, next) => {
  console.log(ctx.params)
  ctx.body = await DB.insert('user',{
    username: ctx.params.name, 
    age: ctx.params.age
  })
  next()
})

//数据改
router.get('/update/:name/:age/:name2/:age2', async (ctx, next) => {
  ctx.body = await DB.update('user',{
    username: ctx.params.name, 
    age: ctx.params.age
  },{
    username: ctx.params.name2, 
    age: ctx.params.age2
  })
  next()
})

//数据删
router.get('/remove/:name/:age', async (ctx, next) => {
  ctx.body = await DB.remove('user',{
    username: ctx.params.name, 
    age: ctx.params.age
  })
  next()
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('start 3000')
})