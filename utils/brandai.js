const fs = require('fs-extra');
const download = require('download');

download('https://assets.brand.ai/rei/digital-rei-brand/_style-params.css?key=SyQifqFje').then((data) => {
  fs.writeFileSync('src/css/settings/brandai.pcss', data);
});
