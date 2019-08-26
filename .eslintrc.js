// http://eslint.org/docs/user-guide/configuring
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  root: true,
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
  plugins: [
    'vue',
    'tree-shaking',
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      // matches aliases from build/rollup-plugins.js
      alias: {
        map: [
          ['srcdir', resolve('src')],
          ['cssdir', resolve('src/css')],
          ['assetsdir', resolve('src/assets')],
          ['componentsdir', resolve('src/components')],
          ['compositionsdir', resolve('src/compositions')],
          ['directivesdir', resolve('src/directives')],
          ['mixinsdir', resolve('src/mixins')],
        ],
        extensions: ['.vue', '.json', '.js', '.jsx']
      },
    },
  },
  // add custom rules or overrides here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
      vue: 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/require-default-prop': 0,
    'vue/attributes-order': 0,
    'max-len': ['error', {
      'code': 100,
      'ignoreComments': true,
      'ignoreTrailingComments': true
    }],
    'vue/multiline-html-element-content-newline': 0,
  }
}
