// module.exports = {
//   'Tenon tests': (browser) => {
//     // automatically uses dev Server port from /config.index.js
//     // default: http://localhost:8080
//     // see nightwatch.conf.js
//     const devServer = browser.globals.devServerURL;

//     browser
//       .url(devServer)
//       .waitForElementVisible('#app', 5000);
//   },
//   'Check Tenon a11y': (browser) => {
//     browser
//       .tenon();
//   },
//   after: (browser) => {
//     browser.end();
//   },
// };

module.exports = {
  '@tags': ['accessibility'],
  'Page Is Accessible': function (browser) { // eslint-disable-line func-names
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 10000)
      .axeInject()
      .axeRun('#app', {
        reporter: 'v2',
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'section508'],
        },
      })
      .end();
  },
};
