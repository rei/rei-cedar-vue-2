// import babel from 'rollup-plugin-babel';
import plugins from './build/rollup-plugins';

export default {
  input: 'src/components/_index.js',
  output: [
    {
      file: 'dist/cedar.esm.js',
      format: 'esm',
    },
  ],
  plugins: plugins({test: true}),
};
