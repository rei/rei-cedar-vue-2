/* eslint-disable */

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        corejs: "3",
        useBuiltIns: "usage",
      }
    ]
  ];
  const plugins = ['@babel/plugin-transform-runtime',
    ['transform-imports', {
        '@rei/cedar': {
          transform: (importName, matches) => `@rei/cedar/dist/${importName.toLowerCase()}/${importName}.esm.js`,
          preventFullImport: true,
        }
      }]
  ];

  return {
    presets,
    plugins
  };
}