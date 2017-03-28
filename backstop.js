// utilities
const _ = require('lodash');
const glob = require('glob');

// variables
const scenarios = [];
let defs = [];

// get backstop definition files and concat the contents
const files = glob.sync('./src/**/*.backstop.js');
files.forEach((file) => {
  defs = defs.concat(require(file));
});


function createSelectorObj(def, selector, onReadyScript) {
  const rObj = {};
  _.forOwn(def, (value, key) => {
    if (key === 'selectors') {
      rObj[key] = [selector];
    } else {
      rObj[key] = value;
    }
  });
  if (onReadyScript) {
    rObj.label = `${def.label}_${onReadyScript}`;
    rObj.onReadyScript = onReadyScript;
  }
  return rObj;
}

defs.forEach((def) => {
  def.url = 'http://localhost:8080';
  if (_.has(def, 'onReadyScripts')) {
    def.selectors.forEach((selector) => {
      def.onReadyScripts.forEach((script) => {
        scenarios.push(createSelectorObj(def, selector, script));
      });
    });
  } else {
    scenarios.push(def);
  }
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
  ],
  scenarios,
  paths: {
    bitmaps_reference: 'backstop_data/bitmaps_reference',
    bitmaps_test: 'backstop_data/bitmaps_test',
    casper_scripts: 'backstop_data/casper_scripts',
    html_report: 'backstop_data/html_report',
    ci_report: 'backstop_data/ci_report',
  },
  casperFlags: [],
  engine: 'phantomjs',
  report: ['browser'],
  debug: false,
};
