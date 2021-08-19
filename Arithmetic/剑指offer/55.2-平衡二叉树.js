/**
 * 平衡二叉树,一棵树的每一个节点的左右子树深度差不超过1
 */
 var isPinghenTree = function(tree) {
  if (!tree) {
    return true;
  }
  function getDeep(tree) {
    if(!tree) {
      return 0;
    }
    return 1 + Math.max(getDeep(tree.left),getDeep(tree.right))
  }
  
  function isPinghen(tree) {
    if(!tree) {
      return true;
    }
    return Math.abs(getDeep(tree.left) - getDeep(tree.right)) <= 1 && isPinghen(tree.left) && isPinghen(tree.right)
  }
  return isPinghen(tree)
};

var tree = {
  val: 10,
  left: {
    val: 6,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 8,
      left: null,
      right: null,
    }
  },
  right: {
    val: 14,
    left: {
      val: 12,
      left: null,
      right: null,
    },
    right: {
      val: 16,
      left: null,
      right: null,
    }
  },
}
tree = {
  val: 3,
  left: {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null,
    }
  },
  right: {
    val: 4,
    left: null,
    right: null,
  },
}
let res = isPinghenTree(tree)
console.log(res)