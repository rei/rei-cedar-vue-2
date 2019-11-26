const sass = require('node-sass');
const tildeImporter = require('node-sass-package-importer');
const fs = require('fs-extra');
const glob = require('glob');
const chalk = require('chalk');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
const postcssModules = require('postcss-modules');
const packageJson = require('../package.json')

const env = process.env.NODE_ENV;

buildCss({
  srcPath: './src/css/utilities.scss',
  outPath: './dist/utilities-compiled.css',
  scopeClasses: false,
});

buildCss({
  srcPath: './src/css/reset.scss',
  outPath: './dist/style/reset.css',
  scopeClasses: false,
});

// Create individual utility outputs
const utilities = glob.sync('./src/css/utility/*.scss')
  .map((path) => {
    const name = path.split('utility/_')[1];
    return {
      srcPath: path,
      outPath: `./dist/style/${name.replace('scss', 'css')}`,
      scopeClasses: false,
    }
  }
);

utilities.forEach(buildCss);
// Create utilities index file which imports all of the individual utility outputs
const utilsFile = utilities.map(createImport).join('\n');
fs.outputFile('./dist/style/utilities.css', utilsFile, function(err) {
  if (!err) {
    console.log(chalk.green(`success! created utilities.css`));
  }
});

const components = glob.sync('./src/components/**/styles/*.scss')
  .map((path) => {
    const name = path.split('/styles/')[1];
    return {
      srcPath: path,
      outPath: `./dist/style/${name.replace('scss', 'css')}`,
      scopeClasses: true,
    }
  }
);

components.forEach(buildCss);

const outFile = [{outPath: './dist/style/reset.css'}]
  .concat(utilities)
  .concat(components)
  .map(createImport)
  .join('\n');

fs.outputFile('./dist/style/cdr-full.css', outFile, function(err) {
  if (!err) {
    console.log(chalk.green(`success! created cdr-full.css`));
  }
});

function createImport(data) {
  return `@import url('${data.outPath.replace('.', '@rei/cedar')}');`
}

function buildCss({ srcPath, outPath, scopeClasses }) {
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
            },
            getJSON: function noop() {}
            // Passing a noop as getJSON makes it so postcss-modules does not output a JSON
            // representation of the transformed class names into the source folder.
            // This JSON data gets handled by the JS build and is not needed here.
          }))
        }
        options.from = srcPath; // enables source maps, browserlist, etc.
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
