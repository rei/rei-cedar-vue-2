var config = require('../config')
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

// turn resourceQuery into an object
function getQueryObj(query='') {
  const qObj = {};
  const pairs = (query[0] === '?' ? query.substr(1) : query).split('&');
  for (let i = 0, j = pairs.length; i < j; i++) {
    let pair = pairs[i].split('=');
    qObj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return qObj;
};

let isProduction = false;
if (process.env.NODE_ENV === 'production') {
  isProduction = true;
}

const defaultCssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
  }
}

const moduleCssLoader = Object.assign({}, defaultCssLoader, {
  options: {
    modules: true,
    getLocalIdent: (context, localIdentName, localName, options) => {
      const pkg = require(`${context.context}/package.json`);
      // const qObj = getQueryObj(context.resourceQuery); Re-add if doing module="x" and want to add it to the class
      // 'className_version'
      return `${localName}_${pkg.version}`;
    }
  }
})

function genModuleLoaders(isModule) {
  const cssLoader = isModule ? moduleCssLoader : defaultCssLoader

  if(isProduction) {
    return [
        MiniCssExtractPlugin.loader,
        cssLoader,
        {loader:'postcss-loader', options: {sourceMap: true}},
      ]
  }

  return [
    'vue-style-loader',
    cssLoader,
    {loader:'postcss-loader', options: {sourceMap: true}},
  ]
};

exports.moduleLoaders = genModuleLoaders(true);
exports.defaultLoaders = genModuleLoaders(false);
