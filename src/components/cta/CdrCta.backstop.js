module.exports = [
  {
    url: 'http://localhost:3000/#/cta',
    label: 'Cta',
    selectors: [
      '[data-backstop="cta-links"]',
    ],
    focusSelectors: [
      '[data-backstop="cdr-cta--brand"]',
      '[data-backstop="cdr-cta--dark"]',
      '[data-backstop="cdr-cta--light"]',
      '[data-backstop="cdr-cta--sale"]',
      '[data-backstop="cdr-cta--full-width"]',
      '[data-backstop="cdr-cta--elevated"]',
    ],
    hoverSelectors: [
      '[data-backstop="cdr-cta--brand"]',
      '[data-backstop="cdr-cta--dark"]',
      '[data-backstop="cdr-cta--light"]',
      '[data-backstop="cdr-cta--sale"]',
      '[data-backstop="cdr-cta--full-width"]',
      '[data-backstop="cdr-cta--elevated"]',
    ],
  },
  {
    url: 'http://localhost:3000/#/cta',
    label: 'Cta full width responsive',
    responsive: true,
    selectors: [
      '[data-backstop="cdr-cta--full-width-responsive"]',
    ],
  }
];
