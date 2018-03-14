const path = require('path')
const fs = require('fs-extra')
const glob = require('glob')

const util = require('util')

const SOURCE_ARCHIVE = 'api-archive'
const SOURCE_VERSIONS = 'versions'
const SOURCE_REPO_NAME = 'rei-cedar'

const DEST_ARCHIVE = 'archive'
const DEST_VERSIONS = SOURCE_VERSIONS
const DEST_REPO_NAME = 'rei-cedar-docs'

const DEST_REPO_PATH = path.resolve(__dirname, `../../${DEST_REPO_NAME}`)
console.log(`rei-cedar-docs repo path: ${DEST_REPO_PATH}`)

const searchpath = path.join(__dirname,'..',`src/+(components|compositions)/**/${SOURCE_ARCHIVE}`)

// pull markdown files from `rei-cedar` repo and transfer to `rei-cedar-docs` repo
glob(`${searchpath}/*.md`, {ignore: ['**/node_modules/**', '**/examples/**', '**/demos/**']},
  (srcFileErr, srcMdFilePaths) => {
    if(srcFileErr) {
      throw new Error(`Error while collecting most current markdown files`)
    }

    srcMdFilePaths.forEach((srcMdFilePath) => {
      const srcCurrentFileName = path.basename(srcMdFilePath)
      if (srcCurrentFileName.startsWith('cdr')) {

        const destMdFilePath =  srcMdFilePath
        .replace(SOURCE_REPO_NAME, DEST_REPO_NAME)
        .replace(SOURCE_ARCHIVE, DEST_ARCHIVE)
        .replace('/src', '')
        
        // move most recent markdown file to API site repo
        fs.move(srcMdFilePath, destMdFilePath, {overwrite: true}, moveErr => {
          if (moveErr) {
            throw new Error(`Error while trying to move ${srcCurrentFileName} \nfrom ${srcMdFilePath} to \n${destMdFilePath}: ${moveErr}`)
          }

          console.log(`Successfully moved ${srcCurrentFileName} \nfrom: ${srcMdFilePath} \nto ${destMdFilePath}\n`)
        })
      }
    })
  }
)

// find all the archived markdown files from previous versions
const transferSearchGlob = `${searchpath}/${SOURCE_VERSIONS}/*.md`
glob(transferSearchGlob, {ignore: ['**/node_modules/**', '**/examples/**', '**/demos/**']},
  (archFileErr, archMdFilePaths) => {   
    if (archFileErr) {
      throw new Error(`Error while retrieving markdown files: ${archFileErr}`)
    }

    console.log(`search glob used to transfer files: ${transferSearchGlob}\n`)
    archMdFilePaths.forEach((archMdFilePath) => {
      const archMdFileName = path.basename(archMdFilePath)
      
      if (archMdFileName.startsWith('cdr')) {

        let destArchMdFilePath = archMdFilePath
        .replace(SOURCE_REPO_NAME, DEST_REPO_NAME)
        .replace(SOURCE_ARCHIVE, DEST_ARCHIVE)
        .replace(SOURCE_VERSIONS, DEST_VERSIONS)
        .replace('/src', '')

        fs.move(archMdFilePath, destArchMdFilePath, {overwrite: true}, moveArchErr => {
          if (moveArchErr) {
            throw new Error(`Error while trying to move ${archMdFileName} \nfrom: ${archMdFilePath} \nto: ${destArchMdFilePath}: \n${moveArchErr}`)
          }
        
          console.log(`Moved archive markdown file: ${archMdFileName} \nfrom: ${archMdFilePath} \nto: ${destArchMdFilePath}`)
        })
      }
    })
  }
)