const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const path = require('path');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.common.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

// Define entries here so we can bind hot reloading below
const entryObj = {
  'dev': path.resolve(__dirname, '../src/dev.js')
}

// add hot-reload related code to entry chunks
Object.keys(entryObj).forEach(function (name) {
  entryObj[name] = ['./build/dev-client'].concat(entryObj[name])
})

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = merge(baseWebpackConfig, {
  entry: entryObj,
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
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
      files: ['src/**/main.postcss', 'src/**/*.vue']
    }),
    new FriendlyErrorsPlugin(),
    new BrowserSyncPlugin(
      {
        // browse to http://localhost:3000/ during development 
        host: 'localhost',
        port: 3000,
        // proxy the dev server endpoint through BrowserSync 
        proxy: 'http://localhost:8080/'
      },
      {
        // prevent BrowserSync from reloading the page and let the dev server take care of this 
        reload: false
      }
    ),
  ]
})
