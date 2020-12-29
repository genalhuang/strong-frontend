
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'packOtherResource.js',
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
      // 如何打包其他资源(除了html/js/css)
      {
        exclude: /\.(css|js|html)$/,// 排除法
        loader: 'file-loader',
        options: {
          name:'[hash:3].[ext]'
        }
      }          
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
  ],
  mode: 'development',
}

