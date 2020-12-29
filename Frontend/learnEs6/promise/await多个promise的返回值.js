async function aaa () {
  const a = await new Promise((a,b)=>{
    setTimeout(()=>{
      a('111')
    },1000)
  }).then(()=>{
    return new Promise((a,b)=>{
      a('222')
    })
  })
  console.log(a)
  return a
}
aaa()

await多个promise，会等待这个promise所有then执行完并拿到最后一个promise
的值作为值