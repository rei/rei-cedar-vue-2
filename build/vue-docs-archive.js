const path = require('path')
const fs = require('fs-extra')
const semver = require('semver')
const glob = require('glob')

const ARCHIVE = 'api-archive'
const VERSIONS = 'versions'

// put all markdown files for each component into an 'api-archive' folder
glob('src/+(components|compositions)/**/*.vue', {ignore: ['**/node_modules/**', '**/examples/**', '**/demos/**', `**/${ARCHIVE}/**`]}, (mdErr, vueFiles) => {
  if(mdErr) {
    throw new Error(`Error while trying to find markdown documentation files:\n${mdErr}`)
  }

  console.log(`Archiving markdown documentation files\n`)

  // use Vue files to find associated markdown files
  vueFiles.forEach((file) => {
    const startFileName = file.lastIndexOf('/') + 1, endFileName = file.lastIndexOf('.')
    const vueCompName = file.slice(startFileName, endFileName)
    const vueCompDir = file.slice(0, startFileName)
    const fullDirPath = `${path.dirname(__dirname)}/${vueCompDir}`

    // create 'api-archive' folder if it doesn't exist
    fs.ensureDir(`${fullDirPath + ARCHIVE}/${VERSIONS}`, (dirErr) => {
      if(dirErr) {
        throw new Error(`There was a problem creating a ${ARCHIVE}/${VERSIONS} folder for ${vueCompName}:\n${dirErr}`)
      }

      // move any markdown files into the api-archive folder
      glob(`${fullDirPath + vueCompName}*.md`, (mdFileErr, mdFiles) => {
        if(mdFileErr) {
          throw new Error(`Error while trying to archive markdown files for ${vueCompName}`)
        }
        
        mdFiles.forEach((mdFile) => {
          console.log(`Archiving ${mdFile}`)
          const starMdVer = mdFile.lastIndexOf(`${vueCompName}-`) + vueCompName.length + 1, endMdVer = mdFile.lastIndexOf('.')
          const mdFileVer = mdFile.slice(starMdVer, endMdVer)
          
          // put versioned markdown documentation files in their own 'versions' folder seperate from the most current version
          if(semver.valid(mdFileVer)) {
            fs.move(mdFile, `${fullDirPath + ARCHIVE}/${VERSIONS}/${vueCompName}-${mdFileVer}.md`, {overwrite: true}, (mvErr) => {
              if (mvErr) 
                throw new Error(`Error while trying to move ${vueCompName}-${mdFileVer}.md into ${ARCHIVE}/${VERSIONS}`)
            })
            console.log(`Moving ${fullDirPath + ARCHIVE}/${VERSIONS}/${vueCompName}-${mdFileVer}.md\n`)
          }
          else {
            fs.move(mdFile, `${fullDirPath + ARCHIVE}/${vueCompName}.md`, {overwrite: true}, (mvErr) => {
              if (mvErr) 
                throw new Error(`Error while trying to move ${vueCompName}.md into ${ARCHIVE}`)
            })
            console.log(`Moving ${fullDirPath + ARCHIVE}/${vueCompName}.md\n`)
          }
        })
      })
    })
  })
})