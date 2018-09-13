const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

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
				use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
    }),
    new CompressionPlugin({
      // serve .gz file in server side
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}
