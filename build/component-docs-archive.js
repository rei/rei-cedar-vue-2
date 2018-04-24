const path = require('path')
const fs = require('fs-extra')
const semver = require('semver')
const glob = require('glob-promise')

let cedarDataObj = {"components":[], "compositions":[]}

const componentsProm = glob('src/components/**/build/component-data.json', {ignore: ['**/node_modules/**']})
.then( files => {
  files.forEach(file => {
    let compObj = require(`${file}`)
    cedarDataObj.components.push(compObj)
  })
})
.catch(globErr)

const compositionProm = glob('src/compositions/**/build/component-data.json', {ignore: ['**/node_modules/**']})
.then( files => {
  files.forEach( file => {
    let compObj = require(`${file}`)
    cedarDataObj.compositions.push(compObj)
  })
})
.catch(globErr)

Promise.all([componentsProm, compositionProm])
.then()

function globErr(err) {
  console.log(`Error archiving component or composition:\n${err}`)
}