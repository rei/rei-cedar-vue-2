module.exports = [
  {
    label: 'Row',
    selectors: [
      "[data-backstop='row-basic']",
      "[data-backstop='row-md']",
      "[data-backstop='row-lg']",
      "[data-backstop='row-xl']",
      "[data-backstop='row-xxl']",
      "[data-backstop='row-full-responsive']",
      "[data-backstop='row-justify-responsive']",
      "[data-backstop='row-alignment-responsive']",
      "[data-backstop='col-md']",
      "[data-backstop='col-lg']",
      "[data-backstop='col-xl']",
      "[data-backstop='col-xxl']",
      "[data-backstop='col-hide']",
      "[data-backstop='row-mosaic']",
    ],
    readyEvent: null,
    delay: 100,
    misMatchThreshold: 0.1,
  },
];
