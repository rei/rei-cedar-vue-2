module.exports = [
  {
    url: 'http://localhost:3000/#/lists',
    label: 'Lists',
    selectors: [
      'document',
      '[data-backstop="lists-bare"]',
      '[data-backstop="lists-ordered"]',
      '[data-backstop="lists-resilience"]',
      '[data-backstop="lists-unordered"]',
    ],
  },
];
