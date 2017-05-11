const fs = require('fs-extra');
const download = require('download');
const glob = require('glob');

const iconPath = 'src/assets/icons';

// clean directory
fs.emptyDirSync(iconPath);

// fetch icons and create sprite
download('https://assets.brand.ai/rei-digital-experience-team/digital-rei-brand/icons.zip?key=SyQifqFje', iconPath, { extract: true }).then(() => {
  const iconFiles = glob.sync('./src/assets/icons/*.svg');
  iconFiles.forEach((file) => {
    console.log(file);
  });
});
