const path = require('path')
const semverDiff = require('semver-diff')
const semver = require('semver')
const fs = require('fs-extra')
const json2md = require('json2md')
const vueDocgen = require('vue-docgen-api')
const glob = require('glob')

// Add convert for markdown anchor
json2md.converters.anchor = (anchor, json) => {
  if (!anchor.text)
    return "";
  
  return `[${anchor.text}](${anchor.source})`;
};

// pull in *.vue files from directory
glob('src/+(components|compositions)/**/*.vue', {ignore: ['**/node_modules/**', '**/examples/**', '**/demos/**']}, (compErr, files) => {
  if(compErr)
    throw new Error(`Error while trying to find single file Vue components:\n${compErr}`)

  // convert *.vue files into JSON objects then convert to *.md files
  files.forEach((file) => {
    console.log(`Processing file: ${file}\n`)
    const vueObj = vueDocgen.parse(file)
    
    // Determine version of current raw vue component
    const currentVer = `${vueObj["tags"] && vueObj["tags"]["version"] ? vueObj["tags"]["version"][0]["description"] : ''}`

    if (!semver.valid(currentVer)) 
      throw new Error(`Vue component at ${file} doesn't have a valid semver @version tag`)

    const mdTemplate = createMarkdownTemplate(file, vueObj)

    const startFileName = file.lastIndexOf('/') + 1, endFileName = file.lastIndexOf('.')
    const vueCompName = file.slice(startFileName, endFileName)
    const vueCompDir = file.slice(0, startFileName)

    let latestMdDoc = null, latestMdVer = '0.0.0'
    
    // pull in the markdown documentation files and their NPM versions
    glob(`${vueCompDir + vueCompName}*.md`, (mdFileErr, mdFiles) => {
      if (mdFileErr) 
        throw new Error(`Error while trying to find markdown documentation files in directory ${vueCompDir}:\n${mdFileErr}`)

      // no markdown documentation file exists yet, create one
      if (mdFiles.length == 0) {
        fs.outputFile(`${vueCompDir + vueCompName}-${currentVer}.md`, mdTemplate)
        .then(() => console.log(`No existing markdown file for ${vueCompName}. Creating one at ${vueCompDir + vueCompName}-${currentVer}.md`))
        .catch((createErr) => {
          if (createErr)
            throw new Error(`Error while trying to create markdown documentation file ${vueCompDir + vueCompName}-${currentVer}.md:\n${createErr}`)
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
          .then(() => fs.outputFile(`${vueCompDir + vueCompName}-${currentVer}.md`, mdTemplate))
          .then(() => console.log(`Overwrote documentation for ${vueCompName}. ${(semver.lt(latestMdVer, currentVer)) ? `Updated to version ${currentVer} from ${latestMdVer}` : ''}`))
          .catch((createErr) => {
            if (createErr)
                throw new Error(`Error while trying to replace markdown documentation file ${latestMdDoc} with ${vueCompDir + vueCompName}-${currentVer}.md:\n${createErr}`)
          })
        }
        // archive the previous markdown documentation if the update is a major or minor change
        else if (semverDiff(latestMdVer, currentVer) === 'major' || semverDiff(latestMdVer, currentVer) === 'minor') {
          fs.outputFile(`${vueCompDir + vueCompName}-${currentVer}.md`, mdTemplate)
          .then(() => console.log(`Archived markdown file for ${vueCompName}, version ${latestMdVer}. Updated to version ${currentVer}`))
          .catch((createErr) => {
            if (createErr)
              throw new Error(`Error while trying to create markdown documentation file ${vueCompDir + vueCompName}-${currentVer}.md:\n${createErr}`)
          })
        }
      }

      // In all cases create the proper <component name>.md file for most recent version
      fs.outputFile(`${vueCompDir + vueCompName}.md`, mdTemplate)
      .then(() => console.log(`Successfully created ${vueCompName}.md`))
      .catch((createErr) => {
        if(createErr)
          throw new Error(`Error while creating ${vueCompDir + vueCompName}.md:\n${createErr}`)
      })
    })
  })
})

// take json object returned from vue-docgen-api and create markdown template
function createMarkdownTemplate(file, vueObj) {

  let json2mdTemplate = [], mdTablesTemplate;
  
  json2mdTemplate = json2mdTemplate.concat([
    {h2: `${vueObj.displayName}`},
    {p: `${file}`},
    {p: `${vueObj.description}`}
  ])

  mdTablesTemplate = buildTables(vueObj)
  
  if(mdTablesTemplate.length > 0) {
    json2mdTemplate = json2mdTemplate.concat(mdTablesTemplate)
  }

  return json2md(json2mdTemplate)
}

// build tables for Vue props, methods, events, and slots
function buildTables(vueObj) {
  let updatedTemplate = [{h3: "Props, Methods, Events, Slots"}]
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
    cols.push(propsObj[prop]["type"] ? propsObj[prop]["type"]["name"] : 'unknown') // type of the property
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