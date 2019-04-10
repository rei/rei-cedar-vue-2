/*
rollup bundle for dev server
*/
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
// import postcss from 'rollup-plugin-postcss';
// import atImport from 'postcss-import';

console.log ('hello');

const excludePaths = [
  // 'src/components/Utilities/*',
  // 'src/components/_index.js',
];

// resolve: ['.vue', '.json', '.js'],
//         srcdir: resolve('src'),
//         cssdir: resolve('src/css'),
//         assetsdir: resolve('src/assets'),
//         componentsdir: resolve('src/components'),
//         compositionsdir: resolve('src/compositions'),
//         directivesdir: resolve('src/directives'),
//         mixinsdir: resolve('src/mixins'),

export default [
  {
    input: {
      include: '/src/App',
    },
    output: {
      file: '../public/cedar-dev.esm.js',
      format: 'esm',
    },
    plugins: [
      resolve({ extensions: ['.js', '.vue'] }),
      alias({
        resolve: ['.vue', '.json', '.js'],
        srcdir: '../src',
        cssdir: '../src/css',
        assetsdir: '../src/assets',
        componentsdir: '../src/components',
        compositionsdir: '../src/compositions',
        directivesdir: '../src/directives',
        mixinsdir: '../src/mixins',
      }),
      vue(),
      // postcss({
      //   extensions: ['.css', '.pcss'],
      //   plugins: [
      //     atImport(),
      //   ],
      // }),
    ],
  },
];
