var utils = require('./utils')
var config = require('../config')

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'release') {
  var isProduction = true;
} else {
  var isProduction = false;
}

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  cssModules: {
    localIdentName: '[local]-[hash:base64:5]',
    camelCase: true
  }
}
