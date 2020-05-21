// 如果多个微任务在同一个宏任务里面出现，那么所有微任务都会执行的
// 多个微任务的执行顺序 先看 then的层级 后看 调用先后
// 注意await a函数 后的代码中微任务要比 a函数里面的微任务的代码优先级低
Promise.resolve().then(function() {
  console.log(1);
}).then(function(val) {
  console.log(11);
});
Promise.resolve().then(function() {
  setTimeout(function() { 
    console.log(2); 
   },0) 
}).then(function() {
  console.log(22);
});
// 1 11 22 2


Promise.resolve().then(function() {
  console.log(1);
}).then(function(val) {
  console.log(11);
});
Promise.resolve().then(function() {
  console.log(2)
}).then(function() {
  console.log(22);
});
// 1 2 11 22


Promise.resolve().then(function() {
  console.log(1)
  return Promise.resolve()
}).then(function(val) {
  console.log(11);
  
})
Promise.resolve().then(function() {
  console.log(2)
}).then(function() {
  console.log(22);
});
// 1 2 22 11



function a() {
  Promise.resolve().then(function() {
    console.log(1);
  }).then(function(val) {
    console.log(11);
  });
  b()
}
function b() {
  Promise.resolve().then(function() {
    console.log(2)
  }).then(function() {
    console.log(22);
  });
}
a()


new Promise((a,b)=>{
  a()
  new Promise((a,b)=> {
      a()

      new Promise((a,b)=> {
        a()
      }).then(()=>{
        console.log('000')
      })

  }).then(()=>{
    console.log('111')

    new Promise((a,b)=> {
        a()
    }).then(()=>{
      console.log('333')
    })

  })
}).then(()=>{
  console.log('222')
}).then(()=>{
  console.log('444')
})
//01234