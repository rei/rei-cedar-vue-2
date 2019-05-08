import process from 'process';
import plugins from './build/rollup-plugins';
import components from './build/rollup-components';

let cjs = 'cjs';
let esm = 'esm';

if (process.env.SSR_ENV === 'ssr') {
  cjs = 'cjs.ssr';
  esm = 'esm.ssr';
}

const config = [
  {
    input: 'src/prod.js',
    output: [
      {
        file: `dist/cedar.${cjs}.js`,
        format: 'cjs',
      },
      {
        file: `dist/cedar.${esm}.js`,
        format: 'esm',
      },
    ],
    plugins,
  },
];

components.forEach((component) => {
  const name = component.split('/')[4].split('.')[0];
  config.push({
    input: component,
    output: [
      {
        file: `dist/${name.toLowerCase()}/${name}.${cjs}.js`,
        format: 'cjs',
      },
      {
        file: `dist/${name.toLowerCase()}/${name}.${esm}.js`,
        format: 'esm',
      },
    ],
    plugins,
  });
});

export default config;
