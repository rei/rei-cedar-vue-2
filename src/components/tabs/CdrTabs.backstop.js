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
      '[data-backstop="tab-default"]',
    ],
    hoverSelectors: [
      {
        target: '[data-backstop="tab-default"] li:nth-child(2) a',
        capture: '[data-backstop="tab-default"]',
      },
    ],
    focusSelectors: [
      {
        target: '[data-backstop="tab-default"] li:nth-child(2) a',
        capture: '[data-backstop="tab-default"]',
      },
    ],
    wait: 1000,
  },
];
