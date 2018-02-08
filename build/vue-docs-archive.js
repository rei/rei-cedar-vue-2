const path = require('path')
const errCodes = require('errno')
const semverDiff = require('semver-diff')
const semever = require('semver')
const fse = require('fs-extra')
const glob = require('glob')

const ARCHIVE = 'api-archive'

// put all markdown files for each component into an 'api-archive' folder
glob('src/+(components|compositions)/**/*.vue', {ignore: ['**/node_modules/**', '**/examples/**', '**/demos/**', `**/${ARCHIVE}/**`]}, (mdErr, vueFiles) => {
  if(mdErr) {
    throw new Error(`Error while trying to find markdown documentation files:\n${mdErr}`)
  }

  console.log(`Archiving markdown documentation files`)

  // use Vue files to find associated markdown files
  vueFiles.forEach((file) => {
    const startFileName = file.lastIndexOf('/') + 1, endFileName = file.lastIndexOf('.')
    const vueCompName = file.slice(startFileName, endFileName)
    const vueCompDir = file.slice(0, startFileName)
    const fullDirPath = `${path.dirname(__dirname)}/${vueCompDir}`

    // create 'api-archive' folder if it doesn't exist
    fse.ensureDir(`${fullDirPath + ARCHIVE}`, (dirErr) => {
      if(dirErr) {
        throw new Error(`There was a problem creating a ${ARCHIVE} folder for ${vueCompName}:\n${dirErr}`)
      }

      // move any markdown files into the api-archive folder
      glob(`${fullDirPath + vueCompName}-*.md`, (mdFileErr, mdFiles) => {
        mdFiles.forEach((mdFile) => {
          console.log(`Archiving ${mdFile}`)
          const starMdVer = mdFile.lastIndexOf(`${vueCompName}-`) + vueCompName.length + 1, endMdVer = mdFile.lastIndexOf('.')
          const mdFileVer = mdFile.slice(starMdVer, endMdVer)
          fse.move(mdFile, `${fullDirPath + ARCHIVE}/${vueCompName}-${mdFileVer}.md`, {overwrite: true}, (mvErr) =>{
            if (mvErr) 
              throw new Error(`Error while trying to move ${vueCompName}-${mdFileVer}.md into ${ARCHIVE}`)
          })
        })
      })
    })
  })
})