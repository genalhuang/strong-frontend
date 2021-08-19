
/**
 * 二叉树中和为某一值的路径
 */
 var pathSum  = function (root, sum) {
  if (root === null) {
    return [];
  } 
  const res = [];
  const DFS = (root, sum, tmp) => {
    if(!root) {
      return;
    }
    if (root.val === sum) {
      res.push(tmp);
    }
    tmp.push(root.val);
    if (root.left) DFS(root.left, sum - root.val, tmp.slice());
    if (root.right) DFS(root.right, sum - root.val, tmp.slice());
  }
  DFS(root, sum, []);
  return res;
};
let tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: null,
    }
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: null,
      right: {
        val: 2,
        left: null,
        right: null,
      },
    },
  }
}
console.log(pathSum(tree, 8))