const fs = require('fs-extra');
const download = require('download');
const glob = require('glob');
const path = require('path');
const SVGSpriter = require('svg-sprite');

const iconPath = 'src/assets/icons';
const config = {
  dest: './static/',
  mode: {
    symbol: {
      dest: '.',
      sprite: './icon-sprite.svg',
    },
  },
};

// clean directory
fs.emptyDirSync(iconPath);

// fetch icons and create sprite
download('https://assets.brand.ai/rei-digital-experience-team/digital-rei-brand/icons.zip?key=SyQifqFje', iconPath, { extract: true }).then(() => {
  const spriter = new SVGSpriter(config);
  const files = glob.sync('./src/assets/icons/*.svg');
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
