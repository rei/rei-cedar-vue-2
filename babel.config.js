/* eslint-disable */

module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        // corejs: 3,
        // useBuiltIns: "usage",
        // modules: false,
        // "targets": {
        //   "node": "current"
        // }
      },
    ],
    "@vue/babel-preset-jsx"
  ];
  const plugins = [
    // "transform-vue-jsx",
    [
      "@babel/plugin-transform-runtime",
      {
        // "corejs": 3
      }
    ]
  ];

  return {
    presets,
    plugins
  };
}
