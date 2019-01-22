process.env.NODE_ENV = 'production';

// packages
const rm = require('rimraf');
const webpack = require('webpack');
const merge = require('webpack-merge');
const chalk = require('chalk');
const _ = require('lodash');

// webpack packages and configs
const baseConfig = require('./webpack.base.conf');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// config
const config = {
  outDir: 'dist',
};

/**
 * Assumes the directory has 2 files -- main.js and plugin.js
 * 
 * @param {String} dir -- cwd of component
 * @param {String} name -- component name (kebab-case)
 * @param {Object} sharedOpts -- webpack config options for BOTH plugin/main
 * @param {Object} compOpts -- webpack config options for main
 * @param {Object} pluginOpts -- webpack config options for plugin
 * 
 * Returns array. Multiple webpack configs.
 */
function createWebpackConfig(dir, name, sharedOpts, compOpts, pluginOpts) {
  const pascalName = _.upperFirst(_.camelCase(name));

  // SHARED WEBPACK CONFIG
  let sharedConfig = merge(baseConfig, {
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
      // new CopyWebpackPlugin([
      //   {
      //     from: `${dir}/styles/themes/*`,
      //     to: `${dir}/dist`,
      //     flatten: true,
      //   }
      // ]),
      new OptimizeCSSPlugin({
        cssProcessorOptions: {
          safe: true,
        }
      })
    ]
  });
  sharedConfig = merge(sharedConfig, sharedOpts);

  // COMPONENT CONFIG
  let compConfig = merge(sharedConfig, {
    entry: {
      [`${name}`]: `${dir}/build/main.js`,
    },
  });
  compConfig = merge(compConfig, compOpts);

  // PLUGIN CONFIG
  let pluginConfig = merge(sharedConfig, {
    entry: {
      plugin: `${dir}/build/plugin.js`
    },
  });
  pluginConfig = merge(pluginConfig, pluginOpts);

  return [compConfig, pluginConfig];
}


/**
 * Component build function
 * @param {Object} info -- package.json
 * @param {Object} sharedOpts -- webpack config for BOTH plugin/main that will be used in createWebpackConfig()
 * @param {Object} compOpts -- webpack config for main that will be used in createWebpackConfig()
 * @param {Object} pluginOpts -- webpack config for plugin that will be used in createWebpackConfig()
 */
function build(info, sharedOpts={}, compOpts={}, pluginOpts={}) {
  const dir = process.cwd();
  const [org, name] = info.name.split('/');
  const outputPath = `${dir}/${config.outDir}`;

  console.log(chalk.cyan(`Building ${name}...\n`));
  return new Promise((resolve, reject)=>{
    rm(
      outputPath,
      (err) => {
        if (err) {
          // throw err
          reject(err);
        }
        webpack(createWebpackConfig(dir, name, sharedOpts, compOpts, pluginOpts), (err2, stats) => {
          if (err2) {
            // throw err2;
            reject(err2);
          }
          stats.stats.forEach(stat => {
            process.stdout.write(`${stat.toString({
              colors: true,
              modules: false,
              children: false,
              chunks: false,
              chunkModules: false,
            })}\n\n`);
          })
          console.log(chalk.cyan(`Build of ${name} complete.\n`));
          resolve();
        });
      }
    );

  });

}

module.exports = build;