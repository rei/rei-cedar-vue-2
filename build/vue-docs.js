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
glob('src/+(components|compositions)/**/*.vue', {ignore: ['**/node_modules/**', '**/examples/**', '**/demos/**', '**/Utilities/**']}, (compErr, files) => {
  if(compErr) {
    throw new Error(`Error while trying to find single file Vue components:\n${compErr}`)
  }

  // convert *.vue files into JSON objects then convert to *.md files
  files.forEach((file) => {
    console.log(`Processing file: ${file}\n`)
    const vueObj = vueDocgen.parse(file)
    
    // Determine version of current raw vue component based on its associated package.json file
    const currentDir = path.resolve(__dirname, '..', `${path.dirname(file)}`) + path.sep
    let currentVer = ""
    const pkgFilePath = `${currentDir}package.json`
    const readmeFilePath = `${currentDir}README.md`
    const examplesFilePath = `${currentDir}EXAMPLES.md`

    fs.readJson(pkgFilePath, (pkgErr, pkgObj) => {
      if (pkgErr) {
        throw new Error(`Can't find package.json file for ${path.basename(file)}:\n${pkgErr}`)
      }
    
      currentVer = pkgObj[`version`]
    
      if (!semver.valid(currentVer)) {
        throw new Error(`Vue component at ${path.basename(file)} doesn't have a valid semver on ${pkgFilePath} file`)
      }

      // Build the markdown template from README.md, EXAMPLES.md, and the JSON form of the Vue component files
      let mdTemplate = ''
      fs.readFile(readmeFilePath, 'utf8')
      .then(data => { mdTemplate += data } )
      .catch(err => { throw new Error(`There was an error reading ${readmeFilePath}:\n${err}`)} )

      mdTemplate += createMarkdownTemplate(file, vueObj)

      fs.readFile(examplesFilePath, 'utf8')
      .then(data => { mdTemplate += data } )
      .catch(err => { 
        if (err) {
          if (`${err}`.indexOf('ENOENT') > -1) {
            console.log(`EXAMPLES.md doesn't exist for ${currentDir}`)
          }
          else {
            throw new Error(err)
          }
        }
      })

      const vueCompName = path.basename(file,'.vue')
      const vueCompDir = path.dirname(file)

      let latestMdDoc = null, latestMdVer = '0.0.0'
      
      // pull in the markdown documentation files and their NPM versions
      glob(`${vueCompDir + path.sep + vueCompName}*.md`, (mdFileErr, mdFiles) => {
        if (mdFileErr) {
          throw new Error(`Error while trying to find markdown documentation files in directory ${vueCompDir}:\n${mdFileErr}`)
        }

        // no markdown documentation file exists yet, create one
        if (mdFiles.length == 0) {
          fs.outputFile(`${vueCompDir + path.sep + vueCompName}-${currentVer}.md`, mdTemplate)
          .then(() => console.log(`No existing markdown file for ${vueCompName}. Creating one at ${vueCompDir + path.sep + vueCompName}-${currentVer}.md`))
          .catch((createErr) => {
            if (createErr)
              throw new Error(`Error while trying to create markdown documentation file ${vueCompDir + path.sep + vueCompName}-${currentVer}.md:\n${createErr}`)
          })
        }
        else {
          // find the most recent markdown documentation file based on NPM version
          mdFiles.forEach((mdFile) => {
            const starMdVer = mdFile.lastIndexOf(`${vueCompName}-`) + vueCompName.length + 1, endMdVer = mdFile.lastIndexOf('.')
            const mdFileVer = mdFile.slice(starMdVer, endMdVer)

            if (semver.valid(mdFileVer) && semver.lt(latestMdVer, mdFileVer)) {
              latestMdVer = mdFileVer
              latestMdDoc = mdFile
            }
          })
          console.log(`Latest markdown documentation version for ${vueCompName}: ${latestMdVer}`)

          // overwrite most recent markdown documentation if the update is a patch
          if (semver.eq(latestMdVer, currentVer) || semverDiff(latestMdVer, currentVer) === 'patch') {
            fs.remove(latestMdDoc)
            .then(() => fs.outputFile(`${vueCompDir + path.sep + vueCompName}-${currentVer}.md`, mdTemplate))
            .then(() => console.log(`Overwrote documentation for ${vueCompName}. ${(semver.lt(latestMdVer, currentVer)) ? `Updated to version ${currentVer} from ${latestMdVer}` : ''}`))
            .catch((createErr) => {
              if (createErr) {
                throw new Error(`Error while trying to replace markdown documentation file ${latestMdDoc} with ${vueCompDir + path.sep + vueCompName}-${currentVer}.md:\n${createErr}`)                
              }
            })
          }
          // archive the previous markdown documentation if the update is a major or minor change
          else if (semverDiff(latestMdVer, currentVer) === 'major' || semverDiff(latestMdVer, currentVer) === 'minor') {
            fs.outputFile(`${vueCompDir + path.sep + vueCompName}-${currentVer}.md`, mdTemplate)
            .then(() => console.log(`Archived markdown file for ${vueCompName}, version ${latestMdVer}. Updated to version ${currentVer}`))
            .catch((createErr) => {
              if (createErr) {
                throw new Error(`Error while trying to create markdown documentation file ${vueCompDir + path.sep + vueCompName}-${currentVer}.md:\n${createErr}`)
              }
            })
          }
        }

        // In all cases create the proper <component name>.md file for most recent version
        fs.outputFile(`${vueCompDir + path.sep + vueCompName}.md`, mdTemplate)
        .then(() => console.log(`Successfully created ${vueCompName}.md`))
        .catch((createErr) => {
          if(createErr) {
            throw new Error(`Error while creating ${vueCompDir + path.sep + vueCompName}.md:\n${createErr}`)
          }
        })
      })
    })
  })
})

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