module.exports = [
  {
    url: 'http://localhost:3000/#/buttons',
    label: 'Responsive Button',
    responsive: true,
  },
  {
    url: 'http://localhost:3000/#/default-buttons',
    label: 'Default Button',
    selectors: [
      '[data-backstop="buttons"]',
    ],
    focusSelectors: [
      {
        target: '[data-backstop="cdr-button--size"] button',
        capture: '[data-backstop="cdr-button--size"]',
      },
      {
        target: '[data-backstop="cdr-button--disabled"] button',
        capture: '[data-backstop="cdr-button--disabled"]',
      },
      {
        target: '[data-backstop="cdr-button--anchor"] a',
        capture: '[data-backstop="cdr-button--anchor"]',
      },
    ],
    hoverSelectors: [
      {
        target: '[data-backstop="cdr-button--size"] button',
        capture: '[data-backstop="cdr-button--size"]',
      },
      {
        target: '[data-backstop="cdr-button--disabled"] button',
        capture: '[data-backstop="cdr-button--disabled"]',
      },
      {
        target: '[data-backstop="cdr-button--anchor"] a',
        capture: '[data-backstop="cdr-button--anchor"]',
      },
    ],
  },
  {
    url: 'http://localhost:3000/#/secondary-buttons',
    label: 'Secondary Button',
    selectors: [
      '[data-backstop="buttons"]',
    ],
    focusSelectors: [
      {
        target: '[data-backstop="cdr-button--secondary"] button',
        capture: '[data-backstop="cdr-button--secondary"]',
      },
    ],
    hoverSelectors: [
      {
        target: '[data-backstop="cdr-button--secondary"] button',
        capture: '[data-backstop="cdr-button--secondary"]',
      },
    ],
  },
  {
    url: 'http://localhost:3000/#/icon-buttons',
    label: 'Icon Button',
    selectors: [
      '[data-backstop="buttons"]',
    ],
    focusSelectors: [
      {
        target: '[data-backstop="cdr-button--icon"] button',
        capture: '[data-backstop="cdr-button--icon"]',
      },
      '[data-backstop="cdr-button--icon-only"]',
      '[data-backstop="cdr-button--icon-only-with-border"]',
    ],
    hoverSelectors: [
      {
        target: '[data-backstop="cdr-button--icon"] button',
        capture: '[data-backstop="cdr-button--icon"]',
      },
      '[data-backstop="cdr-button--icon-only"]',
      '[data-backstop="cdr-button--icon-only-with-border"]',
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
