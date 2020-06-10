module.exports = [
  {
    url: 'http://localhost:3000/#/tables',
    label: 'Table responsive width',
    responsive: true,
    selectors: [
      '[data-backstop="responsive-table-width"]',
    ],
  },
  {
    url: 'http://localhost:3000/#/tables',
    label: 'Table',
    selectors: [
      '[data-backstop="regular-tables"]',
      '[data-backstop="horizontal-tables"]',
      '[data-backstop="minimal-tables"]',
    ],
  },
];
