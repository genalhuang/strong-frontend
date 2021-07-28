

/**
 * 二叉搜索树的第k大节点
 */

// 垃圾写法，中序遍历，并且用了内存
var getTreeK = function (tree, k) {
  if (!tree) {
    return;
  }
  let arr = []
  function getK(tree) {
    if (tree.left) {
      getK(tree.left)
    }
    arr.push(tree)
    if (tree.right) {
      getK(tree.right)
    }
  }

  getK(tree)
  return arr[arr.length - k].val
};

// 普通写法，反中序遍历利于记录第k大元素，使用数组
var getTreeK = function (tree, k) {
  if (!tree) {
    return;
  }
  let arr = []
  function getK(tree) {
    if (tree.right) {
      getK(tree.right)
    }
    arr.push(tree)
    if (tree.left) {
      getK(tree.left)
    }
  }

  getK(tree)
  return arr[k - 1].val
};

// 优质写法，反中序遍历加使用单增标志记录第几项
var getTreeK = function (tree, k) {
  if (!tree) {
    return;
  }
  let index = 0;
  let result;
  function getK(tree) {
    if (tree.right) {
      getK(tree.right)
    }
    ++index;
    if (index === k) {
      result = tree;
      return;
    }
    if (tree.left) {
      getK(tree.left)
    }
  }

  getK(tree)
  return result.val
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
let res = getTreeK(tree, 1)
console.log(res)