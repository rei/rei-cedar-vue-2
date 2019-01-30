/*
  Used with mocha-webpack for unit testing
*/

var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var nodeExternals = require('webpack-node-externals')

var webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  externals: [nodeExternals()],
  devtool: 'inline-cheap-module-source-map',
  output: {
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
  }
});

module.exports = webpackConfig
