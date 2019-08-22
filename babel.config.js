/* eslint-disable */

module.exports = function (api) {

  const env = process.env.NODE_ENV;

  api.cache(true);

  const presetEnvConfig = (env === 'prod') ?
  {
    modules: false, // TODO: cjs settings?
  } :
  {
    targets: {
      node: 'current',
    },
  }

  const presets = [
    [
      "@babel/preset-env",
      presetEnvConfig,
    ],
    "@vue/babel-preset-jsx"
  ];
  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 3,
      }
    ]
  ];

  return {
    presets,
    plugins
  };
}
