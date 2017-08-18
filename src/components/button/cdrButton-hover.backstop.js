module.exports = [
  {
    label: 'Button Hover',
    selectors: [
      '[data-backstop="cdr-button"]',
      '[data-backstop="cdr-button--secondary"]',
    ],
    delay: 0,
    misMatchThreshold: 0.1,
    onReadyScript: 'hover.js',
  },
];
