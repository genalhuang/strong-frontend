
# Webpack大笔记
### webpack-cli终端指令:
1. 开发环境:
webpack ./src/index.js -o ./build/builtinModules.js --mode=development
webpack以 src/index为入口打包,输出到build/built.js 
index.js  webpack入口文件
2. 生产环境:
webpack ./src/index.js -o ./build/builtinModules.js --mode=production
- 生产环境比开发环境多一个压缩js代码的功能
- webpack将es6模块化import等编译成浏览器能够识别的模块化

### webpack只能打包 js和json文件
### js部分
#### js兼容性处理
```js
module: {
  rules: [
    /*
      js兼容处理: babel-loader @babel/preset-env babel @babel/core
      1. 基本js兼容性 ==> @babel/preset-env (不能处理promise等高级语法)
      2. 全部js兼容 ==> @babel/polyfill 将@babel/polyfill引入到main.js中
      3. 需要做按需加载 ==> core-js 
    */
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        {
          // 按需加载
          useBuiltIns: 'usage',
          // 指定core-js版本
          corejs: {
            version: 3
          },
          // 指定兼容性做到哪个版本
          targets: {
            chrome: '60',
            firefox: '50',
            ie: '9',
          }
        }
      ]
    }
  ]
}
```
#### js语法检查
```js
module: {
  rules: [
    {
      // 在package.json中配置eslintConfig ==> airbnb 
      注意: 先执行eslint-loader在执行babel-loader
      test: /\.js$/,
      exclude: /node_modules/,
      enforce: 'pre', // 这个loader不管放什么位置都优先执行
      loader: 'eslint-loader',
      options: {
        fix: true
      }
    }
  ]
}

// package.json
eslintConfig: {
  extend: 'airbnb-base'
}
```
#### js压缩
```js
webpack.config.js
mode: 'production'即可
```

### css部分
#### 如何打包css,less文件?
```js
webpack的配置文件
在有webpack.config.js的目录的终端直接输入webpack即可开始打包
所有的构建工具都是基于nodejs平台运行的,模块化默认采用commonjs
const {resolve} = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'addLoaderGongNeng.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // 配置loader
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader
        use: [// 执行顺序是从右到左(下到上)
          // 创建style标签,将js中的css样式资源插入,添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载到js中,里面的内容是样式字符串
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // 配置plugins
  ],
  mode: 'development',// 开发模式
}
```

#### css兼容性处理
```js
// webpack.config.js
// 定义nodejs环境变量:决定使用browserslist使用哪个环境
process.env.NODE_ENV = 'production'
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,// css提取成单独文件
        'css-loader,
        {
          //还需要在package.json中定义browserslist
          // 默认使用production环境,需要修改process.env.NODE_ENV
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: () => [
              require('postcss-preset-env')()
            ]
          }
        }
      ]
    }
  ]
}

// package.json
browserslist: [
  developmet: [
    'last 1 chrome version',
    ...
  ],
  production: [
    '>0.2%',
    'not dead',
    'not op_momo all'
  ]
]
```


### html部分
#### 如何打包html文件?
- html-webpack-plugin
  
```js
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'addLoaderGongNeng.js',
    path: resolve(__dirname, 'build')
  },
  module: {
  plugins: [
    // 配置plugins
    // 功能: 默认会创建一个空的HTML,引入打包输出的所有资源(js/css)
    // 需求: 需要一个有结构的html文件,怎么做?

    new HtmlWebpackPlugin({
      // 复制./src/index.html,并自动引入打包输出的所有资源
      template: './src/index.html'
    })
  ],
  mode: 'development',// 开发模式
}

```
#### html压缩
```js
plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    minify: {
      // 移除空格
      collapseWhitespace: true,
      // 移除注释
      removeComments: true
    }
  })
]
```

### 图片资源部分
#### 如何打包图片资源?
```js
module.exports = {
  entry: './index.js',
  output: {
    filename: 'packImage.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        //  问题: url-loader处理不了html中img图片src,如何处理?
        // 处理图片资源
        test: /\.(jpg|png|gif)$/,
        // 使用loader
        // 注意: 需要下载url-loader和file-loader
        loader: 'url-loader',
        options: {
          // 图片大于8kb,会被处理成base64
          limit: 8*1024
          // 重命名图片
          // [hash:10] 取图片hash的前十位
          // [ext] 取文件原来的扩展名
          name:'[hash:10].[ext]',
          outputPath: 'imgs'// 配置该类文件导出到哪里
        }
      },
      {// 回答: html-loadre
        test: /\.html$/,
        // 处理 html文件中img图片(负责引入img,从而能被url-loader解析)
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
  ],
  mode: 'development',// 开发模式
}

```
### 其他资源部分
#### 如何打包其他资源?
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      // 如何打包其他资源(除了html/js/css)
      {
        exclude: /\.(css|js|html)$/,// 排除法
        loader: 'file-loader',
        options: {
          name:'[hash:3].[ext]'
          outputPath: 'other'// 配置该类文件导出到哪里
        }
      }          
    ]
  }
}

