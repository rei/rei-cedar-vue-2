import replace from 'rollup-plugin-replace';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import jsonPlugin from 'rollup-plugin-json';
import plugins from './build/rollup-plugins';

console.log('env from config', process.env.NODE_ENV); /* eslint-disable-line */

plugins.push(
  replace({
    'process.env.NODE_ENV': JSON.stringify(true),
  }),
  jsonPlugin(),
  serve({
    open: false,
    contentBase: 'public',
    port: 3000,
  }),
  livereload(),
);

export default {
  input: 'src/dev.js',
  output: {
    file: 'public/kitchen-sink.iife.js',
    format: 'iife',
    name: 'cedar',
    // sourcemap: true, currently broken with vue plugin and watch -- https://github.com/vuejs/rollup-plugin-vue/issues/238
  },
  plugins,
  watch: {
    clearScreen: false,
  },
};
