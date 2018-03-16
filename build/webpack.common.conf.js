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
      srcdir: resolve('src'),
      cssdir: resolve('src/css'),
      assetsdir: resolve('src/assets'),
      componentsdir: resolve('src/components'),
      compositionsdir: resolve('src/compositions'),
      directivesdir: resolve('src/directives'),
      mixinsdir: resolve('src/mixins'),
    },
    extensions: ['.js', '.vue', '.json'],
  },
  resolveLoader: { 
    alias: { 
      'cedar-theme-loader': resolve('utils/themeLoader.js'),
    } 
  }, 
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        exclude: /(node_modules|dist)/,
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
            loader: 'cedar-theme-loader',
            options: {
              isDev: process.env.NODE_ENV === 'development' ? true : false,
            }
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: [
          /(node_modules)/,
          /(dist)/
        ],
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
