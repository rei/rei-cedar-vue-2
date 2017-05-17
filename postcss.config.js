module.exports = {
  parser: 'postcss-scss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {},
    // 'postcss-comment': {},
    'postcss-pxtorem': {
      rootValue: 10,
    },
  },
  // plugins: [
  //   require('postcss-import')({ /* ...options */ }),
  //   require('postcss-cssnext')({ /* ...options */ }),
  //   require('postcss-pxtorem')({
  //     rootValue: 10,
  //   }),
  // ],
};
