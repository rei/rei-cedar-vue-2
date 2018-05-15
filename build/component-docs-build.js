const path = require('path')
const semverDiff = require('semver-diff')
const semver = require('semver')
const fs = require('fs-extra')
const json2md = require('json2md')
const vueDocgen = require('vue-docgen-api')

const util = require('util')

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
 * @param {Object} info -- package.json
 */
function docsBuild(file, info) {
  console.log(`Processing file: ${file}\n`)
  const vueObj = vueDocgen.parse(file)

  let compDataObj = {
    "api": {},
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

  // create data objects for component properties, events, methods, and slots
  const apiProm = new Promise((resolve, reject) => { resolve(buildAPIs(vueObj)) })
  .then( api => { 
    console.log(`Completed API data object for ${vueCompName}\n`)
    console.log(`${util.inspect(api)}`)
    Object.assign(compDataObj.api, api) 
  })
  .catch( err => { console.log(`Error while trying to create API objects:\n${err}`) })

  // After all promises complete, add new component data object to history of component
  // If current version is in history array, replace that element with current 
  Promise.all([apiProm])
  .then(() => {
    let currVersionIdx = -1
    currVersionIdx = compDataHistory.versions.findIndex((element) => {
      return element.version === compDataObj.version
    })
    currVersionIdx == -1 ? 
      compDataHistory.versions.unshift(compDataObj) :
      compDataHistory.versions[currVersionIdx] = compDataObj

    return fs.outputJSON(compDataHistoryFilePath, compDataHistory, {spaces: '\t'})
  })
  .catch( err => {
    console.log(`Problem saving component history for ${vueCompName}:\n${err}`)
    process.exit(1)
  })
}

/**
 * build data objects for Vue props, methods, events, and slots
 * @param {Object} vueObj -- JSON object returned by vue-docgen-api library
 * @returns {Object} -- obJect representing different parts of component API
 */
function buildAPIs(vueObj) {
  const funcArray = [propsAPIObject, methodsAPIObject, eventsAPIObject, slotsAPIObject]

  const compAPIObj = funcArray.reduce((apiObj, curFn) => {
    const obj = curFn(vueObj)

    if (obj !== null) {
      Object.assign(apiObj, obj)
    }
    return apiObj
  }, {})
  
  return compAPIObj
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
  for (const prop in propsObj) {
    if (propsObj.hasOwnProperty(prop)) {
      // Don't document properties with `@ignore` tag
      if (propsObj[prop].tags.ignore) {
        continue
      }

      // object representing a single prop
      const ele = {
        "name": `${prop}`,
        "type": propsObj[prop]["type"] ? propsObj[prop]["type"]["name"] : 'unknown',
        "default": (propsObj[prop]["defaultValue"] && propsObj[prop]["defaultValue"] !== " ") ? 
          propsObj[prop]["defaultValue"]["value"] : 'n/a',
        "description": `${propsObj[prop]["description"] || 'MISSING DESCRIPTION'}`
      }
      props.push(ele)
    }
  }
  return props.length > 0 ? {props} : null
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
          return paramList
      }, '')}`,
      "description": `${method["description"] || 'MISSING DESCRIPTION'}`
    }
    methods.push(ele)
  })
  return methods.length > 0 ? {methods} : null
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
          return typeList
        }, '')}`,
        "description": `${eventsObj[evt]["description"] || 'MISSING DESCRIPTION'}`
      }
      events.push(ele)
    }
  }
  return events.length > 0 ? {events} : null
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
        "description": `${slotsObj[slot]["description"] || 'MISSING DESCRIPTION'}`
      }
      slots.push(ele)
    }
  }
  return slots.length > 0 ? {slots} : null
}

module.exports = docsBuild