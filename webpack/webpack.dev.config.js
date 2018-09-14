var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		path.join(__dirname, '../src/index.js') // get the absolute path of the index.js
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
				exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
				use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'less-loader' // compiles Less to CSS
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    disableHostCheck: true,
    historyApiFallback: true,
    compress: true,
    host: '0.0.0.0',
    port: 3000
  },
}
