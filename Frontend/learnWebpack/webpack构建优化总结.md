1. 构建优化速度
  1. 缩小文件搜索范围
  2. 使用 DllPlugin
  3. 使用 HappyPack，任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程。
  4. 使用 ParallelUglifyPlugin，会开启多个子进程，把对多个文件的压缩工作分配给多个子进程去完成，每个子进程其实还是通过 UglifyJS 去压缩代码，但是变成了并行执行。

2. 优化使用体验
   1. 热更新HMR
   2. 模块热替换
   3. 使用 parallel-uglify-plugin 插件 多进程压缩
   4. 使用 polyfill 动态服务
      动态 polyfill 指的是根据不同的浏览器，动态载入需要的 polyfill。 Polyfill.io 通过尝试使用 polyfill 重新创建缺少的功能，可以更轻松地支持不同的浏览器，并且可以大幅度的减少构建体积。
