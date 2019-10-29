module.exports = [
  {
    url: 'http://localhost:3000/#/breadcrumbs',
    label: 'Breadcrumb responsive',
    responsive: true,
  },
  {
    url: 'http://localhost:3000/#/breadcrumbs',
    label: 'Breadcrumb',
    selectors: [
      '[data-backstop="breadcrumbs-default"]',
      '[data-backstop="breadcrumbs-ellipsis"]',
    ],
    hoverSelectors: [
      {
        target: '[data-backstop="breadcrumbs-default"] a:first-child',
        capture: '[data-backstop="breadcrumbs-default"]',
      },
      {
        target: '[data-backstop="breadcrumbs-ellipsis"] button:first-child',
        capture: '[data-backstop="breadcrumbs-ellipsis"]',
      },
    ],
    focusSelectors: [
      {
        target: '[data-backstop="breadcrumbs-default"] a:first-child',
        capture: '[data-backstop="breadcrumbs-default"]',
      },
      {
        target: '[data-backstop="breadcrumbs-ellipsis"] button:first-child',
        capture: '[data-backstop="breadcrumbs-ellipsis"]',
      },
    ],
  },
];
