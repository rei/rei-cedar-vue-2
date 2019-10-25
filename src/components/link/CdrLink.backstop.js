module.exports = [
  {
    url: 'http://localhost:3000/#/links',
    label: 'Link responsive',
    responsive: true,
  },
  {
    url: 'http://localhost:3000/#/links',
    label: 'Link',
    selectors: [
      '[data-backstop="cdr-link"]',
      '[data-backstop="cdr-link--standalone"]',
    ],
    hoverSelectors: [
      '[data-backstop="cdr-link"]',
      '[data-backstop="cdr-link--standalone"]',
    ],
    focusSelectors: [
      '[data-backstop="cdr-link"]',
      '[data-backstop="cdr-link--standalone"]',
    ],
  },
];
