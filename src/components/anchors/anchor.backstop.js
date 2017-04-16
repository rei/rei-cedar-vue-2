module.exports = [ {
  label: 'Anchor',
  selectors: [
    "[data-backstop='cdr-link']",
    "[data-backstop='cdr-link--standalone']",
  ],
  readyEvent: null,
  delay: 500,
  misMatchThreshold: 0.1,
  onReadyScripts: [ false, 'hover.js' ],
}, ];
