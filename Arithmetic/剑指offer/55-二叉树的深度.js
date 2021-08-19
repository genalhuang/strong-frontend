
/**
 * 二叉搜索树的第k大节点
 */
 var maxDepth = function(tree) {
  if (!tree) {
    return 0;
  }
  function getDeep(tree) {
    if(!tree) {
      return 0;
    }
    return 1 + Math.max(getDeep(tree.left),getDeep(tree.right))
  }
  return getDeep(tree)
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
// tree = {
//   val: 3,
//   left: {
//     val: 1,
//     left: null,
//     right: {
//       val: 2,
//       left: null,
//       right: null,
//     }
//   },
//   right: {
//     val: 4,
//     left: null,
//     right: null,
//   },
// }
let res = maxDepth(tree)
console.log(res)