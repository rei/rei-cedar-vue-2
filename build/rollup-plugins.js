import path from 'path';
import process from 'process';
import commonjs from 'rollup-plugin-commonjs';
import alias from '@rollup/plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-styles';
import copyPlugin from 'rollup-plugin-copy';
import vue from 'rollup-plugin-vue';
import babel from '@rollup/plugin-babel';
import postcssImport from 'postcss-import';
import packageJson from '../package.json';

const env = process.env.NODE_ENV;

function resolve(dir) {
  return path.join(__dirname, dir);
}

function generateScopedName(name, filename, css) {
  // don't scope anything in the `css/main.scss` (reset, utils, type, etc.)
  if (filename.match(/main\.scss/) || env === 'test') return name;
  // scope classes for components
  return `${name}_${packageJson.version.replace(/\./g, '-')}`;
}

// plugin configs
let postcssMode = 'inject';
let copyOutput = 'public';
const copyTargets = [
  { src: 'static/star-null.svg', dest: 'dist/svg' },
  { src: 'static/star-0.svg', dest: 'dist/svg' },
  { src: 'static/star-25.svg', dest: 'dist/svg' },
  { src: 'static/star-50.svg', dest: 'dist/svg' },
  { src: 'static/star-75.svg', dest: 'dist/svg' },
  { src: 'static/star-100.svg', dest: 'dist/svg' },
  { src: 'static/icon-error.svg', dest: 'dist/svg' },
];

// prod only options
if (env === 'prod') {
  postcssMode = ['extract', './cedar-compiled.css'];
  copyOutput = 'dist';
}

// dev and prod options
if (env !== 'test') {
  copyTargets.push(
    {
      src: 'static/cdr-fonts.css',
      dest: `${copyOutput}`,
    }
  );
}

const plugins = [
  (env == 'test' || env == 'dev') && alias({
    entries: {
      srcdir: resolve('src'),
      cssdir: resolve('src/css'),
      assetsdir: resolve('src/assets'),
      componentsdir: resolve('src/components'),
      mixinsdir: resolve('src/mixins'),
    },
    customResolver: nodeResolve({
      extensions: ['.json', '.js', '.jsx', '.scss', '.vue'],
    }),
  }),
  nodeResolve({
    mainFields: ['module', 'jsnext:main', 'main'],
    extensions: ['.mjs', '.js', '.jsx', '.json'],
  }),
  env !== 'prod' && vue({
    style: {
      postcssModulesOptions: {
        generateScopedName,
      },
    },
    data: {
      // this gets prepended in all components <style>
      scss() {
        return `$cdr-warn: false;
        @import "${resolve('node_modules/@rei/cdr-tokens/dist/scss/cdr-tokens.scss')}";
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
    plugins: [postcssImport({
      // For cedar-compiled build, strip out `@import url()`
      //           as dependencies will already be compiled.
      resolve: function(id, basedir, importOptions)  {
        return resolve('build/noop.css');
      },
    })],
    mode: postcssMode,
    extensions: ['.scss', '.css'],
    sourceMap: env === 'dev' ? 'inline' : false,
    modules: {
      generateScopedName,
    },
  }),
  babel({
    exclude: 'node_modules/**',
  }),
  commonjs({
      extensions: ['.js', '.jsx']
  }),
  copyPlugin({
    targets: copyTargets,
  }),
];

export default plugins.filter(x => x);
