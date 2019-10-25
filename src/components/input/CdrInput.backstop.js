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
      '[data-backstop="input-default"]',
    ],
    focusSelectors: [
      '[data-backstop="input-default"]',
    ],
  },
];
