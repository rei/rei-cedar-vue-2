/* eslint-disable */

module.exports = function (api) {

  const env = process.env.NODE_ENV;
  const babelEnv = process.env.BABEL_ENV;

  api.cache(true);

  // TODO: refactor to use babel `env` API here instead

  const targets = env === 'test' ?
  {
    node: 'current',
  } :
  {
    browsers: [
      'Chrome >= 70',
      'Firefox > 64',
      'iOS > 11',
      'Safari >= 9',
      'Explorer >= 11',
      'Edge >= 15',
    ],
  }; // TODO: pull @rei browserslist instead

  const presetEnvConfig = (env === 'prod') ?
  {
    modules: false, // TODO: cjs settings?
  } :
  {
    targets
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
        "useESModules": babelEnv === 'esm',
      }
    ]
  ];

  return {
    presets,
    plugins,
  };
}
