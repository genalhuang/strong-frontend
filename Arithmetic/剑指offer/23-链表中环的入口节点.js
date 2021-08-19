/**
 * 链表中环的入口节点
 */

// 判断是否含环，含则返回环中节点个数
function getRoundNodes(listNode) {
  if (!listNode || !listNode.next) {
    return false;
  }
  let slow = listNode;
  let fast = listNode
  slow = slow.next;
  fast = fast.next.next;
  let nodesInRound = 1;
  while (slow !== fast && fast) {
    slow = slow.next;
    fast = fast.next
    if (!fast || !fast.next) {
      return false;
    }
    ++nodesInRound
    fast = fast.next;
  }
  if (!fast) {
    return false;
  }
  return nodesInRound
}
let c = {
  value: 3,
  next: null
}
let b = {
  value: 2,
  next: null
}
let head = {
  value: 1,
  next: b
}
b.next = c;
c.next = {
  value: 4,
  next: head
};


// 获取链表中环入口节点
function getRoundStart(listNode) {
  let res = getRoundNodes(listNode)
  if (!res) {
    return false;
  }
  let slow = listNode;
  let fast = listNode
  for (var i = 0; i < res; i++) {
    fast = fast.next;
  }
  while (slow !== fast && fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}



console.log(getRoundStart(head))