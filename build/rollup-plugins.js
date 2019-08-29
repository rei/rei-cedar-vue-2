import path from 'path';
import process from 'process';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import copyPlugin from 'rollup-plugin-copy';
import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';
import packageJson from '../package.json';


function resolve(dir) {
  return path.join(__dirname, dir);
}

const env = process.env.NODE_ENV;

// plugin configs
let postcssExtract = false;
let copyTargets = [''];
let copyOutput = 'public';

// prod only options
if (env === 'prod') {
  postcssExtract = 'dist/cedar.css';
  copyOutput = 'dist';
}

// dev and prod options
if (env !== 'test') {
  copyTargets = ['static/cdr-fonts.css'];
}

if (env === 'dev') {
  copyTargets.push('dist/cedar.css')
}

const plugins = [
  (env == 'test' || env == 'dev') && alias({
    resolve: ['.json', '.js', '.jsx', '.scss', '.vue'],
    srcdir: resolve('src'),
    cssdir: resolve('src/css'),
    assetsdir: resolve('src/assets'),
    componentsdir: resolve('src/components'),
    mixinsdir: resolve('src/mixins'),
  }),
  nodeResolve({
    mainFields: ['module', 'jsnext:main', 'main'],
    extensions: ['.mjs', '.js', '.jsx', '.json'],
  }),
  env !== 'prod' &&  vue({
    style: {
      postcssModulesOptions: {
        generateScopedName(name, filename, css) {
          // to preseve '@' in responsive class names
          if (env === 'test') {
            return name;
          }
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
    config: true,
    plugins: [
      postcssImport()
    ],
    extract: postcssExtract,
    extensions: ['.scss', '.css'],
    sourceMap: env === 'dev' ? 'inline' : false,
    modules: {
      generateScopedName(name, filename, css) {
        // don't scope anything in the `css/main.scss` (reset, utils, type, etc.)
        if (filename.match(/main\.scss/) || env === 'test') return name;
        // scope classes for components
        return `${name}_${packageJson.version}`;
      },
    }
  }),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true, // ????
  }),
  commonjs({
      extensions: ['.js', '.jsx']
  }),
  copyPlugin({
    targets: copyTargets,
    outputFolder: copyOutput
  }),
];

export default plugins.filter(x => x);
