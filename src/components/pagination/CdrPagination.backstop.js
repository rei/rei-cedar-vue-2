module.exports = [
  {
    url: 'http://localhost:3000/#/pagination',
    label: 'Pagination responsive',
    responsive: true,
  },
  {
    url: 'http://localhost:3000/#/pagination',
    label: 'Pagination',
    // first page is the "current" so it has no hover or focus effect.
    selectors: [
      '[data-backstop="pagination-default"] li:first-child a',
      '[data-backstop="pagination-default"] li:nth-child(2) a',
    ],
    focusSelectors: [
      '[data-backstop="pagination-default"] li:first-child a',
      '[data-backstop="pagination-default"] li:nth-child(2) a',
    ],
    hoverSelectors: [
      '[data-backstop="pagination-default"] li:first-child a',
      '[data-backstop="pagination-default"] li:nth-child(2) a',
    ],
  },
];
