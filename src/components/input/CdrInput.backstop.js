module.exports = [
  {
    url: 'http://localhost:3000/#/inputs',
    label: 'Input responsive',
    responsive: true,
  },
  {
    url: 'http://localhost:3000/#/inputs',
    label: 'Input',
    selectors: [
      '[data-backstop="input-target"]',
    ],
    focusSelectors: [
      {
        capture: '[data-backstop="input-target"]',
        target: '[data-backstop="input-target"] input',
      },
    ],
  },
];
