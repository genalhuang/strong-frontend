async function aaa () {
  const a = await new Promise((a,b)=>{
    setTimeout(()=>{
      a('111')
    },1000)
  }).then(()=>{
    return new Promise((a,b)=>{
      a('222')
    })
  }).then(()=>{
    return new Promise((a,b)=>{
      a('333')
    })
  })
  console.log(a)
  return a
}
aaa()