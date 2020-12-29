// class app {
//   static mid = [];
//   static use(fn) {
//     this.mid.push(fn)
//   }
//   static done() {
//     let next = function (index) {
//       let middleware = app.mid[index];
//       if(index === app.mid.length) {
//         return Promise.resolve()
//       }
//       return  Promise.resolve(middleware(()=>{
//         next(index+1)
//       }))
//     }
//     return next(0)
//   }
// }
// app.use(async (next)=>{
//   console.log(1)
//   await next()
//   console.log(2)
// })
// app.use(async (next) => {
//   console.log(3)
//   await new Promise((a,b) =>{
//     setTimeout(()=>{
//       a()
//     },1000)
//   }).then(()=>{
//     console.log(4)
//   })
// })

// app.done()



async function a(){
  await next()
  console.log(1)
}
  
function next() {
  new Promise((r,j)=>{
      r()
  }).then(()=>{
    console.log(3)
    new Promise((r,j)=>{
      r()
    }).then(()=>{
      console.log(4)
    })
  })
  console.log(2)
}

/// 等价于
async function a() {
  Promise.resolve(next()).then(()=> {
    console.log(1)
  })
}
function next() {
  new Promise((r,j)=>{
      r()
  }).then(()=>{
    console.log(3)
    new Promise((r,j)=>{
      r()
    }).then(()=>{
      console.log(4)
    })
  })
  console.log(2)
}

// await 一个同步函数 相当于 使用 Promise.resolve(同步函数)