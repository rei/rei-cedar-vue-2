import process from 'process';
import babel from 'rollup-plugin-babel';

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
      // TODO: big ESM build is not actually tree-shakeable, may want to only emit big CJS and per-component ESM files
      {
        file: `dist/cedar.${esm}.js`,
        format: 'esm',
      },
    ],
    plugins: [
      ...plugins, 
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true,
        externalHelpers: false,
      })
    ],
  },
];

// TODO: update icon build so the per-icon components don't need special handling
function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

components.forEach((component) => {
  let name = component.split('/')[4].split('.')[0];
  
  // TODO: fix this mess :~(
  if (name === 'comps') name = 'Icon' + cap(component.split('/')[5].split('.')[0].replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }))
  if (name.match('IconSprite')) name = 'CdrIconSprite'

  // TODO: dash-case or smth might work better as a path here?
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
