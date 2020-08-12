module.exports = async (page, scenario) => {
  if (Object.prototype.hasOwnProperty.call(scenario, 'hoverSelector')) {
    const hoverSelector = scenario.hoverSelector;
    await page.waitFor(hoverSelector);
    await page.hover(hoverSelector);
    await page.waitFor(100);
    if (scenario.wait) {
      await page.waitFor(scenario.wait);
    }
  }
};
