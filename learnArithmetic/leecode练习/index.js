// 给定一个二叉树，它的每个结点都存放着一个整数值。
// 找出路径和等于给定数值的路径总数。
// 路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
// 二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var pathSum = function(root, sum) {
  if(!root) {
      return 0
  }
  const num = []
  if(root.val === sum) {
      // 最后获取的是num的长度，传值不重要
      num.push('')
  }
  RecursiveFunc(root.left, sum, num, [root.val])
  RecursiveFunc(root.right, sum, num, [root.val])
  return num.length
};

function RecursiveFunc(node, sum, num, parentSumArr) {
  if(!node) {
      return
  }
  if(node.val === sum) {
      num.push('')
  }
  for(let i = 0; i<parentSumArr.length; i++) {
      if(parentSumArr[i] + node.val === sum) {
          num.push('')
      }
      parentSumArr[i] = parentSumArr[i] + node.val
  }
  parentSumArr.push(node.val)
  RecursiveFunc(node.left, sum, num, [].concat(...parentSumArr))
  RecursiveFunc(node.right, sum, num, [].concat(...parentSumArr))
}


let root = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: null
}

console.log(pathSum(root, 8))