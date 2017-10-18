process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const compStr = String(process.argv.component);
const capComp = compStr.charAt(0).toUpperCase() + compStr.slice(1);
const buildConfig = require(`./${process.argv[2]}`);
const componentFolder = `/src/npm_components/${process.argv[3]}`;

const componentConfig = {
  entry: {
    ['cdr-' + process.argv[4]]: path.resolve(__dirname, `.${componentFolder}/plugin.js`),
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
      tagName: `cdr-${process.argv[4]}`,
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

const spinner = ora(`building cdr-${process.argv[4]} for production...`);
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

      console.log(chalk.cyan(`  Build of cdr-${process.argv[4]} complete.\n`));
    });
  }
);
