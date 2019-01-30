const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const path = require('path');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')



function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?noInfo=true&reload=true',
    path.resolve(__dirname, '../src/dev.js')
  ],
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new StyleLintPlugin({
      files: ['**/*.postcss', '**/*.pcss', '**/*.vue'],
    }),
    new FriendlyErrorsPlugin(),
  ]
})
