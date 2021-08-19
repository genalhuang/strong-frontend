/**
 * 从上到下打印二叉树（分层返回）
 */
function consoleTree(tree) {
  if (!tree) {
    return []
  }

  let quene = [tree];
  let result = []
  while (quene.length) {
    let len = quene.length;
    if (!result[result.length]) {
      result[result.length] = []
    }
    while (len) {
      let node = quene.shift()
      result[result.length - 1].push(node)
      if (node.left) {
        quene.push(node.left)
      }
      if (node.right) {
        quene.push(node.right)
      }
      len--
    }
  }
  return result;
}

let tree = {
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
console.log(consoleTree(tree))


/**
 * 从上到下打印二叉树
 */
function consoleTree(tree) {
  if (!tree) {
    return []
  }

  let quene = [tree];
  let result = []
  let level = 1;
  let nextLevel = 0;
  let ceng = 0;
  while (quene.length) {
    let node = quene.shift()
    if (node.left) {
      nextLevel++
      quene.push(node.left)
    }
    if (node.right) {
      nextLevel++
      quene.push(node.right)
    }
    level--;
    if (!result[ceng]) {
      result[ceng] = []
    }
    result[ceng].push(node)
    if (level === 0) {
      level = nextLevel;
      nextLevel = 0;
      ceng++
    }
  }
  return result;
}



/**
 * 从上到下打印二叉树(之字形)
 */
function consoleTree(tree) {
  debugger;
  if (!tree) {
    return []
  }

  let quene = [tree];
  let result = []
  let level = 1;
  let nextLevel = 0;
  let ceng = 0;
  while (quene.length) {
    let node = quene.shift()
    if (node.left) {
      nextLevel++
      quene.push(node.left)
    }
    if (node.right) {
      nextLevel++
      quene.push(node.right)
    }
    level--;
    if (!result[ceng]) {
      result[ceng] = []
    }
    result[ceng].push(node)
    if (level === 0) {
      if (ceng % 2 === 1) {
        result[ceng] = result[ceng].reverse()
      }
      level = nextLevel;
      nextLevel = 0;
      ceng++
    }
  }
  return result;
}