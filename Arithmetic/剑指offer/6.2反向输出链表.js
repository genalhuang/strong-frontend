/**
 * 反向输出链表
 */
function reverseListNode(listNode) {
  if (listNode === null) {
    return [];
  }
  if (listNode.next !== null) {
    return reverseListNode(listNode.next).concat([listNode.value])
  }
  return [listNode.value]
}
let listNode = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
}
// console.log(reverseListNode(listNode))