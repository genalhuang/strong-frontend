Function.prototype.myCall = function (context, ...args) {
  var context = context || window;
  const fn = Symbol('function');
  context[fn] = this;
  let result = context[fn](...args)
  delete context[fn];
  return result;
}

var foo = {
  value: 1
};

function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this);
  return 'asdf'
}

console.log(bar.myCall(foo, 'kevin', 18));



Function.prototype.myApply = function (context, args) {
  var context = context || window;
  const fn = Symbol('function');
  context[fn] = this;
  let result = context[fn](...args)
  delete context[fn];
  return result;
}
console.log(bar.myApply(foo, ['kevin', 18]));


Function.prototype.myBind = function (context, ...args1) {
  context = context || window;
  let fn = Symbol('function');
  context[fn] = this;
  return function (...args2) {
    let result = context[fn](...args1.concat(args2))
    delete context[fn];
    return result;
  }
}

console.log(bar.myBind(foo, 'kevin', 18)());


function myNew(fn, ...args) {
  let newObj = Object.create(fn.prototype);
  const result = fn.apply(newObj, args);
  return typeof result === 'object' ? result : newObj
}

function Person(name) {
  this.name = name;
  // return {
  //   a:1
  // }
}

Person.prototype.sayHi = function () {
  console.log('hi ' + this.name)
}
let person = myNew(Person, '陈冠希')
console.log(person.sayHi())