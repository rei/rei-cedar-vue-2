const sassdoc = require('sassdoc');
const sass = require('node-sass');
const packageImporter = require('node-sass-package-importer');
const fs = require('fs-extra');
const _ = require('lodash');

// compile the css (so things like loops get all of their classes)
const result = sass.renderSync({
  importer: packageImporter(),
  file: './src/css/main.scss',
});
// strip comments indicators, but leave sassdoc content formatted
const compiledCss = result.css.toString().replace(/(?:\/\*)((.|[\r\n])*?)(?:\*\/)/g, (a, b) => b.replace(/^ +/gm, '').trim());

// save compiled output to temp file
fs.outputFileSync('./src/css/tmp.scss', compiledCss);

sassdoc.parse('./src/css/tmp.scss', {
  verbose: true,
})
  .then((data) => {
    let final = {};

    data.map((o) => {
      const objClone = o;
      const groupKeys = objClone.group[0].split('|');
      groupKeys.push(o.context.name);

      objClone.description = o.description.trim();

      const res = groupKeys.reduceRight((value, key) => ({ [key]: value }), objClone);
      final = _.merge(final, res);
    });

    // TODO: change output path to dist
    fs.outputFileSync('./cssdocdata.json', JSON.stringify(final, null, 2));
    fs.removeSync('./src/css/tmp.scss');
  });
