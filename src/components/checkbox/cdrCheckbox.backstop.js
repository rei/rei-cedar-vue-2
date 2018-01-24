module.exports = [
  {
    label: 'Checkbox',
    selectors: [
      '[data-backstop="checkboxes"]',
    ],
    hoverSelectors: [
      '[data-backstop="checkbox-checked"]',
    ],
    focusSelectors: [
      '[data-backstop="checkbox-focus"]+label',
    ],
  },
];
