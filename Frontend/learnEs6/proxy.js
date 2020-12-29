// var obj = new Proxy({}, {
//   get: function(t, k, r) {
//     console.log('getting',k)
//     console.log(t, k, r)
//     return Reflect.get(t, k, r)
//   },
//   set: function(t, k, r) {
//     console.log('setting',k)
//     console.log(t, k, r)
//     return Reflect.set(t, k, v, r)
//   }
// })


// proxy拦截器
// var handler = {
//   get: function(target, name) {
//     if( name === 'prototype') {
//       return Object.prototype
//     }
//     // console.log(target, name)
//     return 'Hello' + name;
//   },
//   apply: function(target, thisBinding, args) {
//     // console.log(target, thisBinding, args)
//     return args[0]
//   },
//   construct: function(target, args) {
//     // console.log(target, args)
//     return {value: args[0]}
//   }
// }
// var fproxy = new Proxy(function(x,y){
//   return x+y;
// }, handler)

// console.log(fproxy(1,2))
// console.log(new fproxy(1,2))
// console.log(fproxy.prototype)
// console.log(fproxy.edison)
// console.log(fproxy.prototype === Object.prototype)






