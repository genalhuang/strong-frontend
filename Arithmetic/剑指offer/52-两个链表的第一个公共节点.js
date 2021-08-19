

/**
 * 两个链表的第一个公共节点
 */
 function getListCommon(list1,list2) {
  let stack1 = []
  let stack2 = []

  while(list1) {
    stack1.push(list1);
    list1 = list1.next
  }
  while(list2) {
    stack2.push(list2);
    list2 = list2.next
  }
  if(stack1[stack1.length-1] !== stack2[stack2.length-1]) {
    return null;
  }
  let i = 1;
  while(stack1[stack1.length-i]  && stack2[stack2.length-i] && stack1[stack1.length-i] === stack2[stack2.length-i]) {
    ++i
  }

  return stack1[stack1.length-i+1]
}
let common= {
  value: 'common',
  next: {
    value:3,
    next:{
      value:2,
      next:{
        value:1,
        next:null
      }
    }
  }
}
let list1 = {
  value:'b',
  next:null
}
let list2 = {
  value:'a',
  next:common
}

let res = getListCommon(list1,list1)
console.log(res)