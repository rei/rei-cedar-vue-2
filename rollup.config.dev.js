import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import jsonPlugin from 'rollup-plugin-json';
import alias from 'rollup-plugin-alias';
import plugins from './build/rollup-plugins';

plugins.push(
  replace({
    'process.env.NODE_ENV': JSON.stringify(true),
  }),
  alias({
    resolve: ['.vue', '.json', '.js'],
    '@rei/cedar': __dirname,
  }),
  jsonPlugin(),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
  }),
);

if (process.env.ROLLUP_WATCH) {
  plugins.push(
    serve({
      open: false,
      contentBase: 'public',
      port: 3000,
    }),
    livereload(),
  );
}

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
