const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

const component = `${process.env.npm_package_config_component}`;
const capComp = component.charAt(0).toUpperCase() + component.slice(1);
const componentFolder = `/src/${(process.env.npm_package_config_composition) ? `compositions`:`components`}/${component}`;
const tagName = process.env.npm_package_config_tagName;

console.log(`build config: ${process.env.npm_package_config_buildConfig}\n`);
console.log(`component: ${component}\n`);
console.log(`tag name: ${tagName}\n`);
console.log(`component folder name: ${componentFolder}\n`);

module.exports = {
  entry: {
    ['cdr-' + tagName]: path.resolve(__dirname, `..${componentFolder}/plugin.js`),
  },
  output: {
    path: path.resolve(__dirname, `..${componentFolder}/dist`),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: `Cdr${capComp}`,
    umdNamedDefine: true,
  },
  plugins: [
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: 'index.ejs',
      tagName: `cdr-${tagName}`,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeAttributeQuotes: false,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: path.resolve(__dirname, `..${componentFolder}/static`),
        ignore: ['.*'],
      },
    ]),
  ],
};
