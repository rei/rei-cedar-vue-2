const path = require('path')
const semverDiff = require('semver-diff')
const semver = require('semver')
const fs = require('fs-extra')
const json2md = require('json2md')
const vueDocgen = require('vue-docgen-api')
const glob = require('glob')

// Add convert for markdown anchor
json2md.converters.anchor = (anchor, json) => {
  if (!anchor.text) {
    return "";
  }

  return `[${anchor.text}](${anchor.source})`;
};

// pull in *.vue files from directory
glob('src/+(components|compositions)/**/*.vue', {ignore: ['**/node_modules/**', '**/examples/**', '**/demos/**', '**/Utilities/**']},
  (compErr, files) => {
    if(compErr) {
      throw new Error(`Error while trying to find single file Vue components:\n${compErr}`)
    }

    // convert *.vue files into JSON objects then convert to *.md files
    files.forEach((file) => {
      console.log(`Processing file: ${file}\n`)
      const vueObj = vueDocgen.parse(file)
      
      // Determine version of current raw vue component based on its associated package.json file
      const currentDir = path.resolve(__dirname, '..', `${path.dirname(file)}`) + path.sep
      const pkgFilePath = `${currentDir}package.json`
      const readmeFilePath = `${currentDir}README.md`
      const examplesFilePath = `${currentDir}EXAMPLES.md`
      let currentVer = ''
      let mdTemplate = ''

      // read in package.json file to get semver version
      const pkgProm = fs.readJson(pkgFilePath)
        .then( pkgObj => {
          currentVer = pkgObj[`version`]
        
          // make sure package.json version is semver valid
          if (!semver.valid(currentVer)) {
            Promise.reject(new Error(`Vue component at ${path.basename(file)} doesn't have a valid semver on ${pkgFilePath} file\n`))
          }
        })
        .catch( prkError => { 
          console.log(`${pkgError}`)
          process.exit(1)
        })

      // read in README markdown file
      const readmeProm = pkgProm.then(() => { return fs.readFile(readmeFilePath, 'utf8')} )
        .then( readmeData => {
          mdTemplate += readmeData 
        })
        .catch( readmeErr => { 
          console.log(`There was an error reading README markdown file ${readmeFilePath}:\n${readmeErr}`)
          process.exit(1)
        })
        
      // create markdown tables for component properties, events, methods, and slots
      const tblProm = readmeProm
        .then(() => {
          return new Promise((resolve, reject) => { resolve(createMarkdownTemplate(file, vueObj)) }) 
        })
        .then( tmplTblData => { mdTemplate += tmplTblData })

      // read in EXAMPLES markdown file
      const exampleProm = tblProm
        .then(() => { return fs.readFile(examplesFilePath, 'utf8')} )
        .then( examplesData => { mdTemplate += examplesData })
        .catch( examplesErr => {
          if (`${examplesErr}`.indexOf('ENOENT') > -1) {
            console.log(`EXAMPLES.md doesn't exist for ${currentDir}`)
          }
          else {
            console.log(`${examplesErr}`)
            process.exit(1)
          }
        })

      exampleProm.then(() => {
        const vueCompName = path.basename(file,'.vue')
        const vueCompDir = path.dirname(file)
        const vueCompFilePath = vueCompDir + path.sep + vueCompName
        const BASE_VERSION = '0.0.0'
        let latestMdDoc = null, latestMdVer = BASE_VERSION

        // pull in the current markdown documentation files and their archived NPM versions
        glob(`${vueCompFilePath}*.md`, (mdFileErr, mdFiles) => {
          if (mdFileErr) {
            throw new Error(`Error while trying to find markdown documentation files in directory ${vueCompDir}:\n${mdFileErr}`)
          }

          // no archived markdown documentation file exists yet, create the first one
          if (mdFiles.length == 0) {
            fs.outputFile(`${vueCompFilePath}-${currentVer}.md`, mdTemplate)
            .then(() => console.log(`No existing markdown file for ${vueCompName}. Creating one at ${vueCompFilePath}-${currentVer}.md`))
            .catch((createErr) => {
              console.log(`Error while trying to create markdown documentation file ${vueCompFilePath}-${currentVer}.md:\n${createErr}`)
              process.exit(1)
            })
          }
          else {
            // find the most recent archived markdown documentation file based on NPM version
            // only look at <component name>-1.2.3.md files, not <component name>.md files
            mdFiles.forEach((mdFile) => {
              // find the semver version in the markdown file name, if it exists
              let startMdVer = mdFile.lastIndexOf(`${vueCompName}-`)
              let endMdVer = -1
              let mdFileVer = ''
              if (startMdVer > -1 ) {
                startMdVer += vueCompName.length + 1
                endMdVer = mdFile.lastIndexOf('.')
                mdFileVer = mdFile.slice(startMdVer, endMdVer)
              }

              // ensure `mdFileVer` is semver valid and test if it's a later version than current
              // standing "latest version"
              if (startMdVer > -1 && startMdVer < endMdVer && semver.valid(mdFileVer) && semver.lt(latestMdVer, mdFileVer)) {
                latestMdVer = mdFileVer
                latestMdDoc = mdFile
              }
            })

            if( latestMdVer !== BASE_VERSION) {
              console.log(`Latest markdown documentation version for ${vueCompName}: ${latestMdVer}`)
            }
  
            // overwrite most recent archived markdown documentation if the update is a patch
            // check to ensure `latestMdDoc` is a valid file and not null
            if (latestMdDoc != null && (semver.eq(latestMdVer, currentVer) || semverDiff(latestMdVer, currentVer) === 'patch')) {
              fs.remove(latestMdDoc)
              .then(() => { return fs.outputFile(`${vueCompFilePath}-${currentVer}.md`, mdTemplate) })
              .then(() => console.log(`Overwrote documentation for ${vueCompName}. ${(semver.lt(latestMdVer, currentVer)) ? `Updated to version ${currentVer} from ${latestMdVer}` : ''}`))
              .catch((createErr) => {
                console.log(`Error while trying to replace markdown documentation file ${latestMdDoc} with ${vueCompFilePath}-${currentVer}.md:\n${createErr}`)
                process.exit(1)
              })
            }
            // archive the previous markdown documentation if the update is a major or minor change
            else if (semverDiff(latestMdVer, currentVer) === 'major' || semverDiff(latestMdVer, currentVer) === 'minor') {
              fs.outputFile(`${vueCompFilePath}-${currentVer}.md`, mdTemplate)
              .then(() => console.log(`Archived markdown file for ${vueCompName}, version ${latestMdVer}. Updated to version ${currentVer}`))
              .catch((createErr) => {
                console.log(`Error while trying to create markdown documentation file ${vueCompFilePath}-${currentVer}.md:\n${createErr}`)
                process.exit(1)
              })
            }
          }
  
          // In all cases create the proper <component name>.md file for most recent version
          fs.outputFile(`${vueCompFilePath}.md`, mdTemplate)
          .then(() => console.log(`Successfully created ${vueCompName}.md`))
          .catch((createErr) => {
            console.log(`Error while creating ${vueCompFilePath}.md:\n${createErr}`)
            process.exit(1)
          })
        })
      })
      .catch(err => {
        console.log(err)
        process.exit(1)
      })
    })
  }
)


