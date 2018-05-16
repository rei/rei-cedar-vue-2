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
  entry: {
    'dev': path.resolve(__dirname, '../src/dev.js')
  },
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new webpack.NoEmitOnErrorsPlugin(),
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
