const path = require('path');
const utils = require('./utils');
const vueLoaderConfig = require('./vue-loader.conf');
const config = require('../config');
const mainPostConfig = require('./mainPost.conf.js');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      // '@': resolve('src'),
      Src: resolve('src'),
      Css: resolve('src/css'),
      Components: resolve('src/components')
    },
    extensions: ['.js', '.vue', '.json'],
    // modules: [
    //   path.join(__dirname, '../node_modules')
    // ]
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('tests')],
        options: {
          // configFile: resolve('.eslintrc.js'),
          formatter: require('eslint-friendly-formatter'), //eslint-disable-line
        },
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: vueLoaderConfig
          },
          {
            loader: 'vue-theme-loader',
            options: {
              theme: 'default',
            }
          }
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')],
      },
      {
        test: /\.(postcss|pcss)$/,
        include: [resolve('src/css')],
        use: mainPostConfig.loaders
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
        },
      },
    ],
  },
};
