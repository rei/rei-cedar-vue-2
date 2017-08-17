module.exports = [
  {
    label: 'Button Hover',
    selectors: [
      "[data-backstop='cdr-button']",
      "[data-backstop='cdr-button--secondary']",
    ],
    onReadyScript: 'hover.js',
  },
];
