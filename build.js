process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const buildConfig = require(`./${process.env.npm_package_config_buildConfig}`);
const component = `${process.env.npm_package_config_component}`;
const capComp = component.charAt(0).toUpperCase() + component.slice(1);
const componentFolder = `/src/npm_components/${component}`;
const tagName = process.env.npm_package_config_tagName;

// console.log(`build config: ${buildConfig}\n`);
// console.log(`component: ${component}\n`);
// console.log(`tag name: ${tagName}\n`);
// console.log(`component folder name: ${componentFolder}\n`);

const componentConfig = {
  entry: {
    ['cdr-' + tagName]: path.resolve(__dirname, `.${componentFolder}/plugin.js`),
  },
  output: {
    path: path.resolve(__dirname, `.${componentFolder}/dist`),
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
        from: path.resolve(__dirname, './static'),
        to: path.resolve(__dirname, `.${componentFolder}/static`),
        ignore: ['.*'],
      },
    ]),
  ],
};

const webpackConfig = merge(buildConfig, componentConfig);

const spinner = ora(`building cdr-${tagName} for production...`);
spinner.start();

rm(
  path.resolve(__dirname, `.${componentFolder}/dist`),
  (err) => {
    if (err) throw err;
    webpack(webpackConfig, (err2, stats) => {
      spinner.stop();
      if (err2) throw err2;
      process.stdout.write(`${stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      })}\n\n`);

      console.log(chalk.cyan(`  Build of cdr-${tagName} complete.\n`));
    });
  }
);
