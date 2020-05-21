promises.then执行顺序
1. 先看then注册先后
2. 后看then注册在层级（then的层）

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