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
const componentConfig = require('./webpack.component.conf');

const component = `${process.env.npm_package_config_component}`;
const componentFolder = `/src/${(process.env.npm_package_config_composition) ? `compositions`:`components`}/${component}`;
const tagName = process.env.npm_package_config_tagName;

const webpackConfig = merge(buildConfig, componentConfig);

const spinner = ora(`building cdr-${tagName} for production...`);
spinner.start();

rm(
  path.resolve(__dirname, `..${componentFolder}/dist`),
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
