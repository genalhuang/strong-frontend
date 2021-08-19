/**
 * 链表中倒数第k个节点
 */

// 垃圾递归法
function getListNodeLastN(listNode, k) {
  if (!listNode) {
    return;
  }

  function getListNodeLast(listNode, k, sum) {
    if (!listNode.next) {
      if (k === 1) {
        return listNode
      }
      return 1;
    }
    ++sum.sum
    let res = getListNodeLast(listNode.next, k, sum)
    if (k > sum.sum) {
      return;
    }
    if (res) {
      if (!isNaN(res)) {
        if (++res === k) {
          return listNode
        }
        return res
      } else {
        return res;
      }
    }
    return;
  }

  return getListNodeLast(listNode, k, { sum: 1 })
}

var listNode = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
}
console.log(getListNodeLastN(listNode, 4))


// 聪明双指针法
function getListNodeLastN(head, k) {
  let fast, slow;
  fast = slow = head;
  while (k--) {
    fast = fast.next
    if (!fast && k) {
      return;
    }
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}

var listNode = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
}
console.log(getListNodeLastN(listNode, 3))


/**
 *
 * 举一反三
 * 如何求链表的中间节点？
 * 快指针 一次两步
 * 慢指针 一次一步
 *
 * 当我们用一个指针遍历不能解决问题的时候，可以尝试用两个指针来遍历链表。
 *  */