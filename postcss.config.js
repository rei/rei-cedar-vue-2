module.exports = {
  parser: 'postcss-html',
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {},
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
      selectorBlackList: [/^html$/],
    },
    'postcss-inline-svg': {},
    autoprefixer: {},
    cssnano: {},
  },
};
