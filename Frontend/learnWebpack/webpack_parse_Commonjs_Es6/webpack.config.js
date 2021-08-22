const path = require('path')
module.exports = {
  context: __dirname,
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
      path: path.join(__dirname, './dist'),
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              use: ['babel-loader'],
              exclude: /node_modules/,
          }
      ]
  }
}
