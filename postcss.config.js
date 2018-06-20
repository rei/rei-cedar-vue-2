const createResolver = require('postcss-import-webpack-resolver');
const webpackConfig = require('./build/webpack.base.conf.js');

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {
      resolve: createResolver({
        // use aliases defined in webpack config
        alias: webpackConfig.resolve.alias,
      }),
    },
    'postcss-strip-inline-comments': {},
    'postcss-sassy-mixins': {},
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
    cssnano: {
      discardUnused: { fontFace: false },
    },
  },
};
