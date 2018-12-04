const postcss = require('postcss')
const postcssrc = require('postcss-load-config')
const glob = require('glob-promise')
const concat = require('concat')
const fs = require('fs-extra')

async function getVars() {
  return await glob('src/*(components|compositions)/**/*.vars.pcss', { ignore: ['./src/**/node_modules/**'] }, (err, files) => {
    if (err) {
      console.log('Error!');
      console.log(err);
    }

    return files;
  })
}

async function getCss() {
  return glob('src/*(components|compositions)/**/!(*.vars).pcss', { ignore: ['./src/**/node_modules/**'] }, (err, files) => {
    if (err) {
      console.log('Error!');
      console.log(err);
    }

    return files;
  })
}

async function main() {
  const cssVars = await getVars();
  const cssFiles = await getCss();
  const cssFileArr = cssVars.concat(cssFiles);
  const pcss = await concat(cssFileArr);
  const fullPcss = `@import 'cssdir/settings/_index.pcss';
${pcss}`;

  postcssrc().then(({ plugins, options }) => {
    options.from = undefined;
    postcss(plugins)
      .process(fullPcss, options)
      .then((result) => {
        fs.outputFileSync('styles/components.css', result.css);
      })
  })
}

main();
