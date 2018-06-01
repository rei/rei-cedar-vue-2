/*
  Used with mocha-webpack for unit testing
*/

var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var nodeExternals = require('webpack-node-externals')

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

var webpackConfig = merge(baseWebpackConfig, {
  entry: {
    'dev': path.resolve(__dirname, '../src/dev.js')
  },
  externals: [nodeExternals()],
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
})

module.exports = webpackConfig
