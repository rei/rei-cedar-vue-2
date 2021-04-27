/* eslint-disable */
const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const _ = require('lodash');
const { JSDOM } = require('jsdom');
const iconData = require('@rei/cedar-icons');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

// indexArr builds the 'index' index.js file
const indexArr = [];

Object.keys(iconData).forEach(function (name) {
  const pascalName = _.upperFirst(_.camelCase(name));
  const content = iconData[name];
  const outFile = resolve(`comps/${name}.vue`);

  // everything in root svg element
  const fragment = JSDOM.fragment(content).firstChild;

  // Strip the title element from the svg fragment
  fragment.querySelectorAll('title').forEach((el) => {
    el.parentNode.removeChild(el);
  });
  const { innerHTML } = fragment;


// TODO: .VUE3-ify!
  // create vue component
  const component = `
<template>
<cdr-icon v-bind="props">
  <slot/>
  ${innerHTML.trim()}
</cdr-icon>
</template>
<script>
  import { defineComponent } from 'vue';
  import CdrIcon from '../CdrIcon';
  export default defineComponent({
    name: 'Icon${pascalName}',
    components: {
      CdrIcon,
    },
    setup(props) {
      return {
        props
      };
    },
  });
</script>
`;

  // write component file
  fs.outputFileSync(`${outFile}`, component);

  // add file to 'index'
  indexArr.push(`export { default as Icon${pascalName} } from './comps/${name}';`);

})

// output the 'index' file
fs.outputFileSync(
  resolve('index.js'),
  `// file created by generate.js
/* eslint-disable */
${indexArr.join('\n')}`,
);
