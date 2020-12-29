
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
          /*
            css兼容性: postcss==> postcss-loader postcss-preset-env
          */
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
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
  }
}

