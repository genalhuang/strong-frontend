/**
 * 树的子结构
 */

// 递归语法的判断，其实是可以提前的
var isSubStructure = function (A, B) {
  if (!A || !B) {
    return false;
  }
  return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
};
var isSameTree = function (a, b) {
  if (!b) {
    return true
  }
  if (!a) {
    return false
  }
  if (a.value !== b.value) {
    return false;
  }
  return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}


// 垃圾
function isSame(tree1, tree2) {
  if (!tree1 || !tree2) {
    return false;
  }
  if (tree1.value !== tree2.value) {
    return false;
  }
  let flag = true;
  if (tree1.left) {
    if (!isSame(tree1.left, tree2.left)) {
      flag = false;
    }
  }
  if (tree1.right) {
    if (!isSame(tree1.right, tree2.right)) {
      flag = false;
    }
  }
  return flag;
}
function isInclude(tree1, tree2) {
  if (!tree1 || !tree2) {
    return false;
  }
  if (isSame(tree2, tree1)) {
    return true;
  }
  if (tree1.left) {
    if (isInclude(tree1.left, tree2)) {
      return true;
    }
  }
  if (tree1.right) {
    if (isInclude(tree1.right, tree2)) {
      return true;
    }
  }
  return false;
}

// let tree1 = {
//   value: 8,
//   left: {
//     value:8,
//     left: {
//       value: 9,
//       left: null,
//       right: null,
//     },
//     right: {
//       value: 2,
//       left: {
//         value:4,
//         left: null,
//         right: null,
//       },
//       right: {
//         value: 7,
//         left: null,
//         right: null,
//       }
//     }
//   },
//   right: {
//     value: 7,
//     left: null,
//     right: null,
//   }
// }

// let tree2 = {
//   value: 8,
//   left: {
//     value:9,
//     left: null,
//     right: null
//   },
//   right: {
//     value: 2,
//     left: null,
//     right: null,
//   }
// }

let tree1 = {
  value: 1,
  left: {
    value: 0,
    left: {
      value: -4,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    }
  },
  right: {
    value: 1,
    left: null,
    right: null,
  }
}

let tree2 = {
  value: 1,
  left: {
    value: -4,
    left: null,
    right: null
  },
  right: null,
}

console.log(isSubStructure(tree1, tree2))