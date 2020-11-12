// Function.prototype.myCall = function (context, ...args) {
//   var context = context || window;
//   const fn = Symbol('function');
//   context[fn] = this;
//   let result = context[fn](...args)
//   delete context[fn];
//   return result;
// }

const { setPriority } = require("os");

// var foo = {
//   value: 1
// };

// function bar(name, age) {
//   console.log(name)
//   console.log(age)
//   console.log(this);
//   return 'asdf'
// }

// console.log(bar.myCall(foo, 'kevin', 18));



// Function.prototype.myApply = function (context, args) {
//   var context = context || window;
//   const fn = Symbol('function');
//   context[fn] = this;
//   let result = context[fn](...args)
//   delete context[fn];
//   return result;
// }
// console.log(bar.myApply(foo, ['kevin', 18]));


// Function.prototype.myBind = function (context, ...args1) {
//   context = context || window;
//   let fn = Symbol('function');
//   context[fn] = this;
//   return function (...args2) {
//     let result = context[fn](...args1.concat(args2))
//     delete context[fn];
//     return result;
//   }
// }

// console.log(bar.myBind(foo, 'kevin', 18)());


// function myNew(fn, ...args) {
//   let newObj = Object.create(fn.prototype);
//   const result = fn.apply(newObj, args);
//   return typeof result === 'object' ? result : newObj
// }

// function Person(name) {
//   this.name = name;
//   // return {
//   //   a:1
//   // }
// }

// Person.prototype.sayHi = function () {
//   console.log('hi ' + this.name)
// }
// let person = myNew(Person, '陈冠希')
// console.log(person.sayHi())


const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))

function* generator() {
  const data = yield getData()
  console.log('data: ', data);
  const data2 = yield getData()
  console.log('data2: ', data2);
  return 'success'
}

function spawn(genF) { //spawn函数就是自动执行器，跟简单版的思路是一样的，多了Promise和容错处理
  let gen = genF()
  let result = gen.next().value
  return new Promise(function(resolve, reject) {
    const gen = genF();
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch(e) {
        return reject(e);
      }
      if(next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(function(v) {
        step(function() { return gen.next(v); });
      }, function(e) {
        step(function() { return gen.throw(e); });
      });
    }
    step(function() { return gen.next(undefined); });
  });
}

// 这样的一个函数 应该再1秒后打印data 再过一秒打印data2 最后打印success
spawn(generator)
