#!/usr/bin/env/ node

const glob = require('glob');
const fs = require('fs-extra');
const compiler = require('vue-template-compiler');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
const classPrfx = require('postcss-class-prefix');

const componentDir = process.cwd();
const files = glob.sync('*.vue', { absolute: true });

function getThemeBlocks(content) {
  const parts = compiler.parseComponent(content);
  const themes = parts.styles.filter(part =>
    Object.prototype.hasOwnProperty.call(part.attrs, 'cedar-theme'));
  return themes;
}

// NOTE: theme filepath/name (below) must match path/name in build/themeLoader.js setThemeSrc()
const dir = `${componentDir}/styles/themes`;
fs.emptydirSync(dir);

// loop through component files and extract theme css
files.forEach((file) => {
  const content = fs.readFileSync(file, 'utf-8');
  const themes = getThemeBlocks(content);
  themes.forEach((theme) => {
    postcssrc().then(({ plugins, options }) => {
      postcss(plugins)
        .use(classPrfx(`theme-${theme.attrs['cedar-theme']}-`))
        .process(`${theme.content}`, options)
        .then((r) => {
          // filename here
          fs.writeFileSync(`${dir}/theme-${theme.attrs['cedar-theme']}.css`, r.css);
        });
    });
  });
});

