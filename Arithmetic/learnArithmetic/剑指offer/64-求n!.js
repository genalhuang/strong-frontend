
/**
 * 求 1 + 2 + ... + n
 */
 var getNPlus = function (n) {
  return n + (n && getNPlus(n - 1))
};



let res = getNPlus(3)
console.log(res)