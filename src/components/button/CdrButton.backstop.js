module.exports = [
  {
    url: 'http://localhost:3000/#/default-buttons',
    label: 'Default Button',
    selectors: [
      '[data-backstop="buttons"]',
    ],
    focusSelectors: [
      '[data-backstop="cdr-button--size"]',
      '[data-backstop="cdr-button--responsive"]',
      '[data-backstop="cdr-button--disabled"]',
      '[data-backstop="cdr-button--anchor"]',
    ],
    hoverSelectors: [
      '[data-backstop="cdr-button--size"]',
      '[data-backstop="cdr-button--responsive"]',
      '[data-backstop="cdr-button--disabled"]',
      '[data-backstop="cdr-button--anchor"]',
    ],
  },
  {
    url: 'http://localhost:3000/#/default-buttons',
    label: 'Responsive Button',
    responsive: true,
    selectors: [
      '[data-backstop="cdr-button--responsive"]',
    ],
  },
  {
    url: 'http://localhost:3000/#/secondary-buttons',
    label: 'Secondary Button',
    selectors: [
      '[data-backstop="buttons"]',
    ],
    focusSelectors: [
      '[data-backstop="cdr-button--secondary"]',
    ],
    hoverSelectors: [
      '[data-backstop="cdr-button--secondary"]',
    ],
  },
  {
    url: 'http://localhost:3000/#/icon-buttons',
    label: 'Icon Button',
    selectors: [
      '[data-backstop="buttons"]',
    ],
    focusSelectors: [
      '[data-backstop="cdr-button--icon"]',
    ],
    hoverSelectors: [
      '[data-backstop="cdr-button--icon"]',
    ],
  },
  {
    url: 'http://localhost:3000/#/full-width-buttons',
    label: 'Full Width Button',
    selectors: [
      '[data-backstop="buttons"]',
    ],
  },
];
