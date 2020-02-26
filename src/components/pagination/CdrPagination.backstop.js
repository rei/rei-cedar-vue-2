module.exports = [
  {
    url: 'http://localhost:3000/#/pagination',
    label: 'Pagination responsive',
    responsive: true,
    selectors: [
      '[data-backstop="pagination-page"]',
    ],
  },
  {
    url: 'http://localhost:3000/#/pagination',
    label: 'Pagination',
    // first page is the "current" so it has no hover or focus effect.
    selectors: [
      '[data-backstop="pagination-default"]',
    ],
    focusSelectors: [
      {
        target: '[data-backstop="pagination-default"] li:first-child a',
        capture: '[data-backstop="pagination-default"]',
      },
      {
        target: '[data-backstop="pagination-default"] li:nth-child(2) a',
        capture: '[data-backstop="pagination-default"]',
      },
    ],
    hoverSelectors: [
      {
        target: '[data-backstop="pagination-default"] li:first-child a',
        capture: '[data-backstop="pagination-default"]',
      },
      {
        target: '[data-backstop="pagination-default"] li:nth-child(2) a',
        capture: '[data-backstop="pagination-default"]',
      },
    ],
  },
];
