/*
rollup bundles for cjs, esm
*/
import path from 'path';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import packageJson from './package.json';

function resolve(dir) {
  return path.join(__dirname, dir);
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
  nodeResolve(),
  vue({
    css: false,
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
      isProduction: true,
    },
  }),
  postcss({
    extract: 'dist/cedar.css',
    extensions: ['.scss', '.css'],
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
  }),
];

export default {
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
