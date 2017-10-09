process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const merge = require('webpack-merge');
const componentWebpackConfig = require('./component.conf');
const distWebpackConfig = require('../../../../webpack.dist.conf');

const webpackConfig = merge(distWebpackConfig, componentWebpackConfig);

const spinner = ora('building cdr-a for production...');
spinner.start();

rm(
  path.resolve(__dirname, '../dist/static'),
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

      console.log(chalk.cyan('  Build of cdr-a complete.\n'));
    });
  }
);
