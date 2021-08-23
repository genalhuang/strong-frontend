## 开篇
很多人在构建前端项目时会发现打包出来的`chunk.vendors.xxx.js`文件实在是太大,导致首屏加载速度很慢.这里我把阿童木聊天室的首屏优化步骤分享给大家.
> 阿童木聊天室在线地址 [www.genal.fun](http://www.genal.fun)

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/be05728cd49e486bb8da57dd59488c74~tplv-k3u1fbpfcp-zoom-1.image)
### 优化流程
#### 1. 使用`webpack-bundle-analyzer`分析前端项目包大小, 找出问题源头.
```js
// vue.config.js
chainWebpack: (config) => {
  config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin);
}
```
#### 2. 去掉`vuecli`打包生成的map文件
这些文件用于错误时给出准确的提示,线上环境是不需要的.
```js
// vue.config.js
productionSourceMap: false
```
#### 3.`CDN`引入需要的资源
在`vue.config.js`中配置不打包相关资源. 这样可以大幅降低项目打包文件大小
```js
// vue.config.js
const cdn = {
  css: [
    // antd css 由于引入失败只好放弃了antd的按需引入
  ],
  js: [
    // vue
    'https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js',
    // vue-router
    'https://cdn.bootcdn.net/ajax/libs/vue-router/3.1.3/vue-router.min.js',
    // vuex
    'https://cdn.bootcdn.net/ajax/libs/vuex/3.1.2/vuex.min.js',
    // axios
    'https://cdn.bootcdn.net/ajax/libs/axios/0.18.0/axios.min.js',
    // moment
    'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.js',
  ],
};

chainWebpack: (config) => {
  // 正式环境配置cdn引入
  if (process.env.NODE_ENV === 'production') {
    let externals = {
      vue: 'Vue',
      axios: 'axios',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      moment: 'moment',
    };
    config.externals(externals);
    // 通过 html-webpack-plugin 将 cdn 注入到 index.html 之中
    config.plugin('html').tap((args) => {
      args[0].cdn = cdn;
      return args;
    });
  }
},
```
然后在`public/index.html`中加入以下代码, 正式环境才走`cdn` 
```js
<% if (process.env.NODE_ENV === 'production') { %>
<% for(var css of htmlWebpackPlugin.options.cdn.css) { %>
<link rel="stylesheet" href="<%=css%>" as="style">
<% } %>
<% for(var js of htmlWebpackPlugin.options.cdn.js) { %>
<script src="<%=js%>"></script>
<% } %>
<% } %>
```
开启了`cdn`加载资源后, 线上环境没有被`webpack`打包的资源都走了`cdn`加载, 如图
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/495d5b68358e4c24a8f591c42b3005f0~tplv-k3u1fbpfcp-zoom-1.image)
#### 4. 开启`gzip`打包
```js
// vue.config.js
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
configureWebpack: (config) => {
  // 代码 gzip
  const productionGzipExtensions = ['html', 'js', 'css'];
  config.plugins.push(
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      threshold: 10240, // 只有大小大于该值的资源会被处理 10240
      minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
      deleteOriginalAssets: false, // 删除原文件
    })
  );
},
```
同时需要配置`nginx`才可支持`gzip`
```js
// nginx.conf
http {
  #nginx开启gzip
  #前端文件在build的时候已经配置好压缩,需要再配置一下nginx;
  gzip on; 
  gzip_static on;
  gzip_buffers 4 16k;
  gzip_comp_level 5;
  gzip_types text/plain application/javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg 
              image/gif image/png;   
}
```
配置完之后可以看到线上环境的资源会以`gzip`的格式传输
![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4e1b4630a1ec49fda0a255a344f0502f~tplv-k3u1fbpfcp-zoom-1.image)
#### 5. 配置路由懒加载
这样能让打包出来的代码分割, 而不会统统堆一个文件里. 这样的好处是首屏渲染在用户眼里更快了.
```js
// router.js
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Chat',
    component: () => import('@/views/GenalChat.vue'),
  },
];
```
#### 6. 服务端渲染(SSR)/预渲染(Prerendering)
由于服务端渲染对代码侵入性比较高,因此我使用了预渲染方案.
```js
// vue.config.js
configureWebpack: (config) => {
  // 预渲染
  return {
    plugins: [
      // 预渲染配置
      new PrerenderSPAPlugin({
        // 输出预渲染文件的路径。
        staticDir: path.join(__dirname, 'dist'),
        // 预渲染的路由
        routes: ['/'],
        // 要使用的实际渲染器
        renderer: new Renderer({
          // 等待渲染，直到检测指定事件
          renderAfterDocumentEvent: 'render-event',
          args: ['--no-sandbox', '--disable-setuid-sandbox'], // chentos8 构建失败需要加
        }),
      }),
    ],
  };
},
```
```!
特别提醒
1. 第5条和第6条是冲突的! 配置了预渲染的路由不可以使用路由懒加载!
2. linux环境下构建预渲染代码很可能会报一些奇怪的错误, 需要百度解决!
3. 坑是真的多...
```

### 更多思路
> 7. 静态资源使用`cdn`加速
> 8. 浏览器缓存
> 9. 各种库的按需引入
> 10. 首屏加载太久时使用`loading`效果
> 11. why not use `promise.all`? `promise.all`可以并发多个没有关联的数据请求(如获取多个用户的头像),提高资源加载速度,充分发挥`js`异步的特性.
> 12. tree shanking
> 13. 升级http2.0
> 14. 图片懒加载
> 15. 压缩js文件（webpack-parallel-uglify-plugin）

## 优化前后文件对比
优化前
![图1](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/afdac8f13b4a4fecaf4aaa8a5a8e505b~tplv-k3u1fbpfcp-zoom-1.image)
优化后
![图2](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2393b43b6bc04675b93b0073ccbec393~tplv-k3u1fbpfcp-zoom-1.image)
- 需要注意的是优化前并没有开启`gzip`, 所以优化前资源大小参考图中`Size`栏. 
- 优化效果用`chunk-vendors.js`文件来说, 就是优化前 **1544kb**, 优化后 **346kb** !

## 总结
通过使用上述方法优化前端代码,我用 1m 带宽的腾讯云服务器居然做到了 3s 内渲染完成, 原本不做任何优化的加载速度是 12s+!!! 通过首屏优化, 网站响应速度足足快了 **四倍以上 !** 

### 一些疑问
如果用`webpack`的`splitchunks`功能将`chunk-vendors.xxx.js`文件拆分成多个小文件,通过`http`多路并行加载会不会比以前快?

**答案:**  很遗憾,基本不会变快.我亲自试验过, splitchunks不会带来任何的性能提升.直接给图
- 不拆分`chunk-vendors.xxx.js`
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e2ae47900996488397b6e6a112d48d61~tplv-k3u1fbpfcp-zoom-1.image)
- 拆分`chunk-vendors.xxx.js`成多个小文件
![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0e47a789e064362ab7d5d8b54a51018~tplv-k3u1fbpfcp-zoom-1.image)

从图中看其实还变慢了,原因是在单条tcp连接传输多个文件，即便复用连接，浏览器在文件与文件之间仍然要停一下发送一次HTTP的请求头,这里会造成多一点的时间损耗.

### 参考资料
[合并HTTP请求 vs 并行HTTP请求，到底谁更快？](https://segmentfault.com/a/1190000015665465)


