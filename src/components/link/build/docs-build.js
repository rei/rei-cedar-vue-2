const docsBuild = require('../../../../build/component-docs-build');
const path = require('path');
const pkgInfo = require('../package.json');

const vueFilePath = path.resolve(__dirname, '..', `${process.env.npm_package_config_vue_file}.vue`);

docsBuild(vueFilePath, pkgInfo);
