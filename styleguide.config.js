const ReplacePlugin = require('replace-bundle-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// Webpack configs
const devConfig = require('./build/webpack.dev.conf.js');
const prodConfig = require('./build/webpack.prod.conf.js');
// Index templates
const devIndex = './styleguide/dev-index.ejs';
const prodIndex = './styleguide/prod-index.ejs';

let webpConfig;
let indexTemplate;

// Set the correct values for dev vs prod environemnt
if (process.env.NODE_ENV === 'development') {
  delete devConfig.plugins;
  devConfig.plugins = [];
  // for replacing urls that are different between dev and gh-pages
  const rename = new ReplacePlugin([{
    partten: /\/static\//g, // requires this misspelling of 'pattern'
    replacement() {
      return '/';
    },
  }]);
  devConfig.plugins.push(rename);
  webpConfig = devConfig;

  indexTemplate = devIndex;// dev index.html
} else if (process.env.NODE_ENV === 'production') {
  // for replacing urls that are different between dev and gh-pages
  const rename = new ReplacePlugin([{
    partten: /\/static\//g, // requires this misspelling of 'pattern'
    replacement() {
      return '/rei-cedar/static/';
    },
  }]);
  prodConfig.plugins.push(rename);
  const clean = new CleanWebpackPlugin('dist-docs');
  prodConfig.plugins.push(clean);
  webpConfig = prodConfig;

  indexTemplate = prodIndex; // prod index.html
}

module.exports = {
  webpackConfig: webpConfig,
  require: [
    './src/cdr-assets/dist/cdr-core.css',
    // './src/css/main.postcss',
  ],
  ignore: [
    '**/examples/**',
    '**/testing/**', // ignore e2e testing example
    '**/node_modules/**',
    '**/src/components/buttonGroup/**/*.vue',
    '**/src/components/Utilities/**/*.vue',
  ],
  assetsDir: './static',
  styleguideDir: './dist-docs',
  template: indexTemplate,
  showUsage: true,
  contextDependencies: [
    './src/components',
    './src/compositions',
  ],
  sections: [
    {
      name: 'Utility Classes',
      content: 'src/css/README.md',
    },
    {
      name: 'Components',
      content: 'docs/Components.md',
      components: 'src/components/**/*.vue',
    },
    {
      name: 'Compositions',
      components: 'src/compositions/**/*.vue',
    },
  ],
};
