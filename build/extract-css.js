const sass = require('node-sass');
const tildeImporter = require('node-sass-package-importer');
const fs = require('fs-extra');
const glob = require('glob');
const chalk = require('chalk');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
const postcssModules = require('postcss-modules');
const _ = require('lodash');
const packageJson = require('../package.json')

const env = process.env.NODE_ENV;


buildCss({
  srcPath: './src/css/reset.scss',
  outPath: './dist/style/reset.css',
  scopeClasses: false,
});

const components = glob.sync('./src/components/**/styles/*.scss')
  .map((path) => {
    const componentName = path.split('/styles/')[1];
    const filename = _.kebabCase(componentName).replace('-scss', '.css');
    return {
      srcPath: path,
      outPath: `./dist/style/${filename}`,
      scopeClasses: true,
    }
  }
);

components.forEach(buildCss);

const outFile = [{outPath: './dist/style/reset.css'}]
  .concat(components)
  .map(createImport)
  .join('\n');

// cedar-full.css simply imports every Cedar component CSS file using `@import url()`,
// exported for convenience so that it can be imported in test/dev/prototype/internal
// projects rather than manually importing each Cedar CSS file,
// not intended for production!!
fs.outputFile('./dist/style/cedar-full.css', outFile, function(err) {
  if (!err) {
    console.log(chalk.green(`success! created cedar-full.css`));
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
              // scope classes for components. This function is duplicated in `./rollup-plugins.js`
              return `${name}_${packageJson.version.replace(/\./g, '-')}`;
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
