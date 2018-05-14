const path = require('path')
const semverDiff = require('semver-diff')
const semver = require('semver')
const fs = require('fs-extra')
const json2md = require('json2md')
const vueDocgen = require('vue-docgen-api')

// Add convert for markdown anchor
json2md.converters.anchor = (anchor, json) => {
  if (!anchor.text) {
    return "";
  }

  return `[${anchor.text}](${anchor.source})`;
};

/**
 * convert <cedar component>.vue file into JSON object then convert to markdown file
 * @param {String} file -- file path of raw Vue component file
 * @param {Object} info -- packag.json
 */
function docsBuild(file, info) {
  console.log(`Processing file: ${file}\n`)
  const vueObj = vueDocgen.parse(file)

  let compDataObj = {
    "readme": '',
    "examples": '',
    "tmplTblData": '',
    "version": '',
  }

  // calculate associated component names and paths
  const vueCompName = path.basename(file,'.vue')
  const vueCompDir = path.dirname(file)
  const vueCompFilePath = vueCompDir + path.sep + vueCompName
  const BASE_VERSION = '0.0.0'
  let latestMdDoc = null, latestMdVer = BASE_VERSION

  // Determine version of current raw vue component based on its associated package.json file
  const currentDir = path.dirname(file) + path.sep
  const readmeFilePath = `${currentDir}README.md`
  const examplesFilePath = `${currentDir}EXAMPLES.md`
  const compDataHistoryFilePath = `${currentDir}build${path.sep}component-data.json`
  let compDataHistory = {"name": `${vueCompName}`, "versions": []}
  const currentVer = info.version
  compDataObj.version = currentVer

  // read in README markdown file
  const readmeProm = fs.readFile(readmeFilePath, 'utf8')
  .then( readmeData => { compDataObj.readme = readmeData })
  .catch( readmeErr => {
    console.log(`There was an error reading README markdown file ${readmeFilePath}:\n${readmeErr}`)
    process.exit(1)
  })
    
  // create data objects for component properties, events, methods, and slots
  const tblProm = new Promise((resolve, reject) => {
    resolve(createMarkdownTemplate(vueObj))
  })
  .then( tmplTblData => { compDataObj.tmplTblData = tmplTblData })
  .catch( err => {
    console.log(`Error while trying to create markdown tables:\n${err}`)
  })

  // read in EXAMPLES markdown file
  const exampleProm = fs.readFile(examplesFilePath, 'utf8')
  .then( examplesData => { compDataObj.examples = examplesData })
  .catch( examplesErr => {
    if (`${examplesErr}`.indexOf('ENOENT') > -1) {
      console.log(`EXAMPLES.md doesn't exist for ${currentDir}`)
    }
    else {
      console.log(`${examplesErr}`)
      process.exit(1)
    }
  })

  // After all promises complete, add new component data object to history of component
  // If current version is in history array, replace that element with current 
  Promise.all([readmeProm, tblProm, exampleProm])
  .then(() => {
    let versionPresent = -1
    versionPresent = compDataHistory.versions.findIndex((element) => {
      return element.version === compDataObj.version
    })
    versionPresent == -1 ? compDataHistory.versions.unshift(compDataObj) : 
      compDataHistory.versions[versionPresent] = compDataObj

    return fs.outputJSON(compDataHistoryFilePath, compDataHistory, {spaces: '\t'})
  })
  .catch( err => {
    console.log(`Problem saving component history for ${vueCompName}:\n${err}`)
    process.exit(1)
  })
}

/**
 * takes JSON object of Vue component and creates Cedar Data Object
 * @param {Object} vueObj -- JSON object returned by vue-docgen-api library
 * @returns {Object} -- Object representing specific Cedar Data Object
 */
function createAPIObject(vueObj) {

}

/**
 * take json object and create markdown template
 * @param {Object} vueObj -- JSON object returned by vue-docgen-api library
 * @returns {String} -- JSON object converted to markdown string
 */
function createMarkdownTemplate(vueObj) {

  let json2mdTemplate = [], mdTablesTemplate;
  
  mdTablesTemplate = buildTables(vueObj)
  
  if(mdTablesTemplate.length > 0) {
    json2mdTemplate = json2mdTemplate.concat(mdTablesTemplate)
  }

  return json2md(json2mdTemplate)
}

/**
 * build tables for Vue props, methods, events, and slots
 * @param {Object} vueObj -- JSON object returned by vue-docgen-api library
 * @returns {Array} -- array of objects representing different parts of markdown template tables
 */
function buildTables(vueObj) {
  let updatedTemplate = [{h3: "<button class='title'>PROPS, METHODS, EVENTS, SLOTS</button>"}]
  let mdTable
  
  mdTable = tableFromProps(vueObj["props"])
  if (mdTable != null) {
    updatedTemplate.push(mdTable)
  }
  
  mdTable = tableFromMethods(vueObj["methods"])
  if (mdTable != null) {
    updatedTemplate.push(mdTable)
  }

  mdTable = tableFromEvents(vueObj["events"])
  if (mdTable != null) {
    updatedTemplate.push(mdTable)
  }
  
  mdTable = tableFromSlots(vueObj["slots"])
  if (mdTable != null) {
    updatedTemplate.push(mdTable)
  }

  return updatedTemplate.length > 1 ? updatedTemplate : []
}

