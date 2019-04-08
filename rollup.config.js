/*
rollup bundles for cjs, esm
*/
import path from 'path';
import vue from 'rollup-plugin-vue';
import commonjs from 'rollup-plugin-commonjs';
import multiEntry from 'rollup-plugin-multi-entry';
import alias from 'rollup-plugin-alias';
import resolve2 from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

function resolve(dir) {
  return path.join(__dirname, dir);
}

export default [
  {
    input: {
      include: ['src/components/_index.js'],
      exclude: [
        'src/components/**/examples/*',
        'src/components/**/examples/demo/*',
        'src/components/**/comps/*',
        'src/components/Utilities/*',
        // 'src/components/_index.js',
        'src/components/examples.js',
      ],
    },
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
      commonjs(),
      vue(),
      resolve2(),
      babel({
        exclude: 'node_modules/**', // only transpile our source code
        runtimeHelpers: true
      })
    ],
  },
];
