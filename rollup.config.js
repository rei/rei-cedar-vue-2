/*
rollup bundles for cjs, esm
*/
import path from 'path';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
// import postcss from 'rollup-plugin-postcss';
// import atImport from 'postcss-import';
import serve from 'rollup-plugin-serve';
import replace from 'rollup-plugin-replace';
import livereload from 'rollup-plugin-livereload';
import babel from 'rollup-plugin-babel';

function resolve(dir) {
  return path.join(__dirname, dir);
}

const isDev = process.env.ROLLUP_WATCH;
console.log('isDev', isDev); /* eslint-disable-line */

const plugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify(isDev),
  }),
  alias({
    resolve: ['.vue', '.json', '.js'],
    srcdir: resolve('src'),
    cssdir: resolve('src/css'),
    assetsdir: resolve('src/assets'),
    componentsdir: resolve('src/components'),
    compositionsdir: resolve('src/compositions'),
    directivesdir: resolve('src/directives'),
    mixinsdir: resolve('src/mixins'),
  }),
  nodeResolve(),
  vue(),
  commonjs(),
];

const devConfig = {
  input: 'src/dev.js',
  output: {
    file: 'public/kitchen-sink.iife.js',
    format: 'iife',
    name: 'cedar',
  },
};

const config = {
  input: 'src/components/_index.js',
  output: [
    {
      file: 'dist/cedar/cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/cedar/esm.js',
      format: 'esm',
    },
  ],
  plugins,
};

if (isDev) {
  Object.assign(config, devConfig);

  config.plugins.push(
    serve({
      open: true,
      contentBase: 'public',
      port: 3000,
    }),
    livereload(),
  );

  config.watch = {
    clearScreen: false,
  };
} else {
  config.plugins.push(
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
  );
}

console.log('config', config); /* eslint-disable-line */
export default config;
