// koa可以使用async await


class app {
  constructor() {
    this.middlewares = []
  }
  use(callback) {
    this.middlewares.push(callback)
  }
}

function dispath() {
  // 先取出第一个中间件让其执行，将索引递增调用
  // next就是讲下一个中间件继续执行
  let middleware = app1.middlewares.shift()
  console.log(middleware)
  if(middleware) {
    middleware({},()=>{
      dispath()
    })
  }
}



var app1 = new app()
app1.use((ctx, next)=>{
  console.log(1)
  next()
})
app1.use((ctx, next)=>{
  console.log(2)
  next()
})
dispath()
