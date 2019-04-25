/*
rollup bundles for cjs, esm
*/
import path from 'path';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import replace from 'rollup-plugin-replace';
import livereload from 'rollup-plugin-livereload';
import stringHash from 'string-hash';

function resolve(dir) {
  return path.join(__dirname, dir);
}

export default {
  input: 'src/dev.js',
  output: {
    file: 'public/kitchen-sink.iife.js',
    format: 'iife',
    name: 'cedar',
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(true),
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
      extract: 'public/cedar.css',
      extensions: ['.scss', '.css'],
    }),
    commonjs(),
    serve({
      open: true,
      contentBase: 'public',
      port: 3000,
    }),
    livereload(),
  ],
  watch: {
    clearScreen: false,
  },
};
