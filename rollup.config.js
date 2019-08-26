import process from 'process';
import plugins from './build/rollup-plugins';
import packageJson from './package.json';

const { dependencies = {}, peerDependencies = {} } = packageJson;

const externals = Object.keys(Object.assign(
  {},
  dependencies,
  peerDependencies,
));

const config = [
  {
    input: 'src/main.js',
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
    external: id => externals.some(dep => dep === id || id.startsWith(`${dep}/`)),
  },
  {
    input: 'src/index.js',
    output: [
      {
        dir: `dist/lib`,
        format: 'esm',
        entryFileNames: '[name].js'
      },
    ],
    plugins,
    external: id => externals.some(dep => dep === id || id.startsWith(`${dep}/`)),
    preserveModules: true
  },
];

export default config;
