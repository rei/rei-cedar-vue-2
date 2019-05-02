import process from 'process';
import plugins from './build/rollup-plugins';

let cjs = 'cjs';
let esm = 'esm';

if (process.env.SSR_ENV === 'ssr') {
  cjs = 'cjs.ssr';
  esm = 'esm.ssr';
}

export default {
  input: 'src/prod.js',
  output: [
    {
      file: `dist/cedar.${cjs}.js`,
      format: 'cjs',
    },
    {
      file: `dist/cedar.${esm}.js`,
      format: 'esm',
    },
  ],
  plugins,
};
