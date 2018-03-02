const createResolver = require('postcss-import-webpack-resolver');
const webpackConfig = require('./build/webpack.common.conf.js');

module.exports = {
  parser: 'postcss-html',
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {
      resolve: createResolver({
        // use aliases defined in config
        alias: webpackConfig.resolve.alias,

        // include where to look for modules
        // modules: ['src', 'node_modules']
      })
    },
    'postcss-strip-inline-comments': {},
    'postcss-sassy-mixins': {}, // used to strip mixins from brand.ai
    'postcss-simple-vars': {},
    'postcss-calc': {},
    'postcss-nested': {},
    'postcss-media-minmax': {},
    'postcss-custom-media': {},
    'postcss-responsive-type': {},
    'postcss-pxtorem': {
      rootValue: 10,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [/^html$/],
      mediaQuery: false,
      minPixelValue: 0,
    },
    'postcss-inline-svg': {},
    autoprefixer: {},
    cssnano: {},
  },
};
