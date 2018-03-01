#!/usr/bin/env/ node

const theo = require('theo');
const path = require('path');
const fs = require('fs-extra');

theo.registerTransform('cedar-web', ['color/hex']);

// MIXIN FORMATTER
theo.registerFormat('mixin', result => {
  let mixins = [];

  result.get('props').map(prop => {
    let name = prop.get('name');
    let value = prop.get('value');
    let declarations = [];
    let mixin = '';

    value.map((value,key) => {
      declarations.push(`${key}: ${value};`);
    });

    mixin = `@mixin ${name}() {
  ${declarations.join('\n  ')}
}`;

    mixins.push(mixin);
  });

  return `${mixins.join('\n\n')}\n`;
});


// OUTPUT MIXINS
theo
  .convert({
    transform: {
      type: 'web',
      file: path.join(__dirname, '..', 'tokens/m_index.yml'),
    },
    format: {
      type: 'mixin',
    },
  })
  .then((data) => {
    fs.writeFileSync('src/css/settings/mixins.pcss', data);
  })
  .catch(error => console.log(`Something went wrong: ${error}`));

// OUTPUT VARIABLES
theo
  .convert({
    transform: {
      type: 'cedar-web',
      file: path.join(__dirname, '..', 'tokens/v_index.yml'),
    },
    format: {
      type: 'scss',
    },
  })
  .then((data) => {
    fs.writeFileSync('src/css/settings/tokens.pcss', data);
  })
  .catch(error => console.log(`Something went wrong: ${error}`));