// take json object returned from vue-docgen-api and create markdown template
function createMarkdownTemplate(file, vueObj) {

  let json2mdTemplate = [], mdTablesTemplate;
  
  mdTablesTemplate = buildTables(vueObj)
  
  if(mdTablesTemplate.length > 0) {
    json2mdTemplate = json2mdTemplate.concat(mdTablesTemplate)
  }

  return json2md(json2mdTemplate)
}

// build tables for Vue props, methods, events, and slots
function buildTables(vueObj) {
  let updatedTemplate = [{h3: "<button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>"}]
  let mdTable
  
  mdTable = tableFromProps(vueObj["props"])
  if(mdTable != null) {
    updatedTemplate.push(mdTable)
  }
  
  mdTable = tableFromMethods(vueObj["methods"])
  if(mdTable != null) {
    updatedTemplate.push(mdTable)
  }

  mdTable = tableFromEvents(vueObj["events"])
  if(mdTable != null) {
    updatedTemplate.push(mdTable)
  }
  
  mdTable = tableFromSlots(vueObj["slots"])
  if(mdTable != null) {
    updatedTemplate.push(mdTable)
  }

  return updatedTemplate.length > 1 ? updatedTemplate : []
}

// auxilary function to create table from `props` property of json2md object
function tableFromProps(propsObj) {
  const headers = ["Prop Name", "Type", "Default", "Require", "Description"]
  let rows = []

  // construct rows of table from object of properties
  for(const prop in propsObj) {
    // Don't document properties with `@ignore` tag
    if (propsObj[prop].tags.ignore) {
      continue
    }
    
    let cols = []
    cols.push(`${prop}`) // property name
    cols.push(propsObj[prop]["type"] ? propsObj[prop]["type"]["name"].replace(/\|/g, ',') : 'unknown') // type of the property
    cols.push(propsObj[prop]["defaultValue"] ? propsObj[prop]["defaultValue"]["value"] : 'n/a') // property default value
    cols.push(propsObj[prop]["required"] ? 'true' : 'false') // property is required
    cols.push(`${propsObj[prop]["description"]}`) // description of the property
    
    rows.push(cols)
  }

  return rows.length > 0 ? {table: {headers, rows}} : null
}
  
