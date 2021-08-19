/**
 * 二叉树的镜像
 */
// 递归
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
// 栈
var mirrorTree = function (root) {
  if (!root) {
    return root;
  }
  var stack = [];
  stack.push(root);
  while (stack.length !== 0) {
    var node = stack.pop();
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
    var temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
  return root;
};

let tree1 = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    }
  },
  right: {
    value: 3,
    left: null,
    right: null,
  }
}

console.log(mirrorTree(tree1))