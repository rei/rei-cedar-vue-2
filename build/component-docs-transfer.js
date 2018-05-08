const path = require('path')
const fs = require('fs-extra')

const DEST_REPO_NAME = 'rei-cedar-docs'
const DATA_OBJ_NAME = 'cedar-data.json'

const srcCdrDataFilePath = path.join(__dirname, '..', `src${path.sep + DATA_OBJ_NAME}`)
const destCdrDataFilePath = path.join(__dirname, `../../${DEST_REPO_NAME + path.sep + DATA_OBJ_NAME}`)

// Test to make sure the Cedar Data Object file exists
const pathExistsProm = fs.pathExists(srcCdrDataFilePath)
.catch( err => {
  console.log(`Error testing existence of Cedar data object at:\n${srcCdrDataFilePath}`)
  process.exit(1)
})

// Move Cedar Data object from rei-cedar repository to rei-cedar-docs repository
pathExistsProm
.then( exists => {
  if (exists) {
    console.log(`Moving Cedar Data Object \nfrom: ${srcCdrDataFilePath} \nto: ${destCdrDataFilePath}`)
    return fs.move(srcCdrDataFilePath, destCdrDataFilePath, {overwrite: true})
  }
})
.catch( err => {
  console.log(`Error while trying to move ${DATA_OBJ_NAME} \nfrom: ${srcCdrDataFilePath} \nto: ${destCdrDataFilePath}:\n${err}`)
  process.exit(1)
})

