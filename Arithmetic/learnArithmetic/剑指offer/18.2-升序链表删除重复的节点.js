/**
 * 
 * 删除链表中重复的节点
 */
function removeRepeatNode(nodeList) {
  if (!nodeList) {
    return nodeList
  }
  if (!nodeList.next) {
    return nodeList
  }
  let prev1 = nodeList;
  let prev2 = nodeList.next
  while (prev1 && prev2) {
    console.log(prev1, prev2)
    if (prev1.value === prev2.value) {
      deleteNode(prev1, prev2)
      prev2 = prev1.next;
    } else {
      prev1 = prev1.next;
      prev2 = prev2.next;
    }
  }
  return nodeList;
}
function deleteNode(last, current) {
  let temp = current.next;
  if (temp) {
    last.next = temp;
    delete current;
  } else {
    last.next = null
  }
}

let nodeList = {
  value: 1,
  next: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 3,
          next: null
        }
      }
    }
  }
}
console.log(removeRepeatNode(nodeList))