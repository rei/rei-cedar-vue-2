#!/usr/bin/env/ node

const theo = require('theo');
const path = require('path');
const fs = require('fs-extra');

theo.registerTransform('cedar-web', ['color/hex']);

// MIXIN FORMATTER
theo.registerFormat('mixin', (result) => {
  const mixins = [];

  result.get('props').forEach((prop) => {
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
