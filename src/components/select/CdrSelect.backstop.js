module.exports = [
  {
    url: 'http://localhost:3000/#/selects',
    label: 'Select responsive',
    responsive: true,
  },
  {
    url: 'http://localhost:3000/#/selects',
    label: 'Select',
    selectors: [
      '[data-backstop="select-target"]',
    ],
    focusSelectors: [
      {
        capture: '[data-backstop="select-target"]',
        target: '[data-backstop="select-target"] select',
      },
    ],
  },
];
