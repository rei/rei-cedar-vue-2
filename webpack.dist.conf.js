const path = require('path');
const utils = require('./build/utils');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./config');
const baseWebpackConfig = require('./webpack.common.conf');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const env = config.build.env;

const webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true,
    }),
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   sourceMap: true,
    // }),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/cedar-components.[contenthash].css'),
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
      },
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, '../node_modules')) === 0
        );
      },
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*'],
      },
    ]),
  ],
});

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin') //eslint-disable-line

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(`\\.(${config.build.productionGzipExtensions.join('|')})$`),
      threshold: 10240,
      minRatio: 0.8,
    }),
  );
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; //eslint-disable-line
  webpackConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = webpackConfig;
