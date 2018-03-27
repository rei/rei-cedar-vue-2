process.env.NODE_ENV = 'production';

// packages
const rm = require('rimraf');
const webpack = require('webpack');
const merge = require('webpack-merge');
const chalk = require('chalk');
const _ = require('lodash');

// webpack packages and configs
const baseConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// config
const config = {
  outDir: 'dist',
};

/**
 * Assumes the directory has 2 files -- main.js and main-plugin.js
 * 
 * @param {String} dir -- cwd of component
 * @param {String} name -- component name (kebab-case)
 * @param {Object} opts -- webpack config
 */
function createWebpackConfig(dir, name, opts) {
  const pascalName = _.upperFirst(_.camelCase(name));

  // COMPONENT WEBPACK CONFIG
  const compConfig = merge(baseConfig, {
    entry: {
      [`${name}`]: `${dir}/main.js`,
      plugin: `${dir}/main-plugin.js`
    },
    output: {
      path: `${dir}/${config.outDir}`,
      filename: '[name].js',
      library: pascalName,
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.postcss', '**/*.pcss', '**/*.vue']
      }),
      new UglifyJsPlugin(),
      new ExtractTextPlugin(`${name}.css`),
      new CopyWebpackPlugin([
        {
          from: `${dir}/styles/themes/*`,
          to: `${dir}/dist`,
          flatten: true,
        }
      ]),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true,
        }
      })
    ]
  });

  return merge(compConfig, opts);
}


/**
 * Component build function
 * @param {Object} info -- package.json
 * @param {Object} opts -- webpack config that will be merged in createWebpackConfig()
 */
function build(info, opts={}) {
  const dir = process.cwd();
  const [org, name] = info.name.split('/');
  const outputPath = `${dir}/${config.outDir}`;

  console.log(chalk.cyan(`Building ${name}...\n`));

  rm(
    outputPath,
    (err) => {
      if (err) throw err;
      webpack(createWebpackConfig(dir, name, opts), (err2, stats) => {
        if (err2) throw err2;
        process.stdout.write(`${stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false,
        })}\n\n`);
        console.log(chalk.cyan(`Build of ${name} complete.\n`));
      });
    }
  );
}

module.exports = build;