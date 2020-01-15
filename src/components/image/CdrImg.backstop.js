module.exports = [
  {
    url: 'http://localhost:3000/#/images',
    label: 'Images full',
    responsive: true,
  },
  {
    url: 'http://localhost:3000/#/images',
    label: 'Images',
    selectors: [
      '[data-backstop="image-aspect-ratio"]',
      '[data-backstop="image-cropping"]',
      '[data-backstop="image-mods"]',
      '[data-backstop="image-standard"]',
    ],
  },
];
