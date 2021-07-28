
/**
 * 翻转字符串
 * 1. 采用从后往前遍历，通过双指针寻找单词
 */
 var reverseStr = function (str) {
  let strArr = []
  str = str.trim()
  for (var i = str.length - 1; i >= 0; i--) {
    let len = strArr.length ? strArr.length : 0;
    let index = i
    while (str[index] && str[index] !== ' ') {
      --index;
    }
    if (index === i) {
      continue;
    }
    if (!strArr[len]) {
      strArr[len] = str.slice(index + 1, i + 1)
    }
    i = index;
  }
  return strArr.join(' ')
};

let res = reverseStr('I   am a student.')
console.log(res)