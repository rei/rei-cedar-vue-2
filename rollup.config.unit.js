import babel from 'rollup-plugin-babel';
import plugins from './build/rollup-plugins';

plugins.push(
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
    plugins: [
      ['transform-imports', {
        '@rei/cedar': {
          transform: (importName, matches) => `${__dirname}/dist/${importName.toLowerCase()}/${importName}.esm.js`,
          preventFullImport: true,
        }
      }]
    ]
  }),
);

export default {
  input: 'src/components/_index.js',
  output: [
    {
      file: 'dist/cedar.esm.js',
      format: 'esm',
    },
  ],
  plugins,
};
