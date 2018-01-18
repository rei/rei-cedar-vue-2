const path = require('path')
const fs = require('fs')
const json2md = require('json2md')
const vueDocgen = require('vue-docgen-api')
const glob = require('glob')

let json2mdTemplate = [];

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
  files.forEach((file, idx) => {
    let vueObj = vueDocgen.parse(file);
    
    json2mdTemplate.concat([
      {h2: `${vueObj.displayName}`},
      {anchor: {text: `${file}`, source: ``}},
      {p: `${vueObj.description}`},
      {h3: "Props, Methods, Events, Slots"}
    ])
  })
})


// auxilary function to create table from `props` property of json2md object
function tableFromProps(propsObj) {
  const headers = ["Prop Name", "Type", "Default", "Require", "Description"]
  let rows = []

  // construct rows of table from object of properties
  for(const prop in propsObj) {
    let cols = []
    cols.push(`${prop}`) // property name
    cols.push(prop["type"]["name"]); // type of the property
    cols.push(prop["defaultValue"] ? prop["defaultValue"]["value"] : '') // property default value
    cols.push(prop["required"] ? 'true' : 'false') // property is required
    cols.push(prop["description"] || '') // description of the property

    rows.push(cols)
  }

  return {headers, rows}
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

  return {header, rows}
}

// auxilary function to create table from `events` property of json2md object
function tableFromEvents(eventsObj) {
  const headers = ["Event Name", "Type", "Description"]
  let rows = []

  for(const evt in eventsObj) {
    let cols = []

    cols.push(`${evt}`) // event name
    
    let typeList = ''
    evt["type"]["names"].forEach((type, idx, arr) => {
      typeList += `${type`${arr[idx+1] ? `|` : ''}`}`
    })
    cols.push(typeList) // list of event types
    cols.push(evt["descritpion"] || '') // description of the event
  }
}

// auxilary function to create table from `slots` property of json2md object
function tableFromSlots(vueObj) {

}
