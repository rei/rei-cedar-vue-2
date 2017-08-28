module.exports = (chromy, scenario, vp) => {
  chromy
    .visible(scenario.selectors[0])
    .result((isvis) => {
      console.log(isvis);
    })
    .rect(scenario.selectors[0])
    .result((rect) => {
      chromy.mouseMoved(rect.left, rect.top);
    });
};
