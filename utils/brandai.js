#!/usr/bin/env/ node

const fs = require('fs-extra');
const download = require('download');

// TODO: get other variable files/file types

// eslint-disable-next-line
download('https://assets.brand.ai/rei-digital-experience-team/digital-rei-brand/_style-params.scss?key=rJf4Z1nS7Z').then((data) => {
  fs.writeFileSync('src/css/settings/brandai.pcss', data);
});
