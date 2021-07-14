const { get } = require("https");

/**
 * 
 * 找出数组中重复的数字
 *
 *  */
function getRepeatNumber(arr) {
  let repeatArr = []
  for (let item in arr) {
    if (!repeatArr[arr[item]]) {
      repeatArr[arr[item]] = 1
    } else {
      return arr[item]
    }
  }
}
// console.log(getRepeatNumber([2,3,1,0,2,5,3]))


function getRepeatNumber(arr) {
  if (arr.length <= 1) {
    return false;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > arr.length - 1) {
      return false;
    }
  }
  for (var i = 0; i < arr.length; i++) {
    while (arr[i] !== i) {
      if (arr[arr[i]] === arr[i]) {
        return arr[i]
      } else {
        let temp = arr[i];
        arr[i] = arr[temp]
        arr[temp] = temp
      }
    }
  }
}
// console.log(getRepeatNumber([6, 2, 1, 6, 4, 5, 3]))

/**
 * 不修改数组找出重复的数字
 */
function getRepeatNumberNotEdit(arr) {
  if (arr.length <= 1) {
    return false;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > arr.length - 1) {
      return false;
    }
  }
  function digui(arr, start, end) {
    if (start === end) {
      return start;
    }
    let temp = Math.floor((end - start) / 2) + start
    let num = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] <= temp) {
        num++
      }
    }
    if (num < temp) {
      return digui(arr, start, temp)
    } else {
      return digui(arr, temp + 1, end)
    }
  }
  return digui(JSON.parse(JSON.stringify(arr)), 1, arr.length - 1)
}
// console.log(getRepeatNumberNotEdit([2,3,5,4,3,2,6,7]))

/**
 * 
 * 二维数组中的查找
 */
function getArr2HasNum(arr, num) {
  if (!arr.length) {
    return;
  }
  let r=0,c=0;
  let maxC = arr[0].length;
  let maxR = arr.length
  if(num > arr[maxR-1][maxC-1]) {
    return false;
  }
  while(num > arr[r][maxC-1]) {
    ++r;
  }
  while(num > arr[maxR-1][c]) {
    ++c
  }
  for(var i=c;i<maxC;i++) {
    for(var j=r;j<maxR;j++) {
      if(arr[i][j] === num) {
        return true;
      }
    }
  }
  return false;
}

// console.log(getArr2HasNum(
//   [
//     [1, 2, 8, 9],
//     [2, 4, 9, 12],
//     [4, 7, 10, 13],
//     [6, 8, 11, 15],
//   ]
//   , 1234
// ))

/**
 * 两数组迁移
 */

function remveArr(arr1,arr2) {
  if(!arr2.length) {
    return arr1;
  }
  let p1 = arr1.length-1;
  let p2 = p1 + arr2.length
  while(arr2.length) {
    while(p2 > p1) {
      if(arr1[p1] >= arr2[arr2.length-1]) {
        arr1[p2] = arr1[p1];
        arr1[p1] = null;
        --p2;
        --p1
      } else {
        arr1[p2] = arr2[arr2.length-1];
        --p2;
        arr2.splice(arr2.length-1,arr2.length)
      }
    }
  }
  return arr1;
}

// console.log(remveArr([1,3,5,7,8],[2,4,6,9]))

/**
 * 反向输出链表
 */
function reverseListNode(listNode) {
  if(listNode === null) {
    return
  }
  if(listNode.next !== null) {
    reverseListNode(listNode.next)
  }
  console.log(listNode.value)
}
let listNode = {
  value: 1,
  next: {
    value:2,
    next:{
      value:3,
      next: null
    }
  }
}
// console.log(reverseListNode(listNode))

/**
 * 
 * 重建二叉树
 * 拿到前序遍历序列和中序遍历序列的结果，重建该二叉树
 */

function rebuildBinaryTree(prev, center) {
  console.log(prev,center)
  if(prev.length <= 1) {
    return {
      value: prev[0],
      left: null,
      right: null
    }
  }
  let left = []; 
  let right = []; 
  let root = prev[0]
  let flag = false;
  for(var i=0;i<center.length;i++) {
    if(center[i] === root) {
      flag =true;
      continue;
    } 
    if(flag){
      right.push(center[i])
    } else {
      left.push(center[i])
    }
  }
 
  let leftPrevArr = prev.slice(1,left.length+1)
  let leftCenterArr = left
  let rightPrevArr = prev.slice(left.length + 1,prev.length)
  let rightCenterArr = right;
  let rootTree = {
    value: root,
    left: rebuildBinaryTree(leftPrevArr,leftCenterArr),
    right: rebuildBinaryTree(rightPrevArr,rightCenterArr)
  }
  return rootTree;
}

console.log(JSON.stringify(rebuildBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6])))


