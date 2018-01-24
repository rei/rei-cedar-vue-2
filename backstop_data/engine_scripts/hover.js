module.exports = (chromy, scenario) => {
  if (Object.prototype.hasOwnProperty.call(scenario, 'hoverSelector')) {
    const waitTime = scenario.hoverWait || 0;
    const hoverSelector = scenario.selectors[0];
    chromy
      .wait(hoverSelector)
      .rect(hoverSelector)
      .result((rect) => {
        chromy.mouseMoved(rect.left, rect.top);
      })
      .wait(waitTime);
  }
};
