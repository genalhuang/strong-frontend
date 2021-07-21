
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
    i++
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


/**
 * 简单来说就是要发现二叉搜索树的规律，arr最后一个节点就是根节点，从arr0开始直到找到最后一个
 * 小于根节点的节点后，如果在大于根节点的一边找到了一个小于根节点的节点，那么就不构成二叉搜索树
 */