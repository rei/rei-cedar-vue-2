import process from 'process';
import renameExtensions from '@betit/rollup-plugin-rename-extensions';
import plugins from './build/rollup-plugins';
import defaults from './build/rollup-defaults';
import packageJson from './package.json';

const env = process.env.NODE_ENV;
const babelEnv = process.env.BABEL_ENV;
const { dependencies = {}, peerDependencies = {} } = packageJson;

let externals = Object.keys({
  ...dependencies,
  ...peerDependencies,
});

if (babelEnv === 'cjs') {
  // don't externalize ES modules in CJS build,
  // these libraries may not have CJS exports and tools like @rei/vunit
  // may throw an error when trying to consume their ESM output
  externals = externals.filter((x) => x !== 'lodash-es' && x !== 'clsx' && x !== '@rei/cdr-tokens');
}

const externalFn = (id) => externals.some((dep) => dep === id || id.startsWith(`${dep}/`));

const ext = babelEnv === 'cjs' ? 'js' : 'mjs';

const config = [
  {
    input: 'src/main.js',
    output: [
      {
        file: `dist/cedar.${ext}`,
        format: babelEnv,
        assetFileNames: "[name].[ext]"
      },
    ],
    plugins,
    external: env === 'prod' ? externalFn : undefined,
    ...defaults,
  },

];

if (env === 'prod' && babelEnv === 'esm') {
  config.push(
    {
      input: 'src/index.js',
      output: [
        {
          dir: 'dist/lib',
          format: 'esm',
          entryFileNames: '[name].js',
        },
      ],
      plugins: [
        ...plugins,
        renameExtensions({ // This plugin is used to rename compiled files to use the ESM .mjs format. Necessary to get tree shaking working. 
          include: ['**/*.js', '**/*.jsx', '**/*.scss'],
          mappings: {
            '.js': '.mjs',
            '.jsx': '.mjs',
            '.scss': '.mjs',
          },
        }),
      ],
      external: env === 'prod' ? externalFn : undefined,
      preserveModules: true, // preserveModules is necessary for tree shaking to work as it compiles each file in cedar separately rather than building one large file
      ...defaults,
    },
  );
}
export default config;
