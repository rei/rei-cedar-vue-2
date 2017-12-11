const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

let cedarCategory;
if (process.env.npm_package_config_component) {
  cedarCategory = 'components';
} else if (process.env.npm_package_config_composition) {
  cedarCategory = 'compositions';
} else {
  cedarCategory = 'bundles';
}

const component = `${process.env.npm_package_config_component || process.env.npm_package_config_composition || process.env.npm_package_config_bundle}`;
const capComp = component.charAt(0).toUpperCase() + component.slice(1);
const tagName = process.env.npm_package_config_tagName;
const cedarPackageFolder = `/src/${cedarCategory}/${component}`;

console.log(`build config: ${process.env.npm_package_config_buildConfig}\n`);
console.log(`component: ${component}\n`);
console.log(`tag name: ${tagName}\n`);
console.log(`component folder name: ${cedarPackageFolder}\n`);

console.log(path.join(process.cwd(), 'node_modules'));

module.exports = {
  entry: {
    ['cdr-' + tagName]: path.resolve(__dirname, `..${cedarPackageFolder}/plugin.js`),
  },
  resolve: {
    modules: [path.join(process.cwd(), 'node_modules'), 'node_modules'],
  },
  output: {
    path: path.resolve(__dirname, `..${cedarPackageFolder}/dist`),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: `Cdr${capComp}`,
    umdNamedDefine: true,
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, `..${cedarPackageFolder}/styles/themes/*`),
        to: path.resolve(__dirname, `..${cedarPackageFolder}/dist`),
        flatten: true,
      }
    ])
  ]
};
