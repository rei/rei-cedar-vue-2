const babelOptions = {
  presets: [
    [
      "@babel/preset-env",
      {
        corejs: "3",
        useBuiltIns: "usage",
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-transform-runtime'], ['transform-imports', {
      '@rei/cedar': {
        transform: (importName, matches) => `${__dirname}/dist/${importName.toLowerCase()}/${importName}.esm.js`,
        preventFullImport: true,
      }
    }]
  ]
};

module.exports = require('babel-jest').createTransformer(babelOptions);