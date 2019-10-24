module.exports = [
  {
    url: 'http://localhost:3000/#/ratings',
    label: 'Rating responsive',
    responsive: true,
  }, {
    url: 'http://localhost:3000/#/ratings',
    label: 'Rating',
    selectors: [
      '[data-backstop="rating-primary-linked"] > span',
      '[data-backstop="rating-secondary-linked"] > span',
    ],
    hoverSelectors: [
      '[data-backstop="rating-primary-linked"] > span',
      '[data-backstop="rating-secondary-linked"] > span',
    ],
  },
];
