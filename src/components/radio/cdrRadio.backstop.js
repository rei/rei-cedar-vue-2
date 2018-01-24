module.exports = [
  {
    label: 'Radio',
    selectors: [
      '[data-backstop="radios"]',
    ],
    focusSelectors: [
      '[data-backstop="radio-focus"] + label',
    ],
  },
];
