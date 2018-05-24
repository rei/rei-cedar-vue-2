const loaderUtils = require('loader-utils');
const compiler = require('vue-template-compiler');
const _ = require('lodash');

function genAttrs(attrs) {
  return _.reduce(attrs, (acc, v, k) => {
    let attr = ` ${k}`;
    if (v !== true) {
      attr += `="${v}"`;
    }
    return acc + attr;
  }, '');
}

function genSection(tag, section) {
  if (!section) {
    return '';
  }
  const attrs = genAttrs(section.attrs);
  const content = section.content || '';
  return `<${tag}${attrs}>${content}</${tag}>\n`;
}

function hasTheme(style) {
  return Object.prototype.hasOwnProperty.call(style.attrs, 'cedar-theme');
}

// Returns style blocks that DO NOT have cedar-theme attr
function removeThemeBlocks(styles) {
  return styles.filter(style => !hasTheme(style));
}

// NOTE: path/filename must match output from utils/themeLoader.js
function setThemeSrc(style) {
  const updated = style;
  updated.attrs = {
    src: `./styles/themes/theme-${style.attrs['cedar-theme']}.css`,
  };
  updated.content = '';
  return updated;
}

function updateThemeBlocks(styles) {
  return styles.map((style) => {
    if (hasTheme(style)) {
      return setThemeSrc(style);
    }
    return style;
  });
}

// Returns style blocks that have cedar-theme attr
function getThemeBlocks(styles) {
  return styles.filter(style => hasTheme(style));
}

function genSfc(template, script, styles, customBlocks) {
  const outTemplate = genSection('template', template);
  const outScript = genSection('script', script);
  const outStyle = styles.map(style => genSection('style', style)).join('');
  let outCustom = '';
  if (customBlocks.length > 0) {
    outCustom = customBlocks.map(custom => genSection(`${custom.type}`, custom)).join('');
  }
  return `${outTemplate}${outScript}${outStyle}${outCustom}`;
}

function themeLoader(content) {
  const options = loaderUtils.getOptions(this);
  const parts = compiler.parseComponent(content);
  const {
    template,
    script,
    styles,
    customBlocks,
  } = parts;

  // if dev
  // change cedar-theme style blocks source to created theme css
  // and let vue-loader do its stuff
  if (options.isDev && getThemeBlocks(styles).length > 0) {
    const newStyles = updateThemeBlocks(styles);
    return genSfc(template, script, newStyles, customBlocks);
  }
  // else
  // remove themed style blocks(copied in build step to output already)
  const newStyles = removeThemeBlocks(styles);
  return genSfc(template, script, newStyles, customBlocks);
}

module.exports = themeLoader;
