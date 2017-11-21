#!/usr/bin/env/ node

const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

const distDir = path.resolve(__dirname, 'dist');
const cssDir = path.resolve(__dirname, '..', 'css');
const staticDir = path.resolve(__dirname, '../..', 'static');

// Clean out the dist file
fs.emptyDirSync(distDir);

// Compile css
exec(`postcss ${cssDir}/main.postcss -o ${distDir}/cedar-core.css`, () => {
  console.log(chalk.green('Compiled cedar-core.css'));
});

// copy static files
fs.copySync(staticDir, distDir, {
  filter: (src) => {
    if (fs.lstatSync(src).isDirectory()) {
      return true;
    }
    const result = src.indexOf('.gitkeep') < 0;
    if (result) {
      console.log(chalk.green(`Copied ${src}`));
      return true;
    }
    return false;
  },
});

// TODO: copy variable files
