var Koa = require('koa')
var router = require('koa-router')();

var a = require('./routes/a')
var b = require('./routes/b')

var app = new Koa();
app.on('some_thing',(a)=>{
  console.log('something触发',a)
})
app.context.a = '陈冠希' //ctx形参的原型

//配置路由、
router.get('/',(ctx)=>{
  ctx.redirect('http://google.com');
  console.log(ctx.get('Accept'))
  ctx.append('Link', '<http://127.0.0.1/>');
  ctx.status = 301;
  ctx.redirect('/cart');
  ctx.body = 'Redirecting to shopping cart';
  ctx.throw(400, '什麽錯誤來著')
  ctx.body='这是一个首页'
  app.emit('some_thing',888)
  ctx.app.emit('some_thing',888)
  console.log(ctx.app === app)
  console.log(ctx.req)
  // console.log(ctx.request)
})
router.get('/page',(ctx)=>{
  ctx.body='这是一个首页的子页'
})


// router.use('/a',a.routes());
// router.use('/b',b.routes());

router.use('/a',a);
router.use('/b',b);

// 启动路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)