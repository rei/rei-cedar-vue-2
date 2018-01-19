const path = require('path')
const util = require('util')
const fs = require('fs')
const json2md = require('json2md')
const vueDocgen = require('vue-docgen-api')
const glob = require('glob')

const PROPS = 'props'
const METHODS = 'methods'
const EVENTS = 'events'
const SLOTS = 'slots'

// Add convert for markdown anchor
json2md.converters.anchor = (anchor, json) => {
  if (!anchor.text)
    return "";
  
  return `[${anchor.text}](${anchor.source})`;
};

// pull in *.vue files from directory
glob('src/+(components|compositions|bundles)/**/*.vue', {ignore: ['**/node_modules/**', '**/examples/**']}, (err, files) => {
  if(err) console.log(err);

  // convert *.vue files into JSON objects then convert to *.md files
  files.forEach((file) => {
    const mdTemplate = createMarkdownTemplate(file)
    console.log(mdTemplate)

    // const start = file.lastIndexOf('/') + 1, end = file.lastIndexOf('.')
    // const compName = file.slice(start, end)
    // console.log(file.slice(start));
  })
})

// take json object returned from vue-docgen-api and create markdown template
function createMarkdownTemplate(file) {
  const vueObj = vueDocgen.parse(file)
  let json2mdTemplate = [], mdTablesTemplate;
  
  json2mdTemplate = json2mdTemplate.concat([
    {h2: `${vueObj.displayName}`},
    {p: `${file}`},
    {p: `${vueObj.description}`}
  ])

  mdTablesTemplate = buildTables(vueObj)
  if(mdTablesTemplate.length > 0) {
    json2mdTemplate.concat(mdTablesTemplate)
  }

  return json2md(json2mdTemplate)
}

function buildTables(vueObj) {
    let updatedTemplate = [{h3: "Props, Methods, Events, Slots"}], mdTable
  
  mdTable = tableFromProps(vueObj["props"])
  if(mdTable !== null) {
    updatedTemplate += mdTable
  }
  
  mdTable = tableFromMethods(vueObj["methods"])
  if(mdTable !== null) {
    updatedTemplate += mdTable
  }
  
  mdTable = tableFromEvents(vueObj["events"])
  if(mdTable !== null) {
    updatedTemplate += mdTable
  }
  
  mdTable = tableFromSlots(vueObj["slots"])
  if(mdTable !== null) {
    updatedTemplate += mdTable
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
    cols.push(`${propsObj[prop]["type"]["name"]}`) // type of the property
    cols.push(propsObj[prop]["defaultValue"] ? propsObj[prop]["defaultValue"]["value"] : '') // property default value
    cols.push(propsObj[prop]["required"] ? 'true' : 'false') // property is required
    cols.push(propsObj[prop]["description"] || '') // description of the property

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
      paramList += `${param["name"]}: ${param["type"]["name"] || ''} - ${param["description"] || ' '}\n`
    })
    cols.push(paramList) // list of method parameters
    cols.push(method["description"] || '') // description of the method

    rows.push(cols);
  })

  return {table: {headers, rows}}
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
    cols.push(eventsObj[evt]["descritpion"] || '') // description of the event

    rows.push(cols);
  }

  return {table: {headers, rows}}
}

// auxilary function to create table from `slots` property of json2md object
function tableFromSlots(slotsObj) {
  const headers = ["Slot", "Description"]
  let rows = []

  for(const slot in slotsObj) {
    let cols = []
    cols.push(`${slot}`) // name of the slot
    cols.push(slotsObj[slot]["description"]) // description of the slot

    rows.push(cols)
  }

  return {table: {headers, rows}}
}
