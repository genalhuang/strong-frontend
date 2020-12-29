let Koa = require('./koa/application')

let app = new Koa()
// app.use(async (ctx,next) => {
//   ctx.midware ='陈冠希1'
//   await new Promise((a,b) =>{
//     setTimeout(()=>{
//       a()
//     },1000)
//   })
//   next()
// })
// app.use((ctx, next)=> {
//   console.log(ctx.req.url)
//   console.log(ctx.request.req.url)
//   console.log(ctx.request.url)
//   console.log(ctx.url)
//   console.log(ctx.path)
  
//   ctx.body='陈冠希'
//   console.log(ctx.response.body)
//   console.log(ctx.midware)
//   next()
// })
function aaa() {
  new Promise((a,b)=>{
    a()
  }).then(()=>{
    console.log(5)
  })
}
app.use(async(ctx,next)=>{
  console.log(1)
  await next()
  console.log(2)
})
app.use(async(ctx,next)=>{
  console.log(3)
  await aaa()
  console.log(4)
})


app.listen(3000)