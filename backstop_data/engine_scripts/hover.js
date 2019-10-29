module.exports = async (page, scenario) => {
  if (Object.prototype.hasOwnProperty.call(scenario, 'hoverSelector')) {
    const hoverSelector = scenario.hoverSelector;
    await page.waitFor(hoverSelector);
    await page.hover(hoverSelector);
    if (scenario.wait) {
      await page.waitFor(scenario.wait);
    }
  }
};
