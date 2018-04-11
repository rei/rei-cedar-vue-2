#!/usr/bin/env/ node

const chalk = require('chalk');
const fs = require('fs-extra');
const klaw = require('klaw');
const through2 = require('through2');
const path = require('path');
const SVGSpriter = require('svg-sprite');
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

// make icon index and sprite
const icons = {};

const spriterConfig = {
  dest: './dist/',
  mode: {
    symbol: {
      dest: '.',
      sprite: 'cdr-icons.svg',
    },
  },
};

const spriter = new SVGSpriter(spriterConfig);

const onlySVG = through2.obj(function filterSVG(item, enc, next) {
  if (!item.stats.isDirectory() && path.extname(item.path) === '.svg') this.push(item);
  next();
});

// walk all icons
klaw(path.resolve(__dirname, '..', 'assets/icons/rei'))
  // filter to .svg (as a precaution)
  .pipe(onlySVG)
  .on('data', (item) => {
    const name = path.basename(item.path).split('.')[0];
    const iconFilePath = item.path;

    const data = fs.readFileSync(iconFilePath, 'utf8');
    // add to icon object
    Object.assign(icons, { [`${name}`]: data });
    // add to spriter
    spriter.add(iconFilePath, null, data);
  })
  .on('end', () => {
    // output icon.json
    fs.writeFile('./dist/icons.json', JSON.stringify(icons, null, '\t'), 'utf8', (err) => {
      if (err) throw err;
      console.log(chalk.green('Compiled icons.json'));// eslint-disable-line no-console
    });

    // output icon sprite
    spriter.compile((error, result) => {
      Object.keys(result).forEach((mode) => {
        Object.keys(result[mode]).forEach((resource) => {
          fs.outputFileSync(result[mode][resource].path, result[mode][resource].contents);
          console.log(chalk.green('Created icon sprite'));// eslint-disable-line no-console
        });
      });
    });
  });
