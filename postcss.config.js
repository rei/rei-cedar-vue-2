module.exports = {
  parser: 'postcss-scss', // for stripping comments from brand.ai css
  plugins: {
    'postcss-import': {
      from: 'src/css/main.postcss',
    },
    // 'postcss-mixins': {},
    'postcss-simple-vars': {},
    // 'postcss-custom-properties': {},
    // 'postcss-apply': {},
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
