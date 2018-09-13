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
				use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    historyApiFallback: true
  },
}
