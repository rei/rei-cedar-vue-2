const path = require('path')
const errCodes = require('errno')
const semverDiff = require('semver-diff')
const smever = require('semver')
const fs = require('fs')
const glob = require('glob')
const util = require('util')

// put all markdown files for each component into an 'api-archive' folder
glob('src/+(components|compositions)/**/*.vue', {ignore: ['**/node_modules/**', '**/examples/**', '**/demos/**', '**/api-archive/**']}, (mdErr, vueFiles) => {
  if(mdErr) {
    throw new Error(`Error while trying to find markdown documentation files:\n${mdErr}`)
  }

  // use Vue files to find associated markdown files
  vueFiles.forEach((file) => {

    const startFileName = file.lastIndexOf('/') + 1, endFileName = file.lastIndexOf('.')
    const vueCompName = file.slice(startFileName, endFileName)
    const vueCompDir = file.slice(0, startFileName)

    let latestMdDoc = null, latestMdVer = '0.0.0'

    // create 'api-archive' folder if it doesn't exist
    checkDirectory(`${vueCompDir}api-archive`, (dirErr) => {
      if(dirErr) {
        throw new Error(`There was a problem creating an api-archive folder for ${vueCompName}:\n${dirErr}`)
      }
    })
  })
})

// create directory if it doesn't already exit
function checkDirectory(dir, callback) {
  fs.stat(dir, (dirErr, stats) => {
    // check to see if directory doesn't exist
    // if(dirErr) {
    //   console.log(`Error while checking if ${dir} exists:\n ${dirErr.errno} ${errCodes.errno[dirErr.errno].code === errCodes.code.ENOENT.code ? true : false}`)
    if (dirErr && errCodes.errno[dirErr.errno].code === errCodes.code.ENOENT.code) {
      fs.mkdir(dir, () => {
        console.log(`There was a problem creating the director for ${dir}`)
      })
    } else {
      // in case there's another error
      callback(dirErr)
    }
  })
}