const path = require('path')
const fs = require('fs')
const json2md = require('json2md')
const vueDocgen = require('vue-docgen-api')
const glob = require('glob')

let vueObjs = [];

glob('src/+(components|compositions|bundles)/**/*.vue', {ignore: ['**/node_modules/**', '**/examples/**']}, (err, files) => {
  if(err) console.log(err);

  files.forEach((file, idx, arr) => {
    vueObjs.push(vueDocgen.parse(file));
  })
})

