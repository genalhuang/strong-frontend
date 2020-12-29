// 如何 实现sum(1)(2)(3).. 打印6，sum(1,2,3)也打印6

// function sum(...arr) {
//   let all = arr[0];
//   function getSum(a) {
//     all += a
//     return a===3?all:getSum
//   }
//   return arr.length ===1 ? getSum : arr.reduce((a,b)=>a+b)
// }
// console.log(sum(1,2,3))
// console.log(sum(1)(2)(3))

// Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log)
// Promise.resolve(1).then(2).then(a=>console.log(a)).then()

function sum(a,b,c) {
  if(a && b && c){
    return a+b+c;
  } 
  let all = a;
  console.log(a,b,c)
  function getSum(num) {
    console.log(num)
    all += num
    if(num===3) {
      return all
    }
    return getSum
  }
  return getSum

}
function currying(fn) {
  if(arguments.length !== 1) {
    return fn(...[...arguments].splice(1))
  }
  return fn
}
var curry = currying(sum);
// console.log(currying(sum,1,2,3))
// console.log(curry(1)(2)(3))
console.log(curry((1,2),3))
// console.log(curry()(1)(2)(3))
// console.log(curry(1,2,3))