## 构建优化速度
- 缩小文件搜索范围
- 利用 DllPlugin 和 DllReferencePlugin 预编译资源模块
    简单来说DllPlugin的作用是预先编译一些模块，而DllReferencePlugin则是把这些预先编译好的模块引用起来。这边需要注意的是DllPlugin必须要在DllReferencePlugin执行前先执行一次。
    1. 将依赖的第三方模块抽离，打包到一个个单独的动态链接库中
    2. 当需要导入的模块存在动态链接库中时，让其直接从链接库中获取
    3. 项目依赖的所有动态链接库都需要被加载
-  使用 HappyPack，任务分解给多个子进程去并发的执行，子进程处理完后再把结果发送给主进程。核心原理：将webpack中最耗时的loader文件转换操作任务，分解到多个进程中并行处理，从而减少构建时间。
-  使用 ParallelUglifyPlugin，自带的JS压缩插件是单线程执行的，而webpack-parallel-uglify-plugin可以并行的执行
-  提取公共的包
-  Tree-shanking

## 优化使用体验
-  热更新HMR
-  自动刷新页面