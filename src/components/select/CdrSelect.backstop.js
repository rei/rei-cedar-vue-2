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
      '[data-backstop="select-default"]',
    ],
    focusSelectors: [
      '[data-backstop="select-default"]',
    ],
  },
];
