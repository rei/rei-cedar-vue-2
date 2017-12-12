#!/usr/bin/env/ node

const fs = require('fs-extra');
const download = require('download');
const glob = require('glob');
const path = require('path');
const SVGSpriter = require('svg-sprite');

const iconConfig = [
  {
    prefix: 'rei',
    url: 'https://assets.brand.ai/rei-digital-experience-team/digital-rei-brand/icons.zip?key=rJf4Z1nS7Z',
  },
  {
    prefix: 'ea',
    url: 'https://assets.brand.ai/rei-digital-experience-team/expert-advice/icons.zip?key=ByGZB6RRzW',
  },
];

const basePath = 'src/assets/icons';
// clean directory
fs.emptyDirSync(basePath);

// fetch icon/build sprite for each iconConfig definition
iconConfig.forEach((iconObj) => {
  const iconPath = `${basePath}/${iconObj.prefix}`;
  const spriterConfig = {
    dest: './static/',
    mode: {
      symbol: {
        dest: '.',
        sprite: `./${iconObj.prefix}-icons.svg`,
      },
    },
  };

  // fetch icons and create sprite
  download(iconObj.url, iconPath, { extract: true }).then(() => {
    const spriter = new SVGSpriter(spriterConfig);
    const files = glob.sync(`./${basePath}/${iconObj.prefix}/*.svg`);
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
  });
});

