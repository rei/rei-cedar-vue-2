module.exports = [
  {
    label: 'Heading',
    selectors: [
      "[data-backstop='heading-headline']",
      "[data-backstop='heading-title']",
      "[data-backstop='heading-subtitle']",
      "[data-backstop='heading-section-title']",
      "[data-backstop='heading-body-copy']",
      "[data-backstop='heading-pull-quote']",
      "[data-backstop='heading-sub-section']",
      "[data-backstop='heading-information']",
      "[data-backstop='heading-description']",
      "[data-backstop='heading-detail']",
      "[data-backstop='heading-disclaimer']",
    ],
    readyEvent: null,
    delay: 100,
    misMatchThreshold: 0.1,
  },
];
