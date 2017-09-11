module.exports = (chromy, scenario, vp) => {
  chromy
    .rect(scenario.selectors[0])
    .result((rect) => {
      chromy.mouseMoved(rect.left, rect.top);
    })
    .sleep(500);
};
