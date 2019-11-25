const sass = require('node-sass');
const tildeImporter = require('node-sass-package-importer');
const fs = require('fs-extra');
const glob = require("glob");
const chalk = require('chalk');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
const postcssModules = require('postcss-modules');
const packageJson = require('../package.json')

const env = process.env.NODE_ENV;

const globals = ['reset', 'utilities'];
const components = glob.sync('./src/components/**/styles/*.scss');

const globalOutputs = globals.map((file) => buildCss(file, false));
const componentOutputs = components.map((file) => buildCss(file, true));
const outputs = globalOutputs.concat(componentOutputs);

const outFile = outputs.map(file => `@import url('${file.replace('.', '@rei/cedar')}');`).join('\n');

fs.outputFile('./dist/cdr-full.css', outFile, function(err) {
  if (!err) {
    console.log(chalk.green(`success! created cdr-full.css`));
  }
});

function buildCss(file, scopeClasses) {
  const srcPath = scopeClasses ?
    file :
    `./src/css/${file}.scss`;
    
  const outPath = scopeClasses ?
    `./dist/style/${file.split('/')[5].replace('scss', 'css')}` :
    `./dist/style/${file}.css`;

  sass.render({
    file: srcPath,
    outputStyle: 'compressed',
    importer: tildeImporter(),
  }, function(err, result) {
    if (err) {
      console.log(chalk.red('error!', err));
    } else {
      postcssrc().then(({ plugins, options }) => {
        if (scopeClasses) {
          plugins.push(postcssModules({
            generateScopedName: function (name) {
              // scope classes for components
              return `${name}_${packageJson.version}`;
            }
          }))
        }
        postcss(plugins)
        .process(result.css, options)
        .then((result) => {
          fs.outputFile(outPath, result, function(err) {
            if (!err) {
              console.log(chalk.green(`success! created ${outPath}`));
            }
          });
        });
      });
    }
  });
  
  return outPath;
}
