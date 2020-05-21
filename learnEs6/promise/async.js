// async function c() {
//   console.log('c')
//   new Promise((resolve)=>{
//     resolve()
//   }).then(()=>{
//     console.log('c promise then')
//   })
//   await d()
// }
// function d() {
//   console.log('d')
// }
// async function a() {
//   var b = await c()
//   console.log('a')
// }
// a()
// console.log(11111)

// async function c() {
//   console.log('c')
//   await d()
// }
// function d() {
//   console.log('d')
// }
// async function a() {
//   var b = (function () {
//     new Promise(()=>{
//       console.log('b')
//       c()
//     })
//   })()
//   console.log('a')
// }
// a()
// console.log(11111)


// function b() {
//   return '陈'
// }

// function c() {
//   return '冠希'
// }


// async function a(name) {
//   var aa = await b(name);
//   var bb = await c(name);
//   return aa + bb
// }

// console.log(a())
// a().then((result)=>{
//   console.log(result)
// })


async function a( ) {
  return await 123
}
console.log(a())
a().then((result)=>{
  console.log(result)
})
