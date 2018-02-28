#!/usr/bin/env/ node

const theo = require('theo');
const path = require('path');
const fs = require('fs-extra');

theo.registerValueTransform(
  'typography/font',
  prop => prop.get('type') === 'typography',
  (prop) => {
    const propVals = prop.get('value').toObject();
    // console.log(propVals);
    const {
      'font-style': style = '',
      'font-variant': variant = '',
      'font-weight': weight = '',
      'font-size': size = '',
      'line-height': lineHeight = '',
      'font-family': family = '',
    } = propVals;

    return `${style} ${variant} ${weight} ${size}/${lineHeight} ${family}`.trim();
  },
);

theo.registerTransform('cedar-web', ['color/hex', 'typography/font']);

theo
  .convert({
    transform: {
      type: 'cedar-web',
      file: path.join(__dirname, '..', 'tokens/main.yml'),
    },
    format: {
      type: 'scss',
    },
  })
  .then((data) => {
    fs.writeFileSync('src/css/settings/tokens.pcss', data);
  })
  .catch(error => console.log(`Something went wrong: ${error}`));
