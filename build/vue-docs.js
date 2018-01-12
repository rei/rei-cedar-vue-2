const path = require('path')
const fs = require('fs')
const json2md = require('json2md')
const vueDocgen = require('vue-docgen-api')
const glob = require('glob')

glob('src/+(components|compositions|bundles)/**/*.vue', {'ignore': 'src/**/**/node_modules/'}, (err, files) => {
  files.forEach((file) => {
    console.log(file);
  })
})

