/*
webpack的配置文件
在有webpack.config.js的目录的终端直接输入webpack即可开始打包
所有的构建工具都是基于nodejs平台运行的,模块化默认采用commonjs
*/
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  plugins: [
      // 配置plugins
      // 功能: 默认会创建一个空的HTML,引入打包输出的所有资源(js/css)
      // 需求: 需要一个有结构的html文件,怎么做?
  
      new HtmlWebpackPlugin({
        // 复制./src/index.html,并自动引入打包输出的所有资源
        template: './index.html'
      })
  ],
  mode: 'development',// 开发模式
}

