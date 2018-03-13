#!/usr/bin/env/ node

const theo = require('theo');
const path = require('path');
const fs = require('fs-extra');

function getFile(file) {
  return path.join(__dirname, '../node_modules/rei-cedar-tokens/tokens/', file);
}

theo.registerTransform('cedar-web', ['color/hex']);

// MIXIN FORMATTER
theo.registerFormat('mixin', (result) => {
  const mixins = [];

  result.get('props').forEach((prop) => {
    if (prop.get('category') === 'foundations') {
      return;
    }
    const name = prop.get('name');
    const value = prop.get('value');
    const declarations = [];
    let mixin = '';

    value.forEach((val, key) => {
      declarations.push(`${key}: ${val};`);
    });

    mixin = `@mixin ${name}() {
  ${declarations.join('\n  ')}
}`;

    mixins.push(mixin);
  });

  return `${mixins.join('\n\n')}\n`;
});

// MIXINS
let mixins = '';
try {
  mixins = theo.convertSync({
    transform: {
      type: 'cedar-web',
      file: getFile('m_index.yml'),
    },
    format: {
      type: 'mixin',
    },
  });
} catch (error) {
  console.log(`Something went wrong creating mixin output: ${error}`); // eslint-disable-line no-console
}

// VARIABLES
let variables = '';
try {
  variables = theo.convertSync({
    transform: {
      type: 'cedar-web',
      file: getFile('v_index.yml'),
    },
    format: {
      type: 'scss',
    },
  });
} catch (error) {
  console.log(`Something went wrong creating variable output: ${error}`); // eslint-disable-line no-console
}

// FOUNDATIONS
let foundations = '';
try {
  foundations = theo.convertSync({
    transform: {
      type: 'cedar-web',
      file: getFile('foundations/_index.yml'),
    },
    format: {
      type: 'scss',
    },
  });
} catch (error) {
  console.log(`Something went wrong creating foundations output: ${error}`); // eslint-disable-line no-console
}

// WRITE TO FILES

// css folder (to drive component css)
fs.writeFileSync('src/css/settings/tokens.pcss', `/* File generated from DDS tokens, changes to names/values should be made there. */\n
${mixins}${variables}`);
// static (for cdr-assets)
fs.writeFileSync('static/cdr-tokens.scss', `/* File generated from DDS tokens, changes to names/values should be made there. */\n
${mixins}${foundations}`);
