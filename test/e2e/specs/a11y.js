function runA11yTests(browser, query) {
  // automatically uses dev Server port from /config.index.js
  // default: http://localhost:8080
  // see nightwatch.conf.js
  const devServer = `${browser.globals.devServerURL}?${query}`;

  browser
    .url(devServer)
    .waitForElementVisible('#kitchen-sink', 10000)
    .axeInject()
    .axeRun('#kitchen-sink', {
      reporter: 'v2',
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'section508'],
      },
    })
    .end();
}

module.exports = {
  '@tags': ['accessibility'],
  'Page Is Accessible: Primary Background':function (browser) {
    runA11yTests(browser, 'background=primary');
  },
  // TODO: enable this test once everything is updated
  // 'Page Is Accessible: Secondary Background': function (browser) {
  //   runA11yTests(browser, 'background=secondary')
  // },
};
