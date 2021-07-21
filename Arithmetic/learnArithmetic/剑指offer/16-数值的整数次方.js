// /**
//  * 数值的整数次方
//  */
// // 循环做是垃圾，循环考虑负值是普通人，接下来看看高效解法
// let map = {}
// function numberNFang(base, fang) {
//   if (base < 0) {
//     return new Error('不要输入负数基数')
//   }
//   let absFang = fang > 0 ? fang : -fang;

//   if (absFang == 0) {
//     return 1;
//   }
//   if (absFang == 1) {
//     return fang > 0 ? base : 1 / base;
//   }
//   if (absFang == 2) {
//     return fang > 0 ? base * base : 1 / base * base;
//   }
//   if (map[absFang]) {
//     return map[absFang]
//   }
//   map[absFang] = numberNFang(base, Math.floor(absFang / 2))* numberNFang(base, Math.ceil(absFang / 2))
//   if (fang < 0) {
//     return 1 / map[absFang];
//   } else {
//     return map[absFang]
//   }
// }
// // console.log(numberNFang(6, 5))
// console.log(numberNFang(2.10000,
//   3))


let map = {}
var myPow = function (base, fang) {
  if (base < 0) {
    return new Error('不要输入负数基数')
  }
  let absFang = fang > 0 ? fang : -fang;

  if (absFang == 0) {
    return 1;
  }
  if (absFang == 1) {
    return fang > 0 ? base : 1 / base;
  }
  if (absFang == 2) {
    return fang > 0 ? base * base : 1 / base * base;
  }
  if (map[absFang]) {
    return map[absFang]
  }
  map[absFang] = myPow(base, Math.floor(absFang / 2)) * myPow(base, Math.ceil(absFang / 2))
  if (fang < 0) {
    return 1 / map[absFang];
  } else {
    return map[absFang]
  }
};
console.log(myPow(2.10000,
  3))