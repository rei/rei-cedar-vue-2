import process from 'process';
import plugins from './build/rollup-plugins';

// const process = require('process');
// const plugins = require('./build/rollup-plugins');

let cjs = 'cjs';
let esm = 'esm';

if (process.env.SSR_ENV === 'ssr') {
  cjs = 'cjs.ssr';
  esm = 'esm.ssr';
}

export default {
  input: 'src/components/button/CdrButton.vue',
  output: [
    {
      file: `dist/button/cedar.${cjs}.js`,
      format: 'cjs',
    },
    {
      file: `dist/button/cedar.${esm}.js`,
      format: 'esm',
    },
  ],
  plugins,
};
