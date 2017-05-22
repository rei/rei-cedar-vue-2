module.exports = [
  {
    label: 'Images',
    selectors: [
      "[data-backstop='image-aspect-ratio']",
      "[data-backstop='image-cropping']",
      "[data-backstop='image-standard']",
    ],
    readyEvent: null,
    delay: 100,
    misMatchThreshold: 0.1,
  },
];
