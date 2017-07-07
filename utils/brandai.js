const fs = require('fs-extra');
const download = require('download');

download('https://assets.brand.ai/rei-digital-experience-team/digital-rei-brand/_style-params.css?key=rJf4Z1nS7Z').then((data) => {
  fs.writeFileSync('src/css/settings/brandai.pcss', data);
});
