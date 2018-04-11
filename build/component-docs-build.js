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

/** 
 * auxilary function to create table from `props` property of json2md object
 * @param {Object} propsObj -- object representing properties of a Cedar component
 * @returns {Object} -- object representing markdown table
 */
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
  
/** 
 * auxilary function to create table from `methods` property of json2md object
 * @param {Array} methodsArr -- array representing the public methods of a Cedar component
 * @returns {Object} -- object representing markdown table
*/
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

/**
 * auxilary function to create table from `events` property of json2md object
 * @param {Object} eventsObj -- object representing events attached to Cedar component
 * @returns {Object} -- object representing markdown table
 */
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

/**
 * auxilary function to create table from `slots` property of json2md object
 * @param {Object} slotsObj -- object representing the inner content of a Cedar component
 * @returns {Object} -- object representing markdown table
 */
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
