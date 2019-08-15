import process from 'process';
import plugins from './build/rollup-plugins';

const config = [
  {
    input: 'src/index.js',
    output: [
      {
        file: `dist/cedar.cjs.js`,
        format: 'cjs',
      },
      {
        file: `dist/cedar.esm.js`,
        format: 'esm',
      },
    ],
    plugins,
  },
];

export default config;
