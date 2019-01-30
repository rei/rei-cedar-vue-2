const process = require('process');
const createResolver = require('postcss-import-webpack-resolver');
const webpackConfig = require('./build/webpack.base.conf.js');

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {
      resolve: createResolver({
        // use aliases defined in webpack config
        alias: webpackConfig.resolve.alias,
        // include where to look for modules
        modules: ['node_modules'],
      }),
    },
    'postcss-strip-inline-comments': {},
    'postcss-sassy-mixins': {},
    'postcss-simple-vars': {},
    'postcss-calc': {},
    'postcss-nested': {},
    'postcss-media-minmax': {},
    'postcss-custom-media': {},
    'postcss-pxtorem': {
      rootValue: 10,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [/^html$/],
      mediaQuery: false,
      minPixelValue: 0,
    },
    'postcss-inline-svg': {
      // for correct paths during component-only css creation
      path: process.env.NODE_ENV === 'css' ? './src/components/button/styles/' : '',
    },
    ...(process.env.NODE_ENV === 'css' ? {
      'postcss-modules': {
        getJSON: () => { },
        generateScopedName: '[local]',
      },
    } : {}),
    autoprefixer: {},
    cssnano: {
      discardUnused: { fontFace: false },
    },
  },
};
