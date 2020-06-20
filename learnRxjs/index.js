// var observable = Rx.Observable.create(function (observer) {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   setTimeout(() => {
//     observer.next(4);
//     observer.complete();
//   }, 1000);
// });


// console.log('just before subscribe');
// observable.subscribe({
//   next: x => console.log('got value ' + x),
//   error: err => console.error('something wrong occurred: ' + err),
//   complete: () => console.log('done'),
// });
// console.log('just after subscribe');


// var observable = Rx.Observable.create(function subscribe(observer) {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
//   observer.next(4); // 因为违反规约，所以不会发送
// });
// console.log('before');
// observable.subscribe(function (x) {
//   console.log(x);
// });
// console.log('after');


// var observable = Rx.Observable.create(function subscribe(observer) {
//   try {
//     observer.next(1);
//     observer.next(2+a);
//     observer.next(3);
//     observer.complete();
//   } catch (err) {
//     observer.next('遇到错误');
//     observer.error(err); // 如果捕获到异常会发送一个错误
//   }
// });
// console.log('before');
// observable.subscribe(function (x) {
//   console.log(x);
// });
// console.log('after');


// var observable = Rx.Observable.interval(1000);
// var subscription = observable.subscribe(x => console.log(x));
// // 稍后：
// // 这会取消正在进行中的 Observable 执行
// // Observable 执行是通过使用观察者调用 subscribe 方法启动的
// subscription.unsubscribe();


// var observable1 = Rx.Observable.interval(400);
// var observable2 = Rx.Observable.interval(300);

// var subscription = observable1.subscribe(x => console.log('first: ' + x));
// var childSubscription = observable2.subscribe(x => console.log('second: ' + x));

// subscription.add(childSubscription);
// // subscription.remove(childSubscription)
// setTimeout(() => {
//   // subscription 和 childSubscription 都会取消订阅
//   subscription.unsubscribe();
// }, 1000);



// var subject = new Rx.Subject();

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(1);
// // subject.error(2)
// subject.next(2);


// var subject = new Rx.Subject();
// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });
// var observable = Rx.Observable.from([1, 2, 3]);
// observable.subscribe(subject); // 你可以提供一个 Subject 进行订阅



// var source = Rx.Observable.from([1, 2, 3]);
// var subject = new Rx.Subject();
// var multicasted = source.multicast(subject);
// // 在底层使用了 `subject.subscribe({...})`:
// multicasted.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// multicasted.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });
// // 在底层使用了 `source.subscribe(subject)`:
// multicasted.connect();



// var source = Rx.Observable.interval(500);
// var subject = new Rx.Subject();
// var multicasted = source.multicast(subject);
// var subscription1, subscription2, subscriptionConnect;

// subscription1 = multicasted.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// // 这里我们应该调用 `connect()`，因为 `multicasted` 的第一个
// // 订阅者关心消费值
// subscriptionConnect = multicasted.connect();

// setTimeout(() => {
//   subscription2 = multicasted.subscribe({
//     next: (v) => console.log('observerB: ' + v)
//   });
// }, 600);

// setTimeout(() => {
//   subscription1.unsubscribe();
// }, 1200);

// // 这里我们应该取消共享的 Observable 执行的订阅，
// // 因为此后 `multicasted` 将不再有订阅者
// setTimeout(() => {
//   subscription2.unsubscribe();
//   subscriptionConnect.unsubscribe(); // 用于共享的 Observable 执行
// }, 2000);
// // 优化
// var source = Rx.Observable.interval(500);
// var subject = new Rx.Subject();
// var refCounted = source.multicast(subject).refCount();
// var subscription1, subscription2, subscriptionConnect;

// // 这里其实调用了 `connect()`，
// // 因为 `refCounted` 有了第一个订阅者
// console.log('observerA subscribed');
// subscription1 = refCounted.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });

// setTimeout(() => {
//   console.log('observerB subscribed');
//   subscription2 = refCounted.subscribe({
//     next: (v) => console.log('observerB: ' + v)
//   });
// }, 600);

// setTimeout(() => {
//   console.log('observerA unsubscribed');
//   subscription1.unsubscribe();
// }, 1200);

// // 这里共享的 Observable 执行会停止，
// // 因为此后 `refCounted` 将不再有订阅者
// setTimeout(() => {
//   console.log('observerB unsubscribed');
//   subscription2.unsubscribe();
// }, 2000);



// var subject = new Rx.BehaviorSubject(0); // 0是初始值
// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// subject.next(1);
// subject.next(2);

// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });
// subject.next(30);



// var subject = new Rx.ReplaySubject(3); // 为新的订阅者缓冲3个值
// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);
// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });
// subject.next(5);



// var subject = new Rx.AsyncSubject();
// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);
// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });
// subject.next(5);
// subject.complete();


// Rx.Observable.prototype.multiplyByTen = function multiplyByTen() {
//   var input = this;
//   return Rx.Observable.create(function subscribe(observer) {
//     input.subscribe({
//       next: (v) => observer.next(10 * v),
//       error: (err) => observer.error(err),
//       complete: () => observer.complete()
//     });
//   });
// }
// var observable = Rx.Observable.from([1, 2, 3, 4]).multiplyByTen();
// observable.subscribe(x => console.log(x));



// var observable = Rx.Observable.create(function (observer) {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
// }).observeOn(Rx.Scheduler.async);

// console.log('just before subscribe');
// observable.subscribe({
//   next: x => console.log('got value ' + x),
//   error: err => console.error('something wrong occurred: ' + err),
//   complete: () => console.log('done'),
// });
// console.log('just after subscribe');






// 在本地启动一个node服务,测试
var observable = Rx.Observable.fromPromise(axios.get('http://127.0.0.1:3000/users'));
observable.subscribe({
  next: x => console.log('got value ' + x + JSON.stringify(x)),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
});

var a = axios.get('http://127.0.0.1:3000/users')
console.log(a)