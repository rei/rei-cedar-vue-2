module.exports = {
  parser: 'postcss-scss', // for stripping comments from brand.ai css
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'postcss-responsive-type': {},
    'postcss-pxtorem': {
      rootValue: 10,
    },
    'postcss-inline-svg': {},
  },
};
