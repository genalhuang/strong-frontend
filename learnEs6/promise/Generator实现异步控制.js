// 简单的coroutine函数
function isPromise(p) {
  return p && typeof p.then === 'function' && typeof p.catch === 'function';
} 

function coroutine(genFn) {
  return function() {
    return new Promise((resolve, reject) => {
      const gen = genFn.apply(null, arguments)
      let ret 
      function next(value) {
        ret = gen.next(value)
        if(ret.done) {
          return resolve(ret.value)
        }
        if(!isPromise(ret.value)) {
          return reject()
        }
        ret.value.then(next).catch(reject)
      }
      next()
    })
  }
}


// sleep 函数，返回一个 Promise 对象
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

// 通过 coroutine 来包装异步函数
const test = coroutine(function* () {
  for (let i = 0; i < 100; i++) {
    yield sleep(100);
    console.log('i=%s', i);
  }
  return 100;
});

test()
  .then(i => console.log('执行了%s 次 sleep', i))
  .catch(err => console.error('出错', err));