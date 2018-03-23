#!/usr/bin/env/ node

const chalk = require('chalk');
const fs = require('fs-extra');
const klaw = require('klaw');
const through2 = require('through2');
const path = require('path');
const { exec } = require('child_process');

// core-css variables
const distDir = path.resolve(__dirname, 'dist');
const cssDir = path.resolve(__dirname, '..', 'css');
const staticDir = path.resolve(__dirname, '../..', 'static');

// Clean out the dist file
fs.emptyDirSync(distDir);

// Compile css
exec(`postcss ${cssDir}/main.postcss -o ${distDir}/cdr-core.css`, (err) => {
  if (err) throw err;
  console.log(chalk.green('Compiled cdr-core.css')); // eslint-disable-line no-console
});

// copy static files
fs.copySync(staticDir, distDir, {
  filter: (src) => {
    if (fs.lstatSync(src).isDirectory()) {
      return true;
    }
    const result = src.indexOf('.gitkeep') < 0;
    if (result) {
      console.log(chalk.green(`Copied ${src}`)); // eslint-disable-line no-console
      return true;
    }
    return false;
  },
});

// make icon index
const icons = {};

const onlySVG = through2.obj(function filterSVG(item, enc, next) {
  if (!item.stats.isDirectory() && path.extname(item.path) === '.svg') this.push(item);
  next();
});

klaw(path.resolve(__dirname, '..', 'assets/icons/rei'))
  .pipe(onlySVG)
  .on('data', (item) => {
    const name = path.basename(item.path).split('.')[0];
    fs.readFile(item.path, 'utf8', (err, data) => {
      if (err) throw err;

      Object.assign(icons, { [`${name}`]: data });
    });
  })
  .on('end', () => {
    fs.writeFile('./dist/icons.json', JSON.stringify(icons, null, '\t'), 'utf8', (err) => {
      if (err) throw err;
      console.log(chalk.green('Compiled icons.json'));// eslint-disable-line no-console
    });
  });
