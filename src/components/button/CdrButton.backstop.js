module.exports = [
  {
    label: 'Button',
    selectors: [
      '[data-backstop="cdr-buttons"]',
    ],
    focusSelectors: [
      '[data-backstop="cdr-button--large"]',
    ],
    hoverSelectors: [
      '[data-backstop="cdr-button--large"]',
      '[data-backstop="cdr-button--large disabled"]',
      '[data-backstop="cdr-button--large anchor"]',
      '[data-backstop="cdr-button--large secondary"]',
      '[data-backstop="cdr-button--large secondary disabled"]',
      '[data-backstop="cdr-button--small secondary anchor"]',
    ],
  },
];
