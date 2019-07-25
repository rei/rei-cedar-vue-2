import path from 'path';
import process from 'process';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import jsonPlugin from 'rollup-plugin-json';
import postcss from 'rollup-plugin-postcss';
import copyPlugin from 'rollup-plugin-copy';
import _ from 'lodash';
import packageJson from '../package.json';

function resolve(dir) {
  return path.join(__dirname, dir);
}

const env = process.env.NODE_ENV;


export default function (opts) {
  // opts { cjs: boolean, esm: boolean, dev: boolean, test: boolean}
  // plugin configs
  let postcssExtract = false;
  let copyTargets = [''];
  let SSROptimize = false;
  let copyOutput = 'public';

  // prod only options
  if (env === 'prod') {
    postcssExtract = 'dist/cedar.css';
    copyOutput = 'dist';
  }

  // if (opts.esm) {
  //   postcssExtract = 'junk.css'
  // }

  // dev and prod options
  if (env !== 'test') {
    copyTargets = ['static/cdr-fonts.css'];
  }

  const plugins = [
    alias({
      resolve: ['.vue', '.json', '.js'],
      srcdir: resolve('src'),
      cssdir: resolve('src/css'),
      assetsdir: resolve('src/assets'),
      componentsdir: resolve('src/components'),
      compositionsdir: resolve('src/compositions'),
      directivesdir: resolve('src/directives'),
      mixinsdir: resolve('src/mixins'),
    }),
    nodeResolve({
      mainFields: ['module', 'jsnext:main', 'main'],
      extensions: ['.mjs', '.js', '.jsx', '.json', '.css'],
    }),
    vue({
      css: false,
      style: {
        // postcssCleanOptions: { disabled: true },
        postcssModulesOptions: {
          generateScopedName(name, filename, css) {
            // to preseve '@' in responsive class names
            return `${name}_${packageJson.version}`;
          },
        },
      },
      data: {
        // this gets prepended in all components <style>
        scss() {
          return `@import "${resolve('node_modules/@rei/cdr-tokens/dist/scss/cdr-tokens.scss')}";
          @import "${resolve('src/css/settings/_index.scss')}";`;
        },
      },
      template: {
        isProduction: env === 'prod',
      },
      styleInjector: `~${resolve('build/style-injector.mjs')}`,
    }),
    postcss({
      extract: postcssExtract,
      extensions: ['.scss', '.css'],
      sourceMap: env === 'dev' ? 'inline' : false,
      // minimize: true
    }),
    commonjs({
      include: /node_modules/
    }),
    copyPlugin({
      targets: copyTargets,
      outputFolder: copyOutput
    }),
  ];

  // TODO: dedupe this whole mess :~(
  // TODO: re-org our directory structure to make these transforms easier
  if (opts.cjs) {
    plugins.push(babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      externalHelpers: false,
      plugins: [
        ['transform-imports', {
          '@rei/cedar': {
            transform: (importName, matches) => {
              const compMatch = importName.match(/^Cdr(.+)/);
              const icoMatch = importName.match(/^Icon(.+)/);
              let dir;
              let path;
              if (compMatch) {
                dir = _.lowerFirst(compMatch[1])
                path = importName + '.vue'
              } else if (icoMatch){
                dir = `icon/comps`
                path = _.kebabCase(icoMatch[1]) + '.vue'
              } else {
                console.log('what', importName)
              }

              if (dir === 'row' || dir === 'col') {
                dir = 'grid'
              }

              return resolve(`src/components/${dir}/${path}`)
            },
            preventFullImport: true,
          }
        }]
      ]
    }))
  } else if (opts.test) {
    plugins.push(
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        presets: [
          [
            "@babel/preset-env",
            {
              corejs: "3",
              useBuiltIns: "usage",
            }
          ]
        ],
        plugins: [
          ['@babel/plugin-transform-runtime'], ['transform-imports', {
            '@rei/cedar': {
              transform: (importName, matches) => `${__dirname}/dist/${importName.toLowerCase()}/${importName}.esm.js`,
              preventFullImport: true,
            }
          }]
        ]
      }),
    );
  } else if (opts.dev) {
    plugins.push(
      replace({
        'process.env.NODE_ENV': JSON.stringify(true),
      }),
      jsonPlugin(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        presets: [
          [
            "@babel/preset-env",
            {
              corejs: "3",
              useBuiltIns: "usage",
            }
          ]
        ],
        plugins: [
          ['@babel/plugin-transform-runtime'], ['transform-imports', {
            '@rei/cedar': {
              transform: (importName, matches) => `${__dirname}/dist/${importName.toLowerCase()}/${importName}.esm.js`,
              preventFullImport: true,
            }
          }]
        ]
      }),
    );
    if (process.env.ROLLUP_WATCH) {
      plugins.push(
        serve({
          open: false,
          contentBase: 'public',
          port: 3000,
        }),
        livereload(),
      );
    }
  }


  return plugins.filter(x => x);
}
