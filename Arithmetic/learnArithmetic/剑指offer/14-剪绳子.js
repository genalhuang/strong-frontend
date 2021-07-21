/**
 * 
 * 剪绳子
 * 设求得乘积最大值的函数为fn
 * fn= max(f(i)*f(n-i)) i范围是1-n;
 */
// 垃圾
function cutLine(n) {
  function cutLineByM(n, m) {
    if (m == 0) {
      return n;
    }
    let max = n / m;
    for (var i = 1; i < n - m; i++) {
      let data = i * cutLineByM(n - i, m - 1)
      if (max < data) {
        max = data;
      }
    }
    return max;
  }
  let max = 0;
  for (var i = 2; i <= n; i++) {
    console.log(i)
    let data = cutLineByM(n, i)
    if (max < data) {
      max = data;
    }
  }
  return max;
}
// console.log(cutLine(8))
// console.log(cutLine(2))
// console.log(cutLine(4))

/**
 * 
// 普通解法 之 动态规划
// 特别要注意，2长度的绳子跟剩下两长度的绳子的最大值是不一样的，前者必须拆，最大为1，后者可以不拆最大为2 
 */

function cutLine(n) {
  if (n < 2) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  let map = [0, 1, 2, 3]
  for (var i = 4; i <= n; i++) {
    let max = 0;
    for (var j = 1; j <= i / 2; j++) {
      let data = map[j] * map[i - j]
      if (max < data) {
        max = data;
        map[i] = max;
      }
    }
  }

  return map[n];
}
console.log(cutLine(8))
// console.log(cutLine(2))
// console.log(cutLine(6))

/**
 * 贪婪算法
 * 尽可能剪3，剩余5的拆解成 3 2 ，剩余4的绳子的时候，拆解成2 2；
 * 思考长8 和长7你就懂了
 */
function cutLine(n) {
  if (n < 2) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }
  if (n === 3) {
    return 2;
  }
  let yu = n % 3;
  if (yu === 2) {
    return 3 ** Math.floor(n / 3) * 2
  } else if (yu === 1) {
    return 3 ** (Math.floor(n / 3) - 1) * 4
  } else {
    return 3 ** Math.floor(n / 3)
  }
}
console.log(cutLine(6))