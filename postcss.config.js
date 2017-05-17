module.exports = {
  parser: 'postcss-scss', // for stripping comments from brand.ai css
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    'postcss-pxtorem': {
      rootValue: 10,
    },
  },
};
