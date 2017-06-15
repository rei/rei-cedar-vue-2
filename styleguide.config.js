const baseConfig = require('./build/webpack.base.conf.js');
const config = require('./config');
const merge = require('webpack-merge');
const utils = require('./build/utils');

module.exports = {
  components: './src/components/**/*.vue',
  webpackConfig: merge(baseConfig, {
    module: {
      rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }),
    },
  }),
  // webpackConfig: baseConfig,
};
