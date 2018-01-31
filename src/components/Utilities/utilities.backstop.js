module.exports = [
  {
    label: 'Utility classes',
    selectors: [
      '[data-backstop="a11y-utilities"]',
      '[data-backstop="visibility-utilities"]',
      '[data-backstop="align-utilities"]',
      '[data-backstop="inline-space-utilities"]',
      '[data-backstop="inset-space-utilities"]',
      '[data-backstop="stack-space-utilities"]',
      '[data-backstop="utility-container"]',
    ],
    focusSelectors: [
      '[data-backstop="a11y-skip-link"] > a',
    ],
  },
];
