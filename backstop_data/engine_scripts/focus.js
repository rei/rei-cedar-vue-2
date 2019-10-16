module.exports = async (page, scenario) => {
  if (Object.prototype.hasOwnProperty.call(scenario, 'focusSelector')) {
    const focusSelector = scenario.selectors[0];
    await page.waitFor(focusSelector);
    await page.focus(focusSelector);
  }
};
