module.exports = [
  {
    label: 'Icon Hover',
    selectors: [
      "[data-backstop='cdr-icon-add']",
    ],
    delay: 0,
    misMatchThreshold: 0.1,
    onReadyScript: 'hover.js',
  },
];
