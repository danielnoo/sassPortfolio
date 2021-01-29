const path = require('path')

//Import the HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  module: {
    rules: [
      { test: /\\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ]
  },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
    plugins: [
    new HtmlWebpackPlugin()
    ]
}