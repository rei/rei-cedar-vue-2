module.exports = [{
  label: 'Anchor Hover',
  selectors: [
    "[data-backstop='cdr-link']",
    "[data-backstop='cdr-link--standalone']",
    "[data-backstop='cdr-link--button']",
  ],
  delay: 0,
  misMatchThreshold: 0.1,
  onReadyScript: 'hover.js',
}];
