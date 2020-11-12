// 手写call, apply, bind方法

// Function.prototype.myCall = function (context, ...args) {
//   var context = context || window;
//   const fn = Symbol('function');
//   context[fn] = this;
//   let result = context[fn](...args)
//   delete context[fn];
//   return result;
// }

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


// 手写new

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


// 手写自执行迭代器
// const getData = () => new Promise(resolve => setTimeout(() => resolve("data"), 1000))

// function* generator() {
//   const data = yield getData()
//   console.log('data: ', data);
//   const data2 = yield getData()
//   console.log('data2: ', data2);
//   return 'success'
// }

// function spawn(genF) {
//   return new Promise((resolve, reject) => {
//     let gen = genF()
//     function step(nextF) {
//       let next
//       try {
//         next = nextF()
//       } catch (e) {
//         reject(e)
//       }
//       if (next.done) {
//         return resolve(next.value)
//       }
//       Promise.resolve(next.value).then(v => {
//         step(() => {
//           return gen.next(v)
//         })
//       }, e => {
//         return gen.throw(e)
//       })
//     }
//     step(() => {
//       return gen.next()
//     })
//   })
// }

// // 这样的一个函数 应该再1秒后打印data 再过一秒打印data2 最后打印success
// spawn(generator).then(e => {
//   console.log(e)
// })



// 手写JSON.stringify
function myJsonStringify(obj) {
  let str = `{`
  for (let key in obj) {
    if (Object.prototype.toString.call(obj[key]) === '[object Function]') {
      str += `${key}:${obj[key].toString()},`
    } else if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
      str += `${key}:${myJsonStringify(obj[key])}` + ','
    } else if (Object.prototype.toString.call(obj[key]) === '[object Array]') {
      let arrStr = '['
      let arr = obj[key]
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (typeof item === 'object') {
          arrStr += myJsonStringify(item) + ','
        } else {
          arrStr += item + ','
        }
      }
      arrStr = arrStr.substr(0, arrStr.length - 1)
      arrStr += ']]'
      str += `${key}:${arrStr}`;
    } else {
      str += `${key}:${String(obj[key])},`
    }
  }
  return str.substr(0, str.length - 1) + '}'
}

let obj = {
  a: 1,
  b: 2,
  c: {
    c1: 1,
    c2: '1234',
    c3: function (c) {
      console.log(c)
    }
  },
  e: [1, 2, { a: 1 }, function (e) { console.log(e) }]
}
let str = myJsonStringify(obj)
console.log(str)
console.log(JSON.stringify(str))

