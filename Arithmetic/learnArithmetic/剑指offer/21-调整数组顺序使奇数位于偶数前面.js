/**
 * 21-调整数组顺序使奇数位于偶数前面
 */

// 垃圾写法
function reverseOddToEven(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    while (!isNaN(arr[start]) && arr[start] % 2 !== 0) {
      ++start;
    }
    while (!isNaN(arr[end]) && arr[end] % 2 === 0) {
      --end;
    }
    if (start <= end) {
      let temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
      ++start;
      --end;
    }

  }
  return arr;
}

// console.log(reverseOddToEven([8,10,3,20,12,4,10,8,4,0,5,17,7,20,3]))

// 假设条件更改 你又得改判断，抽离核心逻辑，傻逼
function reverseOddToEven(arr, judgeFunc) {
  if (arr.length <= 1) {
    return arr;
  }
  let start = 0
  let end = arr.length - 1
  while (start <= end) {
    while (!isNaN(arr[start]) && judgeFunc(arr[start])) {
      ++start;
    }
    while (!isNaN(arr[end]) && !judgeFunc(arr[end])) {
      --end;
    }
    if (start <= end) {
      let temp = arr[end];
      arr[end] = arr[start];
      arr[start] = temp;
      ++start;
      --end;
    }

  }
  return arr;
}
function isOdd(num) {
  return num % 2 !== 0
}

console.log(reverseOddToEven([8, 10, 3, 20, 12, 4, 10, 8, 4, 0, 5, 17, 7, 20, 3], isOdd))