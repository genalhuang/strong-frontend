/**
 * 复杂链表的复制
 */
 var copyRandomList = function (list) {
  if (!list) return null;
  let map = new Map()
  let node = list;
  while (node) {
    map.set(node, new Node(node.val))
    node = node.next;
  }
  let head = map.get(list);
  let cur = head;
  node = list;
  while (node) {
    cur.random = node.random ? map.get(node.random) : null;
    cur.next = node.next ? map.get(node.next) : null;
    cur = cur.next;
    node = node.next;
  }
  return head;

};
function Node(val) {
  this.val = val;
  this.next = null;
  this.random = null;
}

let c = {
  val: 3,
  next: null,
  random: null
}
let b = {
  val: 2,
  next: c,
  random: c
}
let a = {
  val: 1,
  next: b,
  random: b
}
console.log(copyRandomList(a))