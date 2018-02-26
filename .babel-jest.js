/*
This file is for resolving the webpack aliases in jest tests.

Without setting the paths here, it fails to resolve imports in the SFCs.
*/

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  'plugins': [
    [require('babel-plugin-module-resolver'), {
        'alias': {
          'Src': resolve('src'),
          'Css': resolve('src/css'),
          'Assets': resolve('src/assets'),
          'Components': resolve('src/components'),
          'Compositions': resolve('src/compositions'),
          'Directives': resolve('src/directives'),
          'Mixins': resolve('src/mixins'),
      }
    }]
  ]
}
