const path = require('path');
const utils = require('./utils');
const cssLoaderConfig = require('./css-loader.conf');
const config = require('../config');
const mainPostConfig = require('./mainPost.conf.js');
const { VueLoaderPlugin } = require('vue-loader');

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
        loader: 'vue-loader'
        // use: [
        //   {
        //     loader: 'vue-loader',
        //     // options: vueLoaderConfig
        //   },
        //   {
        //     loader: 'cedar-theme-loader',
        //     options: {
        //       isDev: process.env.NODE_ENV === 'development' ? true : false,
        //     }
        //   }
        // ],
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
        test: /\.(css|postcss|pcss)$/,
        oneOf: [
          // this matches <style module>
          {
            resourceQuery: /module/,
            use: cssLoaderConfig.moduleLoaders
          },
          // this matches plain <style> or <style scoped>
          {
            use: cssLoaderConfig.defaultLoaders
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: resolve('src/assets/icons'),
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
      {
        test: /\.(svg)(\?.*)?$/,
        loader: 'raw-loader',
        include: resolve('src/assets/icons'),
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
