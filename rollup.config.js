import plugins from './build/rollup-plugins';

export default {
  input: 'src/prod.js',
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
