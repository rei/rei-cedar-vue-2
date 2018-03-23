#!/usr/bin/env/ node

const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const SVGSpriter = require('svg-sprite');

// fetch icon/build sprite for each iconConfig definition
const spriterConfig = {
  dest: './static/',
  mode: {
    symbol: {
      dest: '.',
      sprite: './cdr-icons.svg',
    },
  },
};

// create sprite
const spriter = new SVGSpriter(spriterConfig);
const files = glob.sync('./src/assets/icons/rei/*.svg');
files.forEach((file) => {
  spriter.add(path.resolve(file), null, fs.readFileSync(file), { encoding: 'utf-8' });
});

spriter.compile((error, result) => {
  Object.keys(result).forEach((mode) => {
    Object.keys(result[mode]).forEach((resource) => {
      fs.outputFileSync(result[mode][resource].path, result[mode][resource].contents);
    });
  });
});

