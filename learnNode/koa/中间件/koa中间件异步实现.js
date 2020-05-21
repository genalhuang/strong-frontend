// 模拟 Koa 创建的实例
const app = {
  middlewares: []
};
app.use = function(fn) {
  app.middlewares.push(fn);
};
app.compose = function() {
  function dispatch(index) {
      if (index === app.middlewares.length) return Promise.resolve();
      const route = app.middlewares[index];
      return Promise.resolve(route(() => {
        return dispatch(index + 1)
      }));
  }

  dispatch(0);
};
function fn() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve();
          console.log("hello");
      }, 3000);
  });
}
app.use(async next => {
  console.log(1);
  await next();
  console.log(2);
});

app.use(async next => {
  console.log(3);
  await fn(); // 调用异步函数
  console.log(4);
});
app.compose();
