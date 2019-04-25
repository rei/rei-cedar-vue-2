/*
rollup bundles for cjs, esm
*/
import path from 'path';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import postcssScss from 'postcss-scss';
import stringHash from 'string-hash';

function resolve(dir) {
  return path.join(__dirname, dir);
}

const isDev = process.env.ROLLUP_WATCH;
console.log('isDev', isDev); /* eslint-disable-line */

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(isDev),
  }),
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
  vue({
    css: false,
    style: {
      postcssOptions: { syntax: postcssScss },
      postcssCleanOptions: { disabled: true },
      postcssModulesOptions: {
        generateScopedName(name, filename, css) {
          const hash = stringHash(css)
            .toString(36)
            .substr(0, 5);
          // to preseve '@' in responsive class names
          return `${name}-${hash}`;
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
      isProduction: false,
    },
  }),
  postcss({
    syntax: 'postcss-scss',
    extensions: ['.postcss', '.pcss', '.scss', '.css'],
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
  }),
];

const config = {
  input: 'src/components/_index.js',
  output: [
    {
      file: 'dist/cedar.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/cedar.esm.js',
      format: 'esm',
    },
  ],
  plugins,
};

export default config;
