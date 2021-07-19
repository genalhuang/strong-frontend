/**
 * 用两个栈实现一个队列 同理思考两个队列实现栈
 */
 class Stack2ToQuene {
  stack1 = [];
  stack2 = [];
  constructor(arr) {
    this.stack1 = arr;
  }

  out() {
    if (!this.stack2.length && this.stack1.length) {
      while (this.stack1.length) {
        let a = this.stack1.pop()
        this.stack2.push(a)
      }
      return this.stack2.pop()
    } else if (!this.stack2.length && !this.stack1.length) {
      console.log('队空')
    } else {
      return this.stack2.pop()
    }
  }

  in(num) {
    this.stack1.push(num)
  }
}

// let quene = new Stack2ToQuene([1,2,3,4])
// console.log(quene.out())
// console.log(quene.out())
// quene.in(5)
// console.log(quene.out())
// console.log(quene.out())
// console.log(quene.out())
// console.log(quene.out())
