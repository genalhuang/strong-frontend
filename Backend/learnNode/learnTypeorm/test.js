function *aaa() {
 yield await new Promise((a,b)=>{
   setTimeout(()=>{
    a('1234')
   },1000)
 })
}
consolg.log(aaa())