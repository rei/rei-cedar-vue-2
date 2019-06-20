const sass = require('node-sass');
const tildeImporter = require('node-sass-tilde-importer');
const fs = require('fs-extra');
const chalk = require('chalk');

const files = ['utilities', 'reset'];

files.forEach((file) => {
  sass.render({
    file: `./src/css/${file}.scss`,
    outputStyle: 'compressed',
    importer: tildeImporter,
  }, function(err, result) {
    if (err) {
      console.log(chalk.red('error!', err));
    } else {
      fs.outputFile(`./dist/${file}.css`, result.css, function(err) {
        if (!err) {
          console.log(chalk.green(`success! created dist/${file}.css`));
        }
      });
    }
  });
});
