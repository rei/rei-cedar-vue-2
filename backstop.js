const glob = require('glob');

const scenariosArr = [];
let defs = [];
const scenarioDefaults = {
  url: 'http://localhost:3000',
  misMatchThreshold: 0.1,
  readyEvent: 'BACKSTOP_READY',
  delay: 500,
  onReadyScript: 'onReady.js',
};

// TODO: use breakpoint tokens for viewport widths
const responsiveViewports =[
  {
    label: 'xs',
    width: 760,
    height: 768,
  },
  {
    label: 'sm',
    width: 800,
    height: 768,
  },
  {
    label: 'md',
    width: 1024,
    height: 768,
  },
  {
    label: 'lg',
    width: 1366,
    height: 768,
  },
];

// functions for creating scenarios
function createScenario(def) {
  const finalScenario = Object.assign({}, scenarioDefaults, def);
  scenariosArr.push(finalScenario);
}

function splitScenario(def, type = '', selectorsArr, extraOptions = {}) {
  const scenario = Object.assign({}, extraOptions, def);
  selectorsArr.forEach((s, idx) => {
    scenario.label = `${def.label} ${type}${idx}`;
    scenario[`${type}Selector`] = true;
    scenario.selectors = [s];
    createScenario(scenario);
  });
}

// get backstop definition files and concat the contents
const files = glob.sync('./src/**/*.backstop.js', { ignore: ['./src/**/node_modules/**'] });

files.forEach((file) => {
  defs = defs.concat(require(file));
});

defs.forEach((def) => {
  const currDef = def;

  if (Object.prototype.hasOwnProperty.call(currDef, 'hoverSelectors')) {
    const { hoverSelectors } = currDef;
    delete currDef.hoverSelectors;
    splitScenario(currDef, 'hover', hoverSelectors);
  }

  if (Object.prototype.hasOwnProperty.call(currDef, 'focusSelectors')) {
    const { focusSelectors } = currDef;
    delete currDef.focusSelectors;
    splitScenario(currDef, 'focus', focusSelectors);
  }
  
  if (Object.prototype.hasOwnProperty.call(currDef, 'responsive')) {
    delete currDef.responsive;
    currDef.viewports = responsiveViewports;
  }

  createScenario(currDef);
});

module.exports = {
  id: 'cedar',
  viewports: [
    {
      label: 'lg',
      width: 1366,
      height: 768,
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
  asyncCaptureLimit: 4,
  asyncCompareLimit: 8,
  puppeteerOffscreenCaptureFix: true,
  engine: 'puppeteer',
  report: ['browser'],
  debug: false,
  debugWindow: false,
};
