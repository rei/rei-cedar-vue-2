module.exports = [
  {
    label: 'Icon',
    selectors: [
      "[data-backstop='cdr-icon-add']",
    ],
    readyEvent: null,
    delay: 100,
    misMatchThreshold: 0.1,
    onReadyScripts: [false, 'hover.js'],
  },
];
