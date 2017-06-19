module.exports = [{
  label: 'Anchor',
  selectors: [
    "[data-backstop='cdr-link']",
    "[data-backstop='cdr-link--standalone']",
    "[data-backstop='cdr-link--button']",
  ],
  readyEvent: null,
  delay: 100,
  misMatchThreshold: 0.1,
  onReadyScripts: [false, 'hover.js'],
}];
