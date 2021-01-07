import process from 'process';
// import renameExtensions from '@betit/rollup-plugin-rename-extensions';
import plugins from './build/rollup-plugins';
import packageJson from './package.json';
console.log("WHAT")
const env = process.env.NODE_ENV;
const babelEnv = process.env.BABEL_ENV;
const { dependencies = {}, peerDependencies = {} } = packageJson;

let externals = Object.keys({
  ...dependencies,
  ...peerDependencies,
});

// if (babelEnv === 'cjs') {
//   // don't externalize ES modules in CJS build
//   // TODO: figure out config change needed in @rei/vunit
//   externals = externals.filter((x) => x !== 'lodash-es' && x !== 'clsx' && x !== '@rei/cdr-tokens');
// }

const externalFn = (id) => externals.some((dep) => dep === id || id.startsWith(`${dep}/`));

const ext = babelEnv === 'cjs' ? 'js' : 'mjs';

const config = [
  {
    input: 'src/main.ts',
    output: [
      {
        file: `dist/cedar.${ext}`,
        format: babelEnv,
      },
    ],
    plugins,
    // external: env === 'prod' ? externalFn : undefined,
  },

];

if (env === 'prod' && babelEnv === 'esm') {
  config.push(
    {
      input: 'src/index.ts',
      output: [
        {
          dir: 'dist/lib',
          format: 'esm',
          entryFileNames: '[name].js',
        },
      ],
      plugins: [
        ...plugins,
        // renameExtensions({
        //   include: ['**/*.js', '**/*.vue', '**/*.scss'],
        //   mappings: {
        //     '.js': '.mjs',
        //     '.vue': '.mjs',
        //     '.scss': '.mjs',
        //   },
        // }),
      ],
      external: env === 'prod' ? externalFn : undefined,
      // preserveModules: true,
    },
  );
}
export default config;
