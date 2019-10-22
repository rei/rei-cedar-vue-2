const sass = require('node-sass');
const tildeImporter = require('node-sass-package-importer');
const fs = require('fs-extra');
const chalk = require('chalk');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');

const files = ['utilities', 'reset'];

files.forEach((file) => {
  sass.render({
    file: `./src/css/${file}.scss`,
    outputStyle: 'compressed',
    importer: tildeImporter(),
  }, function(err, result) {
    if (err) {
      console.log(chalk.red('error!', err));
    } else {
      postcssrc().then(({ plugins, options }) => {
        postcss(plugins)
        .process(result.css, options)
        .then((result) => {
          fs.outputFile(`./dist/${file}.css`, result, function(err) {
            if (!err) {
              console.log(chalk.green(`success! created dist/${file}.css`));
            }
          });
        });
      });
    }
  });
});
