let http = require('http')
let context = require('./context')
let request = require('./request')
let response = require('./response')

class Koa {
  constructor() {
    this.callbackFn;
    this.middlewares = []
    this.context = context;
    this.request = request;
    this.response = response;
  }

  use(cb) {
    this.middlewares.push(cb)
  }

  createContect(req, res) {
    let ctx = Object.create(this.context)
    ctx.request = Object.create(this.request);
    ctx.response = Object.create(this.response)
    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;
    return ctx;
  }

  handleRequest(req, res) {
    res.statusCode = 404;//默认找不到body
    let ctx = this.createContect(req, res)
    let composeMiddleware = this.compose(ctx, this.middlewares)
    composeMiddleware.then(()=>{
      //当回调函数执行后，ctx.body值就会发生变化

      let body = ctx.body
      if (typeof body === 'undefined') {
        res.end('MyKoa Not Fount')
      } else if (typeof body === 'string') {
        res.end(body)
      }
    })
  }

  // 虽然中间件里面有异步代码 ，但是如果不设置promise就直接
  // next的话上一个中间件不会等待next（）执行完才执行next之后的代码
  compose(ctx, stack) {
    let next = function (index) {
      let middleware = stack[index];
      if(index === stack.length) {
        return Promise.resolve()
      }
      return  Promise.resolve(middleware(ctx, ()=>{
        // 这个return返回的是下一个异步函数 所以promise会等待
        return next(index+1)
      }))
    }
    return next(0)
  }

  listen() {
    let server = http.createServer(this.handleRequest.bind(this));
    server.listen(...arguments)
  }
}

module.exports = Koa;