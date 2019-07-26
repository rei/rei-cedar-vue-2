import process from 'process';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
import path from 'path';

import _ from 'lodash';

import plugins from './build/rollup-plugins';
import components from './build/rollup-components';

const config = [
  {
    input: 'src/prod.js',
    output: [
      {
        file: 'dist/cedar.cjs.js',
        format: 'cjs',
      },
      // Big ESM file is not shakeable :~(
      // {
      //   file: `dist/cedar.${esm}.js`,
      //   format: 'esm',
      // },
    ],
    plugins: plugins({cjs: true})
  },
];

components.forEach((component) => {

  // example: `./src/components/grid/CdrRow.vue`
  let name = component.split('/')[4].split('.')[0];

  if (name === 'comps') {
     // example: `./src/components/icon/comps/arrow-down.vue`
    let iconName = component.split('/')[5].split('.')[0];
    if (iconName === 'CdrIconSprite') {
      name = 'CdrIconSprite'
    } else {
      name = `Icon${_.upperFirst(_.camelCase(iconName))}`;
    }
  }
  config.unshift({
    input: component,
    output: [
      // single component CJS exports look identical to the ESM ones? what is happening
      // {
      //   file: `dist/${name.toLowerCase()}/${name}.${cjs}.js`,
      //   format: 'cjs',
      // },
      {
        file: `dist/${name.toLowerCase()}/${name}.esm.js`,
        format: 'esm',
      },
    ],
    plugins: plugins({esm: true}),
  });
});

export default config;
