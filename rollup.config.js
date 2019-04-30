import babel from 'rollup-plugin-babel';
import plugins from './build/rollup-plugins';


plugins.push(
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
  }),
);

export default {
  input: 'src/components/_index.js',
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
