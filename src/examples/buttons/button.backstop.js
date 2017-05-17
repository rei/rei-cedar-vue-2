module.exports = [
  {
    label: 'Button',
    selectors: [
      "[data-backstop='cdr-button']",
      "[data-backstop='cdr-button--secondary']",
      "[data-backstop='cdr-button--alternate']",
      "[data-backstop='cdr-button--secondary-alternate']",
      "[data-backstop='cdr-button--link-standalone']",
    ],
    readyEvent: null,
    delay: 100,
    misMatchThreshold: 0.1,
    onReadyScripts: [false, 'hover.js', 'disabled.js'],
  },
];
