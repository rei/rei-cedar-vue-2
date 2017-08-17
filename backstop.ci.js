const conf = require('./backstop.conf.js');

const scenariosArr = [];

// set def defaults and add to scenario array
conf.defsArr.forEach((def) => {
  const locDef = def;
  locDef.url = 'http://localhost:8080'; // dev server address
  locDef.delay = 0;
  locDef.misMatchThreshold = 0.1;
  locDef.readyEvent = 'mounted';
  scenariosArr.push(locDef);
});

conf.scenarios = scenariosArr;

module.exports = conf;
