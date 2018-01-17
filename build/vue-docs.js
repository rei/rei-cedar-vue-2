const path = require('path')
const fs = require('fs')
const json2md = require('json2md')
const vueDocgen = require('vue-docgen-api')
const glob = require('glob')

let vueObjs = [];

// Add convert for markdown anchor
json2md.converters.anchor = (anchor, json) => {
  if (!anchor.text)
    return "";
  
  return `[${anchor.text}](${anchor.source})`;
};

glob('src/+(components|compositions|bundles)/**/*.vue', {ignore: ['**/node_modules/**', '**/examples/**']}, (err, files) => {
  if(err) console.log(err);

  files.forEach((file, idx) => {
    vueObjs.push(vueDocgen.parse(file));
    // console.log(vueDocgen.parse(file));
  })
})

