const AttestReporter = require("@deque/attest-reporter").default;
const reporter = new AttestReporter("a11y-report", "./a11y-results/cedar");

describe("Cedar", async () => {
  it("should be accessible homepage", (browser, done) => {
    const devServer = `${browser.globals.devServerURL}`;

    browser
      .url(devServer)
      .waitForElementVisible('#kitchen-sink')
      .analyze(
        {
          rulesetID: "wcag2"
        },
        results => {
          reporter.logTestResult("kitchen-sink", results);
          browser.assert.equal(results.violations.length, 0);
        }
      )
      .end();
  });
});
