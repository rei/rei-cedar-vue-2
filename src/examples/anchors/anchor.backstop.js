module.exports = [{
  label: 'Anchor',
  selectors: [
    "[data-backstop='cdr-link']",
    "[data-backstop='cdr-link--contrast']",
    "[data-backstop='cdr-link--overlay']",
    "[data-backstop='cdr-link--standalone']",
  ],
  readyEvent: null,
  delay: 100,
  misMatchThreshold: 0.1,
  onReadyScripts: [false, 'hover.js'],
}];