/**
 * build data objects for Vue props, methods, events, and slots
 * @param {Object} vueObj -- JSON object returned by vue-docgen-api library
 * @returns {Object} -- obJect representing different parts of component API
 */
function buildAPIs(vueObj) {
  const funcArray = [propsAPIObject, methodsAPIObject, eventsAPIObject, slotsAPIObject]

  funcArray.reduce((apiObj, curFn) => {
    const obj = curFn(vueObj)
    if (obj !== null) {
      Object.assign(apiObj, obj)
    }
    return apiObj
  }, {})
}

/** 
 * auxilary function to create table from `props` property of json2md object
 * @param {Object} propsObj -- object representing properties of a Cedar component
 * @returns {Object} -- object representing markdown table
 */
function tableFromProps(propsObj = {}) {
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
  

/**
 * Create object representing component props
 * @param {Object} -- JSON object from vue-docgen-api library
 * @returns {Object} -- Object for component props that goes into Cedar Data Object
 */
function propsAPIObject(vueObj) {
  const propsObj = vueObj["props"] || {}
  let props = []
  
  // construct array of objects for props
  for (const prop in probsObj) {
    
    if (probsObj.hasOwnProperty(prop)) {
      // Don't document properties with `@ignore` tag
      if (propsObj[prop].tags.ignore) {
        continue
      }

      // object representing a single prop
      const ele = {
        "name": `${prop}`,
        "type": propsObj[prop]["type"] ? propsObj[prop]["type"]["name"].replace(/\|/g, ',') : 'unknown',
        "default": propsObj[prop]["defaultValue"] ? propsObj[prop]["defaultValue"]["value"] : 'n/a',
        "description": `${propsObj[prop]["description"]}`
      }

      props.push(ele)
    }
  }
  return props.length > 0 ? {props} : null
}

/**
 * auxilary function to create table from `methods` property of json2md object
 * @param {Array} methodsArr -- array representing the public methods of a Cedar component
 * @returns {Object} -- object representing markdown table
*/
function tableFromMethods(methodsArr = []) {
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

/**
 * Create object representing component public methods
 * @param {Object} -- JSON object from vue-docgen-api library
 * @returns {Object} -- Object for component methods that goes into Cedar Data Object
 */
function methodsAPIObject(vueObj) {
  const methodsArr = vueObj["methods"] || []
  let methods = []
  
  // construct array of objects for public methods
  methodsArr.forEach((method) => {
    const ele = {
      "name": `${method["name"]}`,
      "parameters": `${method["params"].reduce((paramList, param) => {
          paramList += `${param["name"]}: ${param["type"]["name"]} - ${param["description"]}\n`
      }, '')}`,
      "description": `${method["description"]}`
    }
    methods.push(ele)
  })
  return methods.length > 0 ? {methods} : null
}

/**
 * auxilary function to create table from `events` property of json2md object
 * @param {Object} eventsObj -- object representing events attached to Cedar component
 * @returns {Object} -- object representing markdown table
 */
function tableFromEvents(eventsObj = {}) {
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

/**
 * Create object representing component events
 * @param {Object} -- JSON object from vue-docgen-api library
 * @returns {Object} -- Object for component events that goes into Cedar Data Object
 */
function eventsAPIObject(vueObj) {
  const eventsObj = vueObj["events"] || {}
  let events = []

  for (const evt in eventsObj) {
    if (eventsObj.hasOwnProperty(evt)) {
      const ele = {
        "name": `${evt}`,
        "type": `${eventsObj[evt]["type"]["names"].reduce((typeList, type, idx, arr) => {
          typeList += `${type}${arr[idx+1] ? `|` : ''}`
        }, '')}`,
        "description": `${eventsObj[evt]["description"]}`
      }
      events.push(ele)
    }
  }
  return events.length > 0 ? {events} : null
}

/**
 * auxilary function to create table from `slots` property of json2md object
 * @param {Object} slotsObj -- object representing the inner content of a Cedar component
 * @returns {Object} -- object representing markdown table
 */
function tableFromSlots(slotsObj = {}) {
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

/**
 * Create object representing component slots
 * @param {Object} -- JSON object from vue-docgen-api library
 * @returns {Object} -- Object for component slots that goes into Cedar Data Object
 */
function slotsAPIObject(vueObj) {
  slotsObj = vueObj["slots"] || {}
  let slots = []
  
  for (const slot in slotsObj) {
    if (slotsObj.hasOwnProperty(slot)) {
      const ele = {
        "name": `${slot}`,
        "description": `${slotsObj[slot]["description"] || ''}`
      }
      slots.push(ele)
    }
  }
  return slots.length > 0 ? {slots} : null
}

module.exports = docsBuild