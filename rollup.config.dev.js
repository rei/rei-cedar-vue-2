import replace from 'rollup-plugin-replace';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import jsonPlugin from 'rollup-plugin-json';
import plugins from './build/rollup-plugins';

plugins.push(
  replace({
    'process.env.NODE_ENV': JSON.stringify(true),
  }),
  jsonPlugin(),
);

// serve({
//   open: false,
//   contentBase: 'public',
//   port: 3000,
// }),
// livereload(),

export default {
  input: 'src/dev.js',
  output: {
    file: 'public/kitchen-sink.iife.js',
    format: 'iife',
    name: 'cedar',
    sourcemap: true,
  },
  plugins,
  watch: {
    clearScreen: false,
  },
};
