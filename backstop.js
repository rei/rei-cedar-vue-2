// utilities
// const _ = require('lodash');
const glob = require('glob');

// variables
const scenariosArr = [];
let defs = [];
const scenarioDefaults = {
  url: 'http://localhost:8080',
  readyEvent: null,
};

// functions for creating scenarios
function createScenario(def) {
  const finalScenario = Object.assign({}, scenarioDefaults, def);
  scenariosArr.push(finalScenario);
}

function createHoverScenario(def) {
  // handle normal selectors
  const normalScenario = Object.assign({}, def);
  delete normalScenario.hoverSelectors;
  createScenario(normalScenario);
  // handle hover selectors
  const hoverScenario = Object.assign({}, def);
  hoverScenario.label = `${hoverScenario.label} Hover`;
  hoverScenario.selectors = [];
  hoverScenario.onReadyScript = 'hover.js';
  const copy = Object.assign({}, hoverScenario);
  delete copy.hoverSelectors;

  hoverScenario.hoverSelectors.forEach((selector) => {
    copy.selectors = [];
    copy.selectors.push(selector);
    createScenario(copy);
  });
}

// get backstop definition files and concat the contents
const files = glob.sync('./src/**/*.backstop.js');
files.forEach((file) => {
  defs = defs.concat(require(file));
});

defs.forEach((def) => {
  console.log(Object.prototype.hasOwnProperty.call(def, 'hoverSelectors'));
  if (Object.prototype.hasOwnProperty.call(def, 'hoverSelectors')) {
    createHoverScenario(def);
  } else {
    createScenario(def);
  }
});

module.exports = {
  id: 'cedar',
  viewports: [
    {
      label: 'phone',
      width: 320,
      height: 480,
    },
    {
      label: 'tablet_v',
      width: 568,
      height: 1024,
    },
    {
      label: 'tablet_h',
      width: 1024,
      height: 768,
    },
    {
      label: 'desktop',
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
