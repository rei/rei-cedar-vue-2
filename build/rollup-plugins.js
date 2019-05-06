import path from 'path';
import process from 'process';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import jsonPlugin from 'rollup-plugin-json';
import copyPlugin from 'rollup-plugin-copy';
import babel from 'rollup-plugin-babel';
import packageJson from '../package.json';

function resolve(dir) {
  return path.join(__dirname, dir);
}

const env = process.env.NODE_ENV;
const ssrEnv = process.env.SSR_ENV;

// plugin configs
let postcssExtract = false;
let copyTargets = [''];
let SSROptimize = false;

// prod only options
if (env === 'prod') {
  postcssExtract = 'dist/cedar.css';
}

// dev and prod options
if (env !== 'test') {
  copyTargets = ['static/cdr-fonts.css'];
  // SSR build
  if (ssrEnv === 'ssr') {
    SSROptimize = true;
  }
}

console.log('SSR', ssrEnv);
console.log('postcssExtract', postcssExtract);

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
  nodeResolve(),
  jsonPlugin(),
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
      optimizeSSR: SSROptimize,
    },
  }),
  postcss({
    extract: postcssExtract,
    extensions: ['.scss', '.css'],
    sourceMap: env === 'dev' ? 'inline' : false, 
  }),
  commonjs(),
  copyPlugin({
    targets: copyTargets,
  }),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
  }),
];

export default plugins;