```
### devServer部分
#### devServer
- 用途: 用来自动化(自动编译,自动打开浏览器)
- 启动: webpack-dev-server命令
- 好处: 更改文件会自动进行编译
  
```js
module.exports = {
  // 开发服务器 devserver 
  // 特点: 只会在内存中编译打包,不会有输出(不会build)
  // 启动: webpack-dev-server
  devServer: {
    // 构建后的目录
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩,代码更小,启动更快
    compress: true,
    // 服务端口号
    port: 3000,
    // 自动打开浏览器
    open: true,
  }
}

```

### webpack优化
#### 1.开发环境性能优化
#### 优化打包构建速度
#####  HMR (热模块替换/更新)
作用: 一个模块发生变化,只会重新打包这个模块而不是所有
- css文件:可以 style-loader内部实现了
- js文件: 默认不能使用HMR js入口文件也不能使用hmr
- html文件: 默认不能使用HMR,(不需要做HMR功能)


```js
devServer: {
  // 开启HMR
  hot: true
  ...
}
```
[webpack官网](https://webpack.docschina.org/guides/hot-module-replacement/)
```js
index.js
配置需要监听hmr的js模块
if (module.hot) {
  module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
    printMe();
  })
}
```
#### 优化代码调试
#### source-map
提供源代码到构建后代码的映射,如果构建后代码出错,通过映射可以追踪到源代码
开启:
```js
devtool: 'source-map'
```
值:
[inline-|hidden-|eval-][nosources-][cheap-[module-]]

- source-map:外部 精确行列和源码错误位置 
- inline-source-map: 内联(只生成一个内联)
- hidden-source-map: 外部
  只能看到构建后代码错误位置和错误原因
- eval-source-map: 内联(每个文件都生成对应source-map并都在eval中)
- nosources-source-map: 外部
- cheap-source-map: 外部
- cheap-module-source-map: 外部
内联和外部的区别:
1. 外部会生成文件,外部没有
2. 内联构建速度更快

#### 2.生产环境性能优化

#### 优化打包构建速度
##### oneOf（多个loader只有一个生效）
##### babel缓存
```js
use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory:true 
    }
}
```
##### 多进程打包
#### externals(不参与打包) 
忽略库名-->npm包名
注意：当你忽略某个包后，需要手动<script>引进来 
优势：cdn引进比较快
```js
//webpack.config.js
externals: {
  jquery: 'jQuery'
}
```
#### dll(对某些第三方库单独打包)

#### 优化运行性能
##### 文件资源缓存
hash: 每次webapck构建打包会生成唯一的哈希值
问题：因为js和css都用hash，故使用同一hash值，js改变css也会失效
chunkhash：根据chunk生成hash值，如果打包来源同一个chunk，那么hash值一样
contenthash： 根据文件内容生成hash值，不同文件hash值一定不一样，文件内容不变，contenthash值不会变
name: 文件名作为打包后文件名
##### treeshanking
前提： 1. 使用es6模块化 2. 开启production环境
作用： 减少代码体积
##### code split （chunk（块）分割）
所有js放在一个js文件会导致加载时间过长
```js
1. 可以将node_module、各个（entry）入口的chunk中代码单独打包到单独chunk输出
2. 自动分析多入口chunk中是否有公共文件，如果有，也会打包成单独chunk
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
```
##### import动态导入语法（单独打包某个js文件）
引入某个js代码时使用以下语法
```js
// 配置打包的文件名
import(/* webpackChunkName: 'text' */ './test.js')
  .then({bianliang1}) => {// 可以使用解构赋值

  })
```
webpack就会分析成单独包，在通过配置**chunk（块）分割**实现

##### 懒加载(用了才加载)
```js
用到某个js文件时：
import('./test.js')
  .then({bianliang1}) => {

  })
```
##### 预加载结合懒加载
等其他资源加载完毕，其他资源空闲了，再偷偷加载
缺点：兼容问题
```js
import(/* webpackPrefetch:true */'./test.js')
  .then({bianliang1}) => {

  })
```
#### PWA渐进式网络开发应用程序（离线可访问）
workbox(谷歌开源的东西) ==> workbox-webpack-plugin插件
```js
plugins: {
  new WorkboxWebpackPlugin.GenerateSW({
    /*
      1. 帮助serviceworker快速启动
      2. 删除旧的serviceworker

      生成一个serviceworker配置文件
    */
    clientsClaim: true,
    skipWaiting: true
  })
}

// main.js  入口js文件
if('serviceWorker' in navigator) {
  window.addEventListener('load',()=>{
    '/service-worker.js'来自上面插件生成
    navigator.serviceWorker.register('/service-worker.js')
      .then(()=>{
        console.log('sw注册成功')
      })
      .catch(()=>{
        console.log('sw注册失败')
      })
  })
}

```
遇到问题：
1. eslint不认识window、navigator全局变量
解决: 修改package.json中eslintConfig配置
```js
eslintConfig: {
  'extend': 'xxx语法标准',
  'env': {
    'browser':true// 支持浏览器的全局变量
  }
}
```
2. sw代码运行在服务器上
nodejs
```js
npm i serve -g
serve -s build 启动build目录下所有资源作为静态资源暴露出去
```


