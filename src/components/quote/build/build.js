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
  extract(['CdrQuote'], info, `<cdr-quote>summary="Blockquote Summary:
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores
      odio fuga reiciendis blanditiis magni?"</cdr-quote>`);
});
