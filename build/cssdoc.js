const sassdoc = require('sassdoc');
const sass = require('node-sass');
const packageImporter = require('node-sass-package-importer');
const fs = require('fs-extra');
const _ = require('lodash');


// compile the scss (so things like loops get all of their classes generated)
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
      const groupKeys = objClone.group[0].split('.');
      groupKeys.push(o.context.name);

      objClone.description = o.description.trim();

      // convert group "path" to nested object
      const res = groupKeys.reduceRight((value, key) => ({ [key]: value }), objClone);
      final = _.merge(final, res);
    });

    fs.outputFileSync('./dist/cssdocdata.json', JSON.stringify(final, null, 2));
    fs.removeSync('./src/css/tmp.scss');
  });
