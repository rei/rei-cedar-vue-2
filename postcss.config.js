const process = require('process');

module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-calc': { mediaQueries: true },
    'postcss-pxtorem': {
      // change
      rootValue: 10,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [/^html$/],
      mediaQuery: false,
      minPixelValue: 0,
    },
    'postcss-inline-svg': {
      // paths are relative to root
      path: process.cwd(),
    },
    autoprefixer: {},
    // cssnano: {
    //   discardUnused: { fontFace: false },
    // },
  },
};
