/**
 * 反转链表返回反转后的链表头结点
 * @param {} listNode 
 */
// 垃圾递归
function reverseListNode(listNode) {
  if (!listNode || !listNode.next) {
    return listNode;
  }
  let node = reverseListNode(listNode.next)
  let k = node
  while (k && k.next) {
    k = k.next
  }
  k.next = listNode;
  listNode.next = null;
  return node;
}

var listNode = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}

// 保存节点循环
function reverseListNode(listNode) {
  debugger;
  if (!listNode || !listNode.next) {
    return listNode;
  }
  let left = listNode;
  let current = listNode.next;
  let right = listNode.next.next;
  left.next = null;
  while (right) {
    current.next = left;
    left = current;
    current = right;
    right = right.next;
  }
  current.next = left;
  return current;
}
console.log(reverseListNode(listNode))