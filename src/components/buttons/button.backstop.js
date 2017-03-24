module.exports = [
  {
    'label': 'Button',
    'selectors': [
      "[data-backstop='button']",
      "[data-backstop='button-red']",
      "[data-backstop='button-blue']"
    ],
    'readyEvent': null,
    'delay': 500,
    'misMatchThreshold': 0.1,
    'onReadyScripts': [false, 'hover.js', 'disabled.js']
  }
]
