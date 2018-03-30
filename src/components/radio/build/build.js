const build = require('../../../../build/component-build');
const info = require('../package.json');

/*
Externalize other cdr-* packages

This assumes packages are listed as peerDependencies so they don't need to be bundled in
*/
const compWebpack = {
  externals: [
    /^@rei\/cdr-/,
    /^lodash/,
  ],
};

build(info, {}, compWebpack);
