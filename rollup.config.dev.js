import replace from 'rollup-plugin-replace';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import plugins from './build/rollup-plugins';

console.log('env from config', process.env.NODE_ENV); /* eslint-disable-line */

plugins.push(
  replace({
    'process.env.NODE_ENV': JSON.stringify(true),
  }),
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
  },
  plugins,
  watch: {
    clearScreen: false,
  },
};
