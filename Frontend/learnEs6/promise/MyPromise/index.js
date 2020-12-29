
// 简单版
// class Promise {
//   callbacks =[];
//   constructor(fn) {
//     fn(this._resolve.bind(this))
//   }
//   then(onFulFilled) {
//     this.callbacks.push(onFulFilled)
//     return this;
//   }
//   _resolve(value) {
//     this.callbacks.forEach(fn=>fn(value));
//   }
// }
// let p = new Promise(resolve => {
//   setTimeout(()=>{
//     console.log('done');
//     resolve('5秒')
//   },5000)
// }).then((tip) => {
//   console.log('then1',tip)
// }).then((tip)=>{
//   console.log('then2',tip)
// })

//极简的实现 es5版本
// function Promise(fn) {
//   this.callbacks = [];
//   fn(this.resolve.bind(this));
// }
// Promise.prototype.then = function then(onFulfilled) {
//   this.callbacks.push(onFulfilled);
// }
// Promise.prototype.resolve = function resolve(value) {
//   this.callbacks.forEach(fn => fn(value));
// }

// //Promise应用
// let p = new Promise(resolve => {
//   setTimeout(() => {
//       console.log('done');
//       resolve('5秒');
//   }, 5000);
// }).then((tip) => {
//   console.log(tip);
// })



//极简的实现+链式调用+延迟机制+状态
// class Promise {
//   callbacks = [];
//   state = 'pending';//增加状态
//   value = null;//保存结果
//   constructor(fn) {
//       fn(this._resolve.bind(this));
//   }
//   then(onFulfilled) {
//       if (this.state === 'pending') {//在resolve之前，跟之前逻辑一样，添加到callbacks中
//           this.callbacks.push(onFulfilled);
//       } else {//在resolve之后，直接执行回调，返回结果了
//           onFulfilled(this.value);
//       }
//       return this;
//   }
//   _resolve(value) {
//       this.state = 'fulfilled';//改变状态
//       this.value = value;//保存结果
//       this.callbacks.forEach(fn => fn(value));
//   }
// }


// let p = new Promise(resolve => {
//   console.log('同步执行')
//   resolve()
// }).then(tip => {
//   return 'adfadf'
// }).then(tip => {
//   console.log('then2',tip)
// })


// 每个 then 注册的 onFulfilled 都返回了不同的结果，层层递进，
// 很明显在 then 方法中 return this 不能达到这个效果。引入真正的链式调用，
// then 返回的一定是一个新的Promise实例。
// 链式调用的完整实现
// promise 之 返回value的情况
// class Promise {
//   callbacks = [];
//   state = 'pending';//增加状态
//   value = null;//保存结果
//   constructor(fn) {
//       fn(this._resolve.bind(this));
//   }
//   then(onFulfilled) {
//       return new Promise(resolve => {
//           this._handle({
//               onFulfilled: onFulfilled || null,
//               resolve: resolve
//           });
//       });
//   }
//   _handle(callback) {
//       if (this.state === 'pending') {
//           this.callbacks.push(callback);
//           return;
//       }
//       //如果then中没有传递任何东西
//       if (!callback.onFulfilled) {
//           callback.resolve(this.value);
//           return;
//       }
//       var ret = callback.onFulfilled(this.value);
//       callback.resolve(ret);
//   }
//   _resolve(value) {
//       this.state = 'fulfilled';//改变状态
//       this.value = value;//保存结果
//       this.callbacks.forEach(callback => this._handle(callback));
//   }
// }



// new Promise(resolve => {
//     resolve('result');
// }).then(result => {
//   console.log(result);
//   //对result进行第一层加工
//   return exResult = '前缀:' + result;
// }).then(exResult => {
//   console.log(exResult);
// });

// // 这里对应__handle里面的 !callback.onFulFilled 情况 也就是then不传
// new Promise(resolve => {
//   resolve('result');
// }).then()






