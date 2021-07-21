/**
 * 合并两个排序的链表
 * 不要强求链表空间复用
 */
class ListNode {
  constructor(num) {
    return {
      value: num,
      next: null
    }
  }
}
function mergeList(l1, l2) {
  const res = new ListNode(0);
  let p = res;
  let [p1, p2] = [l1, l2];
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    // 记得p也要右移
    p = p.next;
  }
  p.next = p1 ? p1 : p2;
  return res.next;
}

var listNode1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 4,
    }
  }
}
var listNode2 = {
  value: 1,
  next: {
    value: 3,
    next: {
      value: 4,
      next: null
    }
  }
}
console.log(JSON.stringify(mergeList(listNode1, listNode2)))