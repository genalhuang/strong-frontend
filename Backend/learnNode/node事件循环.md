## node事件循环的六个阶段
1. timers 定时器阶段
   - 本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。
2. pending callbacks 待定回调
   - 执行延迟到下一个循环迭代的 I/O 回调
3. idle， prepare 仅系统内部使用。
4. poll 轮询
   - 检索新的 I/O 事件;执行与 I/O 相关的回调
5. check
   - setImmediate() 回调函数在这里执行。
6. close callbacks 关闭的回调函数
   - 一些关闭的回调函数，如：socket.on('close', ...)

**process.nextTick()** 
- 它都将在当前操作（阶段，共有六个阶段）完成后处理 nextTickQueue， 而不管事件循环的当前阶段如何
- 所有传递到 process.nextTick() 的回调将在事件循环继续之前解析。
- 可以把process.nextTick()当做微任务

## process.nextTick() 和 微任务对比
- process.nextTick() 会进入 Next Tick Queue
- Promise 会进入 Other Micro Queue
- Next Tick Queue优先于Other Micro Queue

## process.nextTick() 对比 setImmediate()
- process.nextTick() 在同一个阶段立即执行。
- setImmediate() 在事件循环的接下来的迭代或 'tick' 上触发。

## node事件循环和微任务处理时机
旧版本是从宏队列取出任务执行，而新版本是处理微任务。
于是我们可以得到结论：
- 旧版本会清空宏任务队列，再运行微任务
- 新版本是每运行完一个宏任务，就去清空微任务队列。