// promise 之 返回promise的情况
// class Promise {
//   callbacks = [];
//   state = 'pending';//增加状态
//   value = null;//保存结果
//   constructor(fn) {
//     fn(this._resolve.bind(this));
//   }
//   then(onFulfilled) {
//     return new Promise(resolve => {
//       this._handle({
//         onFulfilled: onFulfilled || null,
//         resolve: resolve
//       });
//     });
//   }
//   _handle(callback) {
//     if (this.state === 'pending') {
//       this.callbacks.push(callback);
//       return;
//     }
//     //如果then中没有传递任何东西
//     if (!callback.onFulfilled) {
//       callback.resolve(this.value);
//       return;
//     }
//     var ret = callback.onFulfilled(this.value);
//     callback.resolve(ret);
//   }
//   _resolve(value) {
//     if (value && (typeof value === 'object' || typeof value === 'function')) {
//       var then = value.then;
//       if (typeof then === 'function') {
//         then.call(value, this._resolve.bind(this));
//         return;
//       }
//     }
//     this.state = 'fulfilled';//改变状态
//     this.value = value;//保存结果
//     this.callbacks.forEach(callback => this._handle(callback));
//   }
// }

// const a = new Promise(resolve => {
//   resolve('promise1')
// })
// const b = new Promise(resolve => {
//   resolve('promsie2')
// })
// a.then(data => {
//   console.log(data);
//   return b
// }).then(data2 => {
//   console.log(data2)
// })



// class Promise {
//   callbacks = [];
//   state = 'pending';
//   value = null;
//   constructor(fn) {
//     fn(this._resolve.bind(this));
//   }
//   then(onFulFilled) {
//     return new Promise(resolve => {
//       this._handle({
//         onFulFilled: onFulFilled || null,
//         resolve: resolve
//       })
//     })
//   }
//   _handle(callback) {
//     if(this.state === 'pending') {
//       this.callbacks.push(callback);
//       return;
//     }
//     if(!callback.onFulFilled) {
//       callback.resolve(this.value);
//       return;
//     }
//     var ret = callback.onFulFilled(this.value);
//     callback.resolve(ret)
//   }
//   _resolve(value) {
//     if (value && (typeof value === 'object' || typeof value === 'function')) {
//         var then = value.then;
//         if (typeof then === 'function') {
//             then.call(value, this._resolve.bind(this));
//             return;
//         }
//     }
//     this.state = 'fulfilled';//改变状态
//     this.value = value;//保存结果
//     this.callbacks.forEach(callback => this._handle(callback));
//   }
// }

// // var a = new Promise((resolve)=>{
// //   setTimeout(()=>{
// //     resolve('aaa')
// //   },1000)
// // })
// // var b = new Promise((resolve)=>{
// //   setTimeout(()=>{
// //     resolve('bbb')
// //   },1000)
// // })

// // a.then(()=>{
// //   console.log('aaa')
// //   return b
// // }).then((res)=>{
// //   console.log(res)
// // })



// // 支持错误处理
// class Promise {
//   callbacks = [];
//   state = 'pending';
//   value = null;
//   constructor(fn) {
//     // 参数校验
//     if (typeof )
//     fn(this._resolve.bind(this), this._reject.bind(this));
//   }

//   then(onFulFilled, onRejected) {
//     return new Promise((resolve, reject) => {
//       this.handle({
//         onFulFilled: onFulFilled || null,
//         onRejected: onRejected || null,
//         resolve: resolve,
//         reject: reject
//       });
//     })
//   }

//   _handle(callback) {
//     if(this.state === 'pending') {
//       this.callbacks.push(callback);
//       return
//     }
//     let cb = this.state === 'fulfilled' ? callback.onFulFilled : callback.onRejected
//     if(!cb) {
//       cb = this.state === 'fulfilled' ? callback.resolve: callback.reject;
//       cb(this.value)
//       return;
//     }
//     let ret = cb(this.value);
//     cb = this.state === 'fulfilled' ? callback.resolve : callback.reject;
//     cb(ret)
//   }

//   _resolve(value) {
//     if(value && typeof value === 'object' || typeof value === 'function') {
//       var then = value.then;
//       if(typeof then === 'function') {
//         then.call(value, this._resolve.bind(this), this._reject.bind(this));
//       }
//     }
//     this.state = 'fulfilled';
//     this.value = value;
//     this.callbacks.forEach(callback => this._handle(callback))
//   }

//   _reject(error) {
//     this.state = 'rejected';
//     this.value = error;
//     this.callbacks.forEach(callback => this._handle(callback));
//   }
// }






































