const path = require('path')
const semverDiff = require('semver-diff')
const semver = require('semver')
const fs = require('fs')
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
glob('src/+(components|compositions|bundles)/**/*.vue', {ignore: ['**/node_modules/**', '**/examples/**']}, (compErr, files) => {
  if(compErr)
    throw new Error(`Error while trying to find single file components:\n${compErr}`)

  // convert *.vue files into JSON objects then convert to *.md files
  files.forEach((file) => {
    const vueObj = vueDocgen.parse(file)
    
    // Determine version of current raw vue component
    const currentVer = `${vueObj["tags"] && vueObj["tags"]["version"] ? vueObj["tags"]["version"]["descritpion"] : ''}`
    
    if (!semver.valid(currentVer)) 
      throw new Error(`Vue component at ${file} doesn't have a valid semver @version tag specified`)

    const mdTemplate = createMarkdownTemplate(file, vueObj)

    const startFileName = file.lastIndexOf('/') + 1, endFileName = file.lastIndexOf('.')
    const vueCompName = file.slice(startFileName, endFileName)
    const vueCompDir = file.slice(0, startFileName)

    let latestMdDoc = null, latestMdVer = '0.0.0'
    
    // Extract the markdown documentation files and their NPM versions
    glob(`${vueCompDir + vueCompName}-*.md`, (mdFileErr, mdFiles) => {
      if (mdFileErr) 
        throw new Error(`Error while trying to find markdown documentation files:\n${mdFileErr}`)

      // no markdown documentation file exiists yet, create one
      if (mdFiles.length == 0) {
        fs.appendFile(`${vueCompDir + vueCompName}-${currentVer}.md`, mdTemplate, (createErr) => {
          if (createErr)
            throw new Error(`Error while trying to create markdown documentation file ${vueCompDir + vueCompName}-${currentVer}.md:\n${createErr}`)
        })
      } else {
        // find the most recent markdown documentation file based on version
        mdFiles.forEach((mdFile) => {
          const starMdVer = mdFile.lastIndexOf(`${vueCompName}-`) + vueCompName.length + 1, endMdVer = mdFile.lastIndexOf('.')
          const mdFileVer = mdFile.slice(starMdVer, endMdVer)

          if (semver.valid(mdFileVer) && semver.lt(latestMdVer, mdFileVer)) {
            latestMdVer = mdFileVer
            latestMdDoc = mdFile
          }
        })

        // overwrite most recent markdown documentation if it's less than a patch difference away from vue component's version
        if (semver.eq(latestMdVer, currentVer) || semverDiff(lastestMdVer, currentVer) === 'patch') {
          fs.unlink(latestMdDoc, (delErr) => {
            if (delErr)
              throw new Error(`Error while trying to close the markdown documentation file ${latestMdDoc}:\n${delErr}`)

            fs.appendFile(`${vueCompDir + vueCompName}-${currentVer}.md`, mdTemplate, (createErr) => {
              if (createErr)
                throw new Error(`Error while trying to create markdown documentation file ${vueCompDir + vueCompName}-${currentVer}.md:\n${createErr}`)
            })
          })
        }
      }
    })
    
    // fs.appendFile(`${vueCompDir + vueCompName}-1.0.0.md`, mdTemplate, (err) => {
    //   if (err) throw err
    // })
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
    let cols = []
    cols.push(`${prop}`) // property name
    cols.push(propsObj[prop]["type"] ? propsObj[prop]["type"]["name"] : 'unkown') // type of the property
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
      typeList += `${type`${arr[idx+1] ? `|` : ''}`}`
    })
    cols.push(typeList) // list of event types
    cols.push(`${eventsObj[evt]["descritpion"]}`) // description of the event

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