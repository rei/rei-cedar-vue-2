const path = require('path');
// const config = require('../../../../config');
// const utils = require('../../../../build/utils');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: {
    'rei-cdr-a': resolve('plugin.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: path.posix.join('static', 'js/[name].js'),
    chunkFilename: path.posix.join('static', 'js/[id].[chunkhash].js'),
    libraryTarget: 'umd',
    library: 'CdrAnchor',
    umdNamedDefine: true,
    //   publicPath: path.resolve(__dirname, (process.env.NODE_ENV === 'production'
    //     ? config.build.assetsPublicPath
    //     : config.dev.assetsPublicPath)),
    //   path: path.resolve(__dirname, config.build.assetsRoot),
    //   filename: utils.assetsPath('js/[name].[chunkhash].js'),
    //   chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
  },
  // plugins: [
  //   // generate dist index.html with correct asset hash for caching.
  //   // you can customize output by editing /index.html
  //   // see https://github.com/ampedandwired/html-webpack-plugin
  //   new HtmlWebpackPlugin({
  //     filename: process.env.NODE_ENV === 'testing'
  //       ? 'index.html'
  //       : config.build.index,
  //     template: 'index.html',
  //     inject: true,
  //     minify: {
  //       removeComments: true,
  //       collapseWhitespace: true,
  //       removeAttributeQuotes: true,
  //       // more options:
  //       // https://github.com/kangax/html-minifier#options-quick-reference
  //     },
  //     // necessary to consistently work with multiple chunks via CommonsChunkPlugin
  //     chunksSortMode: 'dependency',
  //   }),
  // ],
};
