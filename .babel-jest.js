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
          'srcdir': resolve('src'),
          'cssdir': resolve('src/css'),
          'assetsdir': resolve('src/assets'),
          'componentsdir': resolve('src/components'),
          'compositionsdir': resolve('src/compositions'),
          'directivesdir': resolve('src/directives'),
          'mixinsdir': resolve('src/mixins'),
      }
    }]
  ]
}
