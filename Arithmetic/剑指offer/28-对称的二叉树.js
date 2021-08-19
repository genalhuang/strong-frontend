/**
 * 对称的二叉树
 */


// 以下是垃圾写法
// 判断树是否相等
function isSame(tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true;
  }
  if (tree1 && tree2 && tree1.value === tree2.value) {
    return isSame(tree1.left, tree2.left) && isSame(tree1.right, tree2.right);
  }
  return false;
}
// 获得树的对称
function mirrorTree(tree) {
  if (!tree) {
    return;
  }
  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
  mirrorTree(tree.left)
  mirrorTree(tree.right)
  return tree;
}

// 判断是否对称树
function symmetryTree(tree) {
  if (!tree) {
    return true;
  }
  let tree2 = JSON.parse(JSON.stringify(tree))
  tree2 = mirrorTree(tree2);
  console.log(tree, tree2)
  return isSame(tree, tree2)
}

let tree1 = {
  value: 1,
  left: {
    value: 2,
    left: null,
    // right: {
    //   value:3,
    //   left: null,
    //   right: null,
    // },
  },
  right: {
    value: 3,
    left: null,
    // right: {
    //   value:3,
    //   left: null,
    //   right: null,
    // },
  }
}

// console.log(symmetryTree(tree1))



// 聪明写法：比较二叉树的前序遍历（先根后左后右）和 对称前序遍历（先根后右后左）判断二叉树是不是对称
// 判断两棵树前序和对称前序是否相等
function isSymmetry(tree1, tree2) {
  if (tree1 === null && tree2 === null) {
    return true;
  }
  if (tree1 && tree2 && tree1.value === tree2.value) {
    return isSymmetry(tree1.left, tree2.right) && isSymmetry(tree1.right, tree2.left);
  }
  return false;
}

// 判断是否对称树
function symmetryTree(tree) {
  if (!tree) {
    return true;
  }
  return isSame(tree, tree)
}
console.log(symmetryTree(tree1))