## Tapable
### 是什么？
Tapable 的功能与 EventEmitter 类似，但是更加强大，它包含了多种不同的监听和触发事件的方式。

### 作用
Webpack 本质上是一种事件流的机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是 Tapable，Webpack 中最核心的负责编译的 Compiler 和负责创建 bundles 的 Compilation 都是 Tapable 的子类，并且实例内部的生命周期也是通过 Tapable 库提供的钩子类实现的。

### Tapable的hook类

### 使用Tapable
- 注册事件
1. 同步： tap
2. 异步： tap, tapAsync, tapPromise
- 触发事件
1. 同步： call, callAsync, promise
2. 异步： callAsync, promise
- 主要api解析
Sync：这是一个同步的hook

Async：这是一个异步的hook

Bail：Bail在英文中的意思是保险，保障的意思，实现的效果是，当一个hook注册了多个回调方法，任意一个回调方法返回了不为undefined的值，就不再执行后面的回调方法了，就起到了一个“保险丝”的作用。

Waterfall：Waterfall在英语中是瀑布的意思，在编程世界中表示顺序执行各种任务，在这里实现的效果是，当一个hook注册了多个回调方法，前一个回调执行完了才会执行下一个回调，而前一个回调的执行结果会作为参数传给下一个回调函数。

Loop：Loop就是循环的意思，实现的效果是，当一个hook注册了回调方法，如果这个回调方法返回了true就重复循环这个回调，只有当这个回调返回undefined才执行下一个回调。

Parallel：Parallel是并行的意思，有点类似于Promise.all，就是当一个hook注册了多个回调方法，这些回调同时开始并行执行。

Series：Series就是串行的意思，就是当一个hook注册了多个回调方法，前一个执行完了才会执行下一个。

Parallel和Series的概念只存在于异步的hook中，因为同步hook全部是串行的。

更详细的使用看[tapable使用](https://zhuanlan.zhihu.com/p/100974318)
[tapable详解](https://www.cnblogs.com/dennisj/p/14538668.html)

### 在webpack中的使用
- 举例 `webpack`的 compiler类的定义
```js
const {
	SyncHook,
	SyncBailHook,
	AsyncParallelHook,
	AsyncSeriesHook
} = require("tapable");


class Compiler {

	constructor(context) {
		this.hooks = Object.freeze({
			initialize: new SyncHook([]),
			shouldEmit: new SyncBailHook(["compilation"]),
      ...
    }）
  }
}
```