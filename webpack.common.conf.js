const path = require('path');
const utils = require('./build/utils');
const vueLoaderConfig = require('./build/vue-loader.conf');
// const config = require('./config');
// const mainPostConfig = require('../build/mainPost.conf.js');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': './src',
    },
    modules: [
      path.join(__dirname, '../node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('tests')],
        options: {
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
        use: 'postcss-loader',
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
