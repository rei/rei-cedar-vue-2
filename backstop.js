// utilities
// const _ = require('lodash');
const glob = require('glob');

// variables
const scenariosArr = [];
let defs = [];

// functions for creating scenarios
function createScenario(def) {
  scenariosArr.push(def);
}

function createSelectorScriptScenario(def) {
  // loop through selectors
  // create scenario for each
}

// get backstop definition files and concat the contents
const files = glob.sync('./src/**/*.backstop.js');
files.forEach((file) => {
  defs = defs.concat(require(file));
});

defs.forEach((def) => {
  if (def.selectorScript) {
    // create scenario per selector
  } else {
    // create scenario
  }
  // const locDef = def;
  // locDef.url = 'http://localhost:8080';
  // locDef.readyEvent = null;
  // scenariosArr.push(locDef);
});

module.exports = {
  id: 'cedar',
  viewports: [
    {
      name: 'phone',
      width: 320,
      height: 480,
    },
    {
      name: 'tablet_v',
      width: 568,
      height: 1024,
    },
    {
      name: 'tablet_h',
      width: 1024,
      height: 768,
    },
    {
      name: 'desktop',
      width: 1920,
      height: 1080,
    },
  ],
  scenarios: scenariosArr,
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    engine_scripts: 'backstop_data/engine_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  asyncCaptureLimit: 5,
  engine: 'chrome',
  report: ['browser'],
  debug: false,
  debugWindow: false,
};
