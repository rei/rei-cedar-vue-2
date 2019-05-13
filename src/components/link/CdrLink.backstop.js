module.exports = [{
  url: 'http://localhost:3000/#/links',
  label: 'Link',
  selectors: [
    '[data-backstop="cdr-link"]',
    '[data-backstop="cdr-link--standalone"]',
    '[data-backstop="cdr-link--button"]',
    '[data-backstop="all-links"]',
  ],
  hoverSelectors: [
    '[data-backstop="cdr-link--standalone"]',
  ],
}];
