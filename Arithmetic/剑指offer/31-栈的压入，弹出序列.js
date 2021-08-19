/**
 * 栈的压入，弹出序列
 */

function isRightOut(arr1, arr2) {
  if (!arr1 || arr1.length !== arr2.length) {
    return false;
  }
  let stack = []
  let len = arr1.length
  for (var i = 0; i < len; i++) {
    if (!isNaN(arr1[0]) && !isNaN(arr2[0]) && arr1[0] !== arr2[0]) {
      while (stack[stack.length - 1] === arr2[0]) {
        arr2.shift()
        stack.pop()
      }
      stack.push(arr1.shift())
    } else {
      arr2.shift();
      arr1.shift();
    }
  }
  while (stack.length) {
    if (stack.pop() !== arr2.shift()) {
      return false;
    }
  }
  return true;
}

// console.log(isRightOut([1,2,3,4,5],[4,5,3,2,1]))
console.log(isRightOut([2, 3, 0, 1], [0, 3, 2, 1]))