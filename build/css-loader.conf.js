var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

isProduction = false;
if (process.env.NODE_ENV === 'production') {
  var isProduction = true;
}

var defaultCssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    minimize: process.env.NODE_ENV === 'production',
    sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
  }
}

var moduleCssLoader = Object.assign({}, defaultCssLoader, {
  options: {
    modules: true,
    getLocalIdent: (context, localIdentName, localName, options) => {
      const pkg = require(`${context.context}/package.json`);
      // 'className_version'
      return `${localName}_${pkg.version}`;
    }
  }
})

function genModuleLoaders(isModule) {
  const cssLoader = isModule ? moduleCssLoader : defaultCssLoader

  if(isProduction) {
    return ExtractTextPlugin.extract({
      use: [
        cssLoader,
        {loader:'postcss-loader', options: {sourceMap: true}},
      ],
      fallback: 'vue-style-loader'
    });
  }

  return [
    'vue-style-loader',
    cssLoader,
    {loader:'postcss-loader', options: {sourceMap: true}},
  ]
};

exports.moduleLoaders = genModuleLoaders(true);
exports.defaultLoaders = genModuleLoaders(false);
