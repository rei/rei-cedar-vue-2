import path from 'path';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import jsonPlugin from 'rollup-plugin-json';
import packageJson from '../package.json';

function resolve(dir) {
  return path.join(__dirname, dir);
}

const env = process.env.NODE_ENV;
let extractCss = false;

if (env !== 'test') {
  extractCss = env === 'dev' ? 'public/cedar.css' : 'dist/cedar.css';
}

console.log('extractCss', extractCss);

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
    css: env === 'test',
    style: {
      postcssCleanOptions: { disabled: true },
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
  }),
  postcss({
    extract: extractCss,
    // modules: {
    //   generateScopedName(name, filename, css) {
    //     // to preseve '@' in responsive class names
    //     return `${name}-${packageJson.version}`;
    //   },
    // },
    extensions: ['.scss', '.css'],
  }),
  commonjs(),
];

export default plugins;
