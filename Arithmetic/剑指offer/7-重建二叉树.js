
/**
 * 
 * 重建二叉树
 * 拿到前序遍历序列和中序遍历序列的结果，重建该二叉树
 */

function rebuildBinaryTree(prev, center) {
  if (prev.length <= 1) {
    return {
      value: prev[0],
      left: null,
      right: null
    }
  }
  let left = [];
  let right = [];
  let root = prev[0]
  let flag = false;
  for (var i = 0; i < center.length; i++) {
    if (center[i] === root) {
      flag = true;
      continue;
    }
    if (flag) {
      right.push(center[i])
    } else {
      left.push(center[i])
    }
  }

  let leftPrevArr = prev.slice(1, left.length + 1)
  let leftCenterArr = left
  let rightPrevArr = prev.slice(left.length + 1, prev.length)
  let rightCenterArr = right;
  let rootTree = {
    value: root,
    left: rebuildBinaryTree(leftPrevArr, leftCenterArr),
    right: rebuildBinaryTree(rightPrevArr, rightCenterArr)
  }
  return rootTree;
}

// console.log(JSON.stringify(rebuildBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6])))
// console.log(JSON.stringify(rebuildBinaryTree([1],[1])))