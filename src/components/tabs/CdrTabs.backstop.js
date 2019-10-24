module.exports = [
  {
    url: 'http://localhost:3000/#/tabs',
    label: 'Tabs responsive',
    responsive: true,
  },
  {
    url: 'http://localhost:3000/#/tabs',
    label: 'Tabs',
    selectors: [
      '[data-backstop="tab-default"] li:nth-child(2)',
    ],
    hoverSelectors: [
      '[data-backstop="tab-default"] li:nth-child(2)',
    ],
    focusSelectors: [
      '[data-backstop="tab-default"] li:nth-child(2)',
    ],
    wait: 1000,
  },
];
