module.exports = function (chromy, scenario, vp) {
  chromy
    .rect(scenario.selectors[0])
    .result((rect) => {
      chromy.mouseMoved(rect.left, rect.top);
    });
};
