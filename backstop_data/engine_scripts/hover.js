module.exports = (chromy, scenario, vp) => {
  const { hoverSelector } = scenario;
  const waitTime = scenario.hoverWait || 0;

  if (hoverSelector) {
    chromy
      .wait(hoverSelector)
      .rect(hoverSelector)
      .result((rect) => {
        const midX = rect.left + (rect.width / 2);
        const midY = rect.top + (rect.height / 2);
        chromy.mouseMoved(midX, midY);
        chromy.wait(waitTime);
      });
  }
};
