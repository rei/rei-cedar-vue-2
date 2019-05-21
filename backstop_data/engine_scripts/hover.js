module.exports = (chromy, scenario) => {
  if (Object.prototype.hasOwnProperty.call(scenario, 'hoverSelector')) {
    const waitTime = scenario.hoverWait || 0;
    const hoverSelector = scenario.selectors[0];
    chromy
      .wait(hoverSelector)
      .rect(hoverSelector)
      .result((rect) => {
        const left = rect.left + 1;
        const top = rect.top + 1;
        chromy.mouseMoved(left, top);
      })
      .sleep(waitTime);
  }
};
