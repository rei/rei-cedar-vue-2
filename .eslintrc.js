// http://eslint.org/docs/user-guide/configuring
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  root: true,
  // parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    // 'html',
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: resolve('build/webpack.common.conf.js'),
      }
    }
  },
  // add custom rules or overrides here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/require-default-prop': 0,
  }
}
