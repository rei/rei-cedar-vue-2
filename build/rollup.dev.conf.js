/*
rollup bundle for dev server
*/
import path from 'path';
import vue from 'rollup-plugin-vue';
import alias from 'rollup-plugin-alias';
// import resolve from 'rollup-plugin-node-resolve';
// import postcss from 'rollup-plugin-postcss';
// import atImport from 'postcss-import';

function resolve(dir) {
  return path.join(__dirname, dir);
}

export default [
  {
    input: {
      include: 'src/App.vue',
    },
    output: {
      file: '../public/cedar-dev.esm.js',
      format: 'esm',
    },
    plugins: [
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
