

export const fetchData1 = (fn) => {
  return new Promise(a=>{
    a({data:'asdf'})
  }).then(response => {
    fn(response)
  })
}
export const fetchData2 = () => {
  return new Promise((a,b)=>{
    setTimeout(() => {
      a({data:'asdf'})
    },200)

  })
}