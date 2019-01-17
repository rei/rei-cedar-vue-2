const build = require('../../../../build/component-build');
const extract = require('../../../../build/component-template-extract');
const info = require('../package.json');

/*
Externalize other cdr-* packages

This assumes packages are listed as peerDependencies so they don't need to be bundled in
*/
const compWebpack = {
  externals: /^@rei\/cdr-/,
};

build(info, {}, compWebpack).then(() => {
  extract(['CdrInput'], info, '<cdr-input label="Example Label">Example Text</cdr-input>');
});
