module.exports = {
  plugins: [
    require('postcss-import')({ /* ...options */ }),
    require('postcss-cssnext')({ /* ...options */ }),
    require('postcss-responsive-type')(),
    require('postcss-pxtorem')({
      rootValue: 10,
    }),
  ],
};
