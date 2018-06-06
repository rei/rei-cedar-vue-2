module.exports = (chromy, scenario) => {
  if (Object.prototype.hasOwnProperty.call(scenario, 'focusSelector')) {
    const focusSelector = scenario.selectors[0];
    const waitTime = scenario.focusWait || 0;
    chromy.evaluate(`_selector = '${focusSelector}'`);
    chromy
      .wait(focusSelector)
      .evaluate(() => {
        document.querySelector(_selector).focus(); // eslint-disable-line
      })
      .wait(waitTime);
  }
};
