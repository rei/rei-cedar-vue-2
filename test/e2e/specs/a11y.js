module.exports = {
  'Tenon tests': (browser) => {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000);
  },
  'Check Tenon a11y': (browser) => {
    browser
      .tenon();
  },
  after: (browser) => {
    browser.end();
  },
};
