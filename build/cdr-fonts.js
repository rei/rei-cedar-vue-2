const sass = require('node-sass');
const packageImporter = require('node-sass-package-importer');
const fs = require('fs-extra');

sass.render({
  file: `./src/css/fonts.scss`,
  // outputStyle: 'compressed',
  importer: packageImporter(),
}, (err, result) => {
  if (err) console.log('error:', err);
  else {
    fs.outputFileSync('./static/cdr-fonts.css', result.css.toString(), 'utf-8');
    console.log('Succesfully built static/cdr-fonts.css');
  }
})
