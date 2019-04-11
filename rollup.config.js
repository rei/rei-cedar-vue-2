/*
rollup bundles for cjs, esm
*/
import path from 'path';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import multiEntry from 'rollup-plugin-multi-entry';
import alias from 'rollup-plugin-alias';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import atImport from 'postcss-import';
import serve from 'rollup-plugin-serve';

function resolve(dir) {
  return path.join(__dirname, dir);
}

// const excludePaths = [
//   'src/components/**/examples/*',
//   'src/components/**/examples/demo/*',
//   'src/components/**/comps/*',
//   'src/components/Utilities/*',
//   // 'src/components/_index.js',
//   'src/components/examples.js',
// ];

export default [
  // {
  //   input: {
  //     include: ['src/components/_index.js'],
  //     exclude: excludePaths,
  //   },
  //   output: [
  //     {
  //       file: 'dist/cedar.cjs.js',
  //       format: 'cjs',
  //     },
  //     {
  //       file: 'dist/cedar.esm.js',
  //       format: 'esm',
  //     },
  //   ],
  //   plugins: [
  //     multiEntry(),
  //     alias({
  //       resolve: ['.vue', '.json', '.js'],
  //       srcdir: resolve('src'),
  //       cssdir: resolve('src/css'),
  //       assetsdir: resolve('src/assets'),
  //       componentsdir: resolve('src/components'),
  //       compositionsdir: resolve('src/compositions'),
  //       directivesdir: resolve('src/directives'),
  //       mixinsdir: resolve('src/mixins'),
  //     }),
  //     commonjs(),
  //     vue(),
  //     // resolve2(),
  //     // babel({
  //     //   exclude: 'node_modules/**', // only transpile our source code
  //     //   runtimeHelpers: true,
  //     // }),
  //   ],
  // },
  {
    input: {
      include: ['src/dev.js'],
    },
    output: [
      {
        file: 'public/cedar.iife.js',
        format: 'iife',
      },
    ],
    plugins: [
      multiEntry(),
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
      serve('public'),
      // resolve2(),
      // babel({
      //   exclude: 'node_modules/**', // only transpile our source code
      //   runtimeHelpers: true,
      // }),
    ],
  },
];
