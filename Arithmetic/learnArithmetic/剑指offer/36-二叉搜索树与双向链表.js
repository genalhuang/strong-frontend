/**
 * 二叉搜索树与双向链表
 */

 function treeToList(tree) {
  if (!tree) {
    return null;
  }
  let arr = []
  function dfs(tree) {
    if (tree.left) {
      dfs(tree.left)
    }
    arr.push(tree)
    if (tree.right) {
      dfs(tree.right)
    }
  }
  dfs(tree)
  for (var i = 0; i < arr.length; i++) {
    if (i == 0) {
      arr[i].left = arr[arr.length - 1]
      arr[i].right = arr[1]
    } else if (i == arr.length - 1) {
      arr[i].left = arr[i - 1]
      arr[i].right = arr[0]
    } else {
      arr[i].right = arr[i + 1]
      arr[i].left = arr[i - 1]
    }
  }
  if (arr.length == 1) {
    arr[0].right = arr[0]
    arr[0].left = arr[0]
  }
  return arr[0]
}

function treeToList(head) {
  if (!tree) {
    return null;
  }
  let head = null;
  let pre = null;
  function dfs(tree) {
    if (tree.left) {
      dfs(tree.left)
    }
    if (pre) {
      pre.right = tree;
    } else {
      head = tree;
    }
    tree.left = pre
    pre = tree
    if (tree.right) {
      dfs(tree.right)
    }
  }
  dfs(tree)
  head.left = pre
  pre.right = head;
  return head
}

//  let tree = {
//   value: 10,
//   left: {
//     value: 6,
//     left: {
//       value: 4,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 8,
//       left: null,
//       right: null,
//     }
//   },
//   right: {
//     value: 14,
//     left: {
//       value: 12,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 16,
//       left: null,
//       right: null,
//     }
//   },
// }

let tree = {
  value: 1,
  left: null,
  right: null
}

// let tree = {
//   value: -1,
//   left: null,
//   right: {
//     value: 1,
//     left: null,
//     right: {
//       value: 9,
//       left: null,
//       right: null
//     }
//   }
// }
console.log(treeToList(tree))