module.exports = [
  {
    label: 'Lists',
    selectors: [
      "[data-backstop='cdr-list--bulleted']",
      "[data-backstop='cdr-list--numbered']",
      "[data-backstop='cdr-list--unstyled']",
      "[data-backstop='cdr-list--menu']",
    ],
    readyEvent: null,
    delay: 500,
    misMatchThreshold: 0.1,
  },
];
