module.exports = [
  {
    label: 'Form',
    selectors: [
      "[data-backstop='cdr-form']",
    ],
    readyEvent: null,
    delay: 100,
    misMatchThreshold: 0.1,
    onReadyScripts: [false, 'hover.js'],
  },
];
