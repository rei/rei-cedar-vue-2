const fs = require('fs-extra');
const download = require('download');

download('https://assets.brand.ai/rei-digital-experience-team/digital-rei-brand/style-params.less?key=rJf4Z1nS7Z').then((data) => {
  fs.writeFileSync('src/less/themes/default/settings/brandai.less', data);
});

