module.exports = (chromy, scenario, vp) => {
  const { hoverSelector } = scenario;
  const waitTime = scenario.hoverWait || 0;

  if (hoverSelector) {
    chromy
      .wait(hoverSelector)
      .rect(hoverSelector)
      .result((rect) => {
        chromy.mouseMoved(rect.left, rect.top);
        chromy.wait(waitTime);
      });
  }
};
