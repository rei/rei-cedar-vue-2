module.exports = {
  parser: 'postcss-html',
  syntax: 'postcss-scss',
  plugins: {
    'postcss-import': {
      from: 'src/css/main.postcss',
    },
    // 'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-calc': {},
    'postcss-nested': {},
    'postcss-media-minmax': {},
    'postcss-custom-media': {},
    'postcss-responsive-type': {},
    'postcss-pxtorem': {
      rootValue: 10,
    },
    'postcss-inline-svg': {},
    autoprefixer: {},
  },
};
