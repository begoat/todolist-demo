const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractLess = new ExtractTextPlugin('style.[hash].css');
// https://webpack.docschina.org/loaders/less-loader/#src/components/Sidebar/Sidebar.jsx
// const extractLess = new ExtractTextPlugin({
//   filename: "[name].[contenthash].css",
//   disable: process.env.NODE_ENV === "development"
// });
const rsuiteStylePath = path.resolve(__dirname, '../node_modules/rsuite/styles');

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
        test: /\.(less|css)$/,
        loader: extractLess.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'less-loader',
              options: {
                javascriptEnabled: true
              }
            }
          ],
          // use style-loader in development
          fallback: 'style-loader?{attrs:{prop: "value"}}'
        })
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]'
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: 'bundle.js'
  },
  plugins: [
    extractLess,
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true
    }),
    // new CompressionPlugin({
    //   // serve .gz file in server side
    //   algorithm: 'gzip',
    //   test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ]
}
