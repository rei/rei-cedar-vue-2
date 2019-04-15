/*
rollup bundles for cjs, esm
*/
import path from 'path';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
// import postcss from 'rollup-plugin-postcss';
// import atImport from 'postcss-import';
import serve from 'rollup-plugin-serve';
import replace from 'rollup-plugin-replace';
import livereload from 'rollup-plugin-livereload';

function resolve(dir) {
  return path.join(__dirname, dir);
}

const isDev = process.env.ROLLUP_WATCH;
console.log('isDev', isDev);

let plugins = [
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
  vue(),
  commonjs(),
];

let devConfig = {
  input: 'src/dev.js',
  output: {
    file: 'public/kitchen-sink.iife.js',
    format: 'iife',
    name: 'cedar',
  },
};

export default {
  plugins: [
    // serve({
    //   open: true,
    //   contentBase: 'public',
    //   port: 3000,
    // }),
    // livereload(),
  ],
  watch: {
    clearScreen: false,
  }
};
