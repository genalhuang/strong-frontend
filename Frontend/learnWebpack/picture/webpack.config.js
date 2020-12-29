/*
webpack的配置文件
在有webpack.config.js的目录的终端直接输入webpack即可开始打包
所有的构建工具都是基于nodejs平台运行的,模块化默认采用commonjs
*/
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
          limit: 8*1024,
          // 重命名图片
          // [hash:10] 取图片hash的前十位
          // [ext] 取文件原来的扩展名
          name:'[hash:10].[ext]'
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

