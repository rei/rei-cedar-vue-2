# REI Cedar Style Framework!
[![Build Status](https://travis-ci.org/rei/rei-cedar.svg?branch=master)](https://travis-ci.org/rei/rei-cedar)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Welcome to REI's style framework! The overall goals of this project are to provide a common scaffolding for UI elements,
and a set of themes that build on this scaffolding. We started this project in 2015 as a fork of
[Bootstrap](http://getbootstrap.com/).
The project has evolved into what it is today, and will continue to grow to fit our expanding needs. Feel free to watch
the Cedar grow and learn from what we are doing, or jump in and provide some recommendations.

## Getting Started

### Install

Clone the project.

`npm install`

`npm i -g lerna`

Install Lerna globally. Lerna helps manage projects with multiple packages.

### Run

`npm run start`

Bootstraps all the seaparate component dependencies.

`npm run dev`

Runs locally for development. Has hot reloading, linting, and other nice things related to development.


***NOTE: If you have FEBS set up locally to run the REI.com Monolith on a mac, make sure to remove any reference to: `~/code/rei.com/scripts/mac/.reirc` in your terminal configuration files, e.g., `.bash_profile` or `.bashrc`.  Also make sure your system PATH does not contain `febs/bin`***


## Build System

The [webpack](https://webpack.github.io/) build system is taken largely from the [Vue webpack template](https://github.com/vuejs-templates/webpack) which has its own set of docs that are a good reference.

## Vue-styleguidist

We're using [vue-styleguidist](https://github.com/vue-styleguidist/vue-styleguidist) to document and demo components.

`npm run docs`

Runs the local server for docs.

`npm run build:docs`

Outputs a standalone app to `styleguide/build` that can be hosted somewhere (like gh-pages).

## Testing

### Code Tests

`npm run test`

Runs [karma](https://karma-runner.github.io/1.0/index.html) unit tests. We're using [avoriaz](https://github.com/eddyerburgh/avoriaz) to help with Vue component testing (Vue is working on their official testing tools with the guy who made this).

`npm run e2e`

Runs [Nightwatch](http://nightwatchjs.org/) end-to-end tests.

This includes running [Tenon](https://tenon.io/) a11y tests.

### Visual Regression Testing

Check [backstop](https://github.com/garris/BackstopJS) for general configuration questions.

Our visual regressions audits can be performed against all patterns documented within the project's component proving grounds. To do so, follow the steps below:

1. Run the project locally with `npm run dev`
2. `npm run reference` will create a base set of images providing coverage for all defined patterns. Ensure this is run against a clean build prior to any edits.
3. `npm run compare` after making changes to the markup or css. This will create another set of test images and compare them against those generated in the previous step.
4. Review the generated report that should open in your browser. Make sure all changes are what you expect.
5. `npm run approve` if everything looks good. This will promote the latest test images to be the new reference images that future tests will be compared against.

#### Notes about our backstop configuration

We’re aliasing the backstop commands to use `npm run <command>` just to abstract away supplying the config option since we are using a javascript based backstop config file to dynamically generate most of it. By using the js format instead of the standard json, we can avoid having a monolithic config file and instead have more localized, manageable configs that can remove some repetition and allow for different stateful tests, like hover, more easily.

The config (`backstop.js`) looks through `src/` for all __*.backstop.js__ and generates a proper backstop scenario object for each.

If you want to test hover statyes you can create another array of selectors `hoverSelectors`. These selectors will use an onReadyScript (`hover.js`) to simulate a mouse moving and hovering. This engine script uses [chromy](https://github.com/OnetapInc/chromy). **This is a custom config option we've added to allow for adding hover tests for an array of selectors easily.**

Engine scripts live in `backstop_data > engine_scripts`

__*.backstop.js__ files will export an array of objects that are standard backstop scenario objects and support all the same options noted in the docs with the following exceptions:

1. `url` is assumed to be `localhost:8080` (running the project locally) and you don’t need to define that for each object.
2. `readyEvent` is set to null for each scenario.
3. `hoverSelectors` is a custom option we've added (as noted above).

## Javascript

__TODO:__ Notes about js, eslint

- Babel for transpiling js so use es6.
- Aim to have 0 dependencies, don’t use jquery.
- Eslint using [airbnb config](https://github.com/airbnb/javascript)

## Design system Integration

__TODO:__ Notes about DDS, design tokens, integrations
Tokens are stored in the REI-Cedar-tokens project, and new tokens will need to be created there.
REI-Cedar uses the THEO project for design tokens, when bringing in an update from the REI-Cedar-tokens project do the following:
- update the package.json to the latest tag from the REI-Cedar-Tokens repo.
- `npm i` to install the latest tag from REI-Cedar-tokens.
- `npm run theo` will run THEO in the REI-Cedar repo and convert the tokens to scss variables in `src/css/settings/tokens.pcss`.

## CSS

__TODO:__ Notes about css, postcss, stylelint

- Using postcss. Config for it lives in `postcss.config.js`
- SCSS style variables ($variable). Don't use mixins/other logic. Keep it simple.
- Components styles are in the same directory and imported into style tags in the component file.
- main.postcss (.postcss so webpack uses the correct loader - others are .pcss and just need to be imported here to be processed)
- Component css is output as a file separate from main.postcss.
- Using [vue-theme-loader](https://github.com/zephraph/vue-theme-loader) to allow for vertical themes. Every style tag in the components needs a `theme="<theme>"`.
- Imported into entry files (dev.js and main.js so webpack processes it)
- [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) inspired file structure.
- CSS needs to be written with `cdr-` namespace prefix.
- Auto prefixer settings is in package.json under "browserslist"
- safari >= 4 used for backstop (phantomjs engine) issues with flexbox [issue here](https://github.com/ariya/phantomjs/issues/14365)
- Build with variable configs for theming (want to hook these into theo/sketch/something for theming).
- Stylelint using `stylelint-config-standard` for base but we have customizations on top of it. Not following stylelint guidelines will throw errors in build (need to lock down rules still).

## Components

__TODO:__ Notes about Vue, components

- Using [Vue.js](https://vuejs.org/) single file components. They have excellent docs.
- Import them into the _index.js.
- Write the component name prefixed/namespaced with `cdr-`.
- Horizontal theming with css-modules, dynamically binding classes based on theme

## Commits
This project is Commitizen friendly.
when creating a pull request run `git cz` rather than `git commit` and follow the prompts.

To generate the Changelog on tag run `standard-changelog`.