// auxilary function to create table from `methods` property of json2md object
function tableFromMethods(methodsArr) {
  const headers = ["Method Name", "Type", "Parameters", "Description"]
  let rows = []

  // construct rows of table array of methods
  methodsArr.forEach((method) => {
    let cols = []

    cols.push(method["name"]) // method name
    let paramList = ''
    method["params"].forEach((param) => {
      paramList += `${param["name"]}: ${param["type"]["name"]} - ${param["description"]}\n`
    })
    cols.push(paramList) // list of method parameters
    cols.push(`${method["description"]}`) // description of the method

    rows.push(cols);
  })
  
  return rows.length > 0 ? {table: {headers, rows}} : null
}

// auxilary function to create table from `events` property of json2md object
function tableFromEvents(eventsObj) {
  const headers = ["Event Name", "Type", "Description"]
  let rows = []

  for(const evt in eventsObj) {
    let cols = []

    cols.push(`${evt}`) // event name
    
    let typeList = ''
    eventsObj[evt]["type"]["names"].forEach((type, idx, arr) => {
      typeList += `${type}${arr[idx+1] ? `|` : ''}`
    })
    cols.push(typeList) // list of event types
    cols.push(`${eventsObj[evt]["description"]}`) // description of the event

    rows.push(cols);
  }

  return rows.length > 0 ? {table: {headers, rows}} : null
}

// auxilary function to create table from `slots` property of json2md object
function tableFromSlots(slotsObj) {
  const headers = ["Slot", "Description"]
  let rows = []

  for(const slot in slotsObj) {
    let cols = []
    cols.push(`${slot}`) // name of the slot
    cols.push(`${slotsObj[slot]["description"] || ''}`) // description of the slot

    rows.push(cols)
  }

  return rows.length > 0 ? {table: {headers, rows}} : null
}

// fs.readJson(pkgFilePath, (pkgErr, pkgObj) => {
//   if (pkgErr) {
//     throw new Error(`Can't find package.json file for ${path.basename(file)}:\n${pkgErr}`)
//   }

//   currentVer = pkgObj[`version`]

//   if (!semver.valid(currentVer)) {
//     throw new Error(`Vue component at ${path.basename(file)} doesn't have a valid semver on ${pkgFilePath} file`)
//   }

//   // Build the markdown template from README.md, EXAMPLES.md, and the JSON form of the Vue component files
//   let mdTemplate = ''
//   fs.readFile(readmeFilePath, 'utf8')
//   .then(data => { mdTemplate += data } )
//   .catch(err => { throw new Error(`There was an error reading ${readmeFilePath}:\n${err}`)} )

//   mdTemplate += createMarkdownTemplate(file, vueObj)

//   fs.readFile(examplesFilePath, 'utf8')
//   .then(data => { mdTemplate += data } )
//   .catch(err => { 
//   })
// })