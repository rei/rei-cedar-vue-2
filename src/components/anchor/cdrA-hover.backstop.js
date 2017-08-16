module.exports = [{
  label: 'Anchor Hover',
  selectors: [
    "[data-backstop='cdr-link']",
    "[data-backstop='cdr-link--standalone']",
    "[data-backstop='cdr-link--button']",
  ],
  onReadyScript: 'hover.js',
}];
