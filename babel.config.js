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
    'chrome': '87',
    'firefox': '86',
    'ios': '14',
    'safari': '12',
    'edge': '89',
  };

  const presetEnvConfig = (env === 'prod') ?
  {
    modules: false, // TODO: cjs settings?
    targets, // polyfill based on supported browsers
    corejs: 3, // use corejs@3 for polyfills
    useBuiltIns: 'usage', // polyfill based on usage in source code.
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

  return {
    presets,
  };
}
