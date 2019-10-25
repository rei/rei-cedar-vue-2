module.exports = async (page, scenario) => {
  if (Object.prototype.hasOwnProperty.call(scenario, 'focusSelector')) {
    const focusSelector = scenario.focusSelector;
    await page.waitFor(focusSelector);
    await page.focus(focusSelector);
    if (scenario.wait) {
      await page.waitFor(scenario.wait);
    }
  }
};
