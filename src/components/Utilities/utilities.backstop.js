module.exports = [
  {
    url: 'http://localhost:3000/#/utilities',
    label: 'Utility classes',
    selectors: [
      '[data-backstop="a11y-utilities"]',
      '[data-backstop="visibility-utilities"]',
      '[data-backstop="align-utilities"]',
      '[data-backstop="utility-container"]',
    ],
    focusSelectors: [
      '[data-backstop="a11y-skip-link"] > a',
    ],
  },
];
