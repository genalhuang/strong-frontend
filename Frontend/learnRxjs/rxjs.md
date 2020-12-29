### rxjs(一组可用来处理非同步或事件的javascript函数库)
目的: 有效管理非同步环境下的事件
非同步:
- ajax
- service worker/node stream
- setTimeout/setInterval
- promsie

事件:
- DOM事件
- css动画事件
- html5 Geolocation/webSockets

#### rxjs核心概念
- Observable (可观察对象): 表示一个概念，这个概念是一个可调用的未来值或事件的集合。
- Observer (观察者): 一个回调函数的集合，它知道如何去监听由 Observable 提供的值。
- Subscription (订阅): 表示 Observable 的执行，主要用于取消 Observable 的执行。
- Operators (操作符): 采用函数式编程风格的纯函数 (pure function)，使用像 map、filter、concat、flatMap 等这样的操作符来处理集合。
- Subject (主体): 相当于 EventEmitter，并且是将值或事件多路推送给多个 Observer 的唯一方式。
- Schedulers (调度器): 用来控制并发并且是中央集权的调度员，允许我们在发生计算时进行协调，例如 setTimeout 或 requestAnimationFrame 或其他。


#### Observable剖析
- 创建 Observables
  ```js
  var observable = Rx.Observable.create(function subscribe(observer) {
    var id = setInterval(() => {
      observer.next('hi')
    }, 1000);
  });
  ```
- 订阅 Observables
  ```js
  observable.subscribe(x => console.log(x));
  ```
- 执行 Observables
  Observable 执行可以传递三种类型的值：
  - "Next" 通知： 发送一个值，比如数字、字符串、对象，等等。
  - "Error" 通知： 发送一个 JavaScript 错误 或 异常。
  - "Complete" 通知： 不再发送任何值。
  在 Observable 执行中, 可能会发送零个到无穷多个 "Next" 通知。如果发送的是 "Error" 或 "Complete" 通知的话，那么之后不会再发送任何通知了。
- 清理 Observables
  var subscription = observable.subscribe(x => console.log(x));


#### Observer观察者

观察者是由 Observable 发送的值的消费者。观察者只是一组回调函数的集合，每个回调函数对应一种 Observable 发送的通知类型：next、error 和 complete 。
下面的示例是一个典型的观察者对象：
```js
var observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};
```

#### Subscription订阅(消费者)

```js
var observable = Rx.Observable.interval(1000);
var subscription = observable.subscribe(x => console.log(x));
// 稍后：
// 这会取消正在进行中的 Observable 执行
// Observable 执行是通过使用观察者调用 subscribe 方法启动的
subscription.unsubscribe();
```
```js
Subscription 基本上只有一个 unsubscribe() 函数，这个函数用来释放资源或去取消 Observable 执行。

Subscription 还可以合在一起，这样一个 Subscription 调用 unsubscribe() 方法，可能会有多个 Subscription 取消订阅 。你可以通过把一个 Subscription 添加到另一个上面来做这件事：

var observable1 = Rx.Observable.interval(400);
var observable2 = Rx.Observable.interval(300);

var subscription = observable1.subscribe(x => console.log('first: ' + x));
var childSubscription = observable2.subscribe(x => console.log('second: ' + x));

subscription.add(childSubscription);

setTimeout(() => {
  // subscription 和 childSubscription 都会取消订阅
  subscription.unsubscribe();
}, 1000);
// Subscriptions 还有一个 remove(otherSubscription) 方法，用来撤销一个已添加的子 Subscription 。
```

#### subject主体
- 每个 Subject 都是 Observable 。 - 对于 Subject，你可以提供一个观察者并使用 subscribe 方法，就可以开始正常接收值。从观察者的角度而言，它无法判断 Observable 执行是来自普通的 Observable 还是 Subject 。
- 在 Subject 的内部，subscribe 不会调用发送值的新执行。它只是将给定的观察者注册到观察者列表中，类似于其他库或语言中的 addListener 的工作方式。
- 每个 Subject 都是观察者。 - Subject 是一个有如下方法的对象： next(v)、error(e) 和 complete() 。要给 Subject 提供新值，只要调用 next(theValue)，它会将值多播给已注册监听该 Subject 的观察者们。


#### subject的变体
- BehaviorSubject
它有一个“当前值”的概念。它保存了发送给消费者的最新值。并且当有新的观察者订阅时，会立即从 BehaviorSubject 那接收到“当前值”。
- ReplaySubject
ReplaySubject 类似于 BehaviorSubject，它可以发送旧值给新的订阅者，但它还可以记录 Observable 执行的一部分。
- AsyncSubject
AsyncSubject 是另一个 Subject 变体，只有当 Observable 执行完成时(执行 complete())，它才会将执行的最后一个值发送给观察者。


#### Operators操作符
操作符是函数，它基于当前的 Observable 创建一个新的 Observable。这是一个无副作用的操作：前面的 Observable 保持不变。
- 实例运算符
实例运算符是使用 this 关键字来指代输入的 Observable 的函数。
- 静态操作符
静态操作符是附加到 Observalbe 类上的纯函数，通常用来从头开始创建 Observalbe 。

#### Marble diagrams (弹珠图)
看官网吧

#### Scheduler (调度器)
调度器可以让你规定 Observable 在什么样的执行上下文中发送通知给它的观察者。