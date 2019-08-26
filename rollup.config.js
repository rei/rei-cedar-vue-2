import process from 'process';
import renameExtensions from '@betit/rollup-plugin-rename-extensions';
import plugins from './build/rollup-plugins';
import packageJson from './package.json';

const env = process.env.NODE_ENV;
const { dependencies = {}, peerDependencies = {} } = packageJson;

const externals = Object.keys(Object.assign(
  {},
  dependencies,
  peerDependencies,
));

const externalFn = id => externals.some(dep => dep === id || id.startsWith(`${dep}/`));

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
    external: env === 'prod' ? externalFn : undefined,
  },

];

if (env === 'prod') {
  config.push(
    {
      input: 'src/index.js',
      output: [
        {
          dir: `dist/lib`,
          format: 'esm',
          entryFileNames: '[name].js'
        },
      ],
      plugins: [
        ...plugins,
        renameExtensions({
            include: ['**/*.jsx', '**/*.scss'],
            mappings: {
                '.jsx': '.js',
                '.scss': '.js',
            },
        })
      ],
      external: env === 'prod' ? externalFn : undefined,
      preserveModules: true
    }
  )
}
export default config;
