// utilities
var _ = require('lodash');
var glob = require('glob');

// variables
var scenarios = [];
var defs = [];

// get backstop definition files and concat the contents
var files = glob.sync('./src/**/*.backstop.js');
files.forEach(function (file) {
    defs = defs.concat(require(file));
});


function createSelectorObj(def, selector, onReadyScript) {
    var rObj = {};
    _.forOwn(def, function (value, key) {
        if (key === "selectors") {
            rObj[key] = [selector];
        } else if (key === "onReadyScripts") {
            return;
        } else {
            rObj[key] = value;
        }
    });
    if (onReadyScript) {
        rObj.label = def.label + "_" + onReadyScript;
        rObj.onReadyScript = onReadyScript;
    }
    return rObj;
}

defs.forEach(function (def) {
    def.url = 'http://localhost:8080/';
    def.selectors.forEach(function (selector, i) {
        if (_.has(def, 'onReadyScripts')) {
            def.onReadyScripts.forEach(function (script) {
                scenarios.push(createSelectorObj(def, selector, script));
            });
        } else {
            scenarios.push(createSelectorObj(def, selector));
        }
    });
});

module.exports = {
    "id": "cedar",
    "viewports": [
        {
            "name": "phone",
            "width": 320,
            "height": 480
        },
        {
            "name": "tablet_v",
            "width": 568,
            "height": 1024
        },
        {
            "name": "tablet_h",
            "width": 1024,
            "height": 768
        }
    ],
    "scenarios": scenarios,
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "casper_scripts": "backstop_data/casper_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
    },
    "casperFlags": [],
    "engine": "phantomjs",
    "report": ["browser"],
    "debug": false
};