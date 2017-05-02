module.exports = [
  {
    label: 'Lists',
    selectors: [
      "[data-backstop='cdr-list--unstyled']",
      "[data-backstop='cdr-list--bulleted']",
    ],
    readyEvent: null,
    delay: 500,
    misMatchThreshold: 0.1,
  },
];
