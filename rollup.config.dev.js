import plugins from './build/rollup-plugins';

export default {
  input: 'src/dev.js',
  output: {
    file: 'public/kitchen-sink.iife.js',
    format: 'iife',
    name: 'cedar',
    // sourcemap: true, currently broken with vue plugin and watch -- https://github.com/vuejs/rollup-plugin-vue/issues/238
  },
  plugins: plugins({dev: true}),
  watch: {
    clearScreen: false,
  },
};
