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
      '[data-backstop="breadcrumbs-default"] a:first-child',
      '[data-backstop="breadcrumbs-ellipsis"] button:first-child',
    ],
    hoverSelectors: [
      '[data-backstop="breadcrumbs-default"] a:first-child',
      '[data-backstop="breadcrumbs-ellipsis"] button:first-child',
    ],
    focusSelectors: [
      '[data-backstop="breadcrumbs-default"] a:first-child',
      '[data-backstop="breadcrumbs-ellipsis"] button:first-child',
    ],
  },
];
