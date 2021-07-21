
/**
 * 二叉搜索树的后序遍历序列
 */
var verifyPostorder = function (arr) {
  if (!arr.length) {
    return true;
  }
  let root = arr[arr.length - 1];
  let i = 0;
  let left = []
  let right = []
  while (i < arr.length) {
    if (arr[i] > root) {
      break;
    }
    if (arr[i] !== root) {
      left.push(arr[i])
    }
    i++;
  }

  while (i < arr.length) {
    if (arr[i] < root) {
      return false;
    }
    if (arr[i] !== root) {
      right.push(arr[i])
    }
    i++
  }
  return verifyPostorder(left) && verifyPostorder(right)
};
console.log(verifyPostorder([1, 2, 5, 10, 6, 9, 4, 3]))
console.log(verifyPostorder([7, 4, 6, 5]))