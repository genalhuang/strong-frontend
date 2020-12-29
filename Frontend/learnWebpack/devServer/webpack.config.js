
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'devServer.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },        
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
  ],
  mode: 'development',

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

