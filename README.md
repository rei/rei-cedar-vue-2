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

We’re using [Yarn](https://yarnpkg.com/en/) instead of npm for dependency management.

Clone the project.

`yarn install`

(npm install will also work, but is not advised)

### Run

`npm run dev`

Runs locally for development. Has hot reloading, linting, browsersync, and other nice things related to development.

`npm run build`

Creates an exported bundle (index.html, compiled .js, and compiled .css) that reflects the state of dev to the `dist/` directory for something like gh-pages.

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

- `npm run get-tokens` fetch css variables from Brand.ai.
- `npm run get-icons` fetch icons from Brand.ai and build an svg sprite of them.

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

## Folder Structure

%`<file or directory>` = generated by a process (so don't worry too much about them/what's in them)

```
backstop_data                   #Files related to visual regression testing. Mostly generated by backstop.
|-- %bitmaps_reference          #Generated by backstop reference - contains reference backstop images
|-- %bitmaps_test               #Generated by backstop test - contains images that are tested against reference images
|-- casper_scripts              #Contains scripts that will be used by backstop for doing things like clicks, hovers, etc.
|-- %html_report                #Generated report for backstop test results
build                           #Contains scripts and configs for the webpack build system (most of this is from the vue webpack template)
|-- build.js                    #Prod build script - the entry point for `npm run build`
|-- check-versions.js           #Checks node/npm versions (this came with the vue webpack template so I’m not sure if it’s super useful)
|-- dev-client.js               #For hot module reloading in dev
|-- dev-server.js               #Config for express dev server
|-- mainPost.conf.js            #Webpack loader config for processing .postcss files for release vs dev
|-- utils.js                    #From vue webpack template to mostly automate which loaders need to be used since vue supports scss, stylus, postcss, etc.
|-- vue-loader.conf.js          #Config object for vue webpack loader (vue-loader)
|-- webpack.base.conf.js        #Webpack config that the others all use as a foundation - mostly just defines the loaders and entry
|-- webpack.dev.conf.js         #Webpack config options specific to dev
|-- webpack.prod.conf.js        #Webpack config options specific to build/prod
|-- webpack.test.conf.js        #Webpack config options specific to unit/e2e test
config                          #Configuration files used in the webpack build steps (most of this is from the vue webpack template)
|-- dev.env.js                  #Setting NODE_ENV for dev
|-- index.js                    #Used in build steps for configuration options specific to each build type
|-- prod.env.js                 #Setting NODE_ENV for prod
|-- release.env.js              #Setting NODE_ENV for release
|-- test.env.js                 #Setting NODE_ENV for test
%dist/                          #Results from `npm run build` end up here
%dist-docs/                     #Results from `npm run build:docs` end up here
docs/                           #Location for general documentation guidelines that will be used in the styleguide
src/                            #Source files
|-- assets/                     #For things that will be included like images, fonts, icons, etc. (check the vue webpack template docs)
  |-- icons/                    #`npm run get-icons` stores results here then creates the sprite from them. Also available for use individually via CSS, etc.
|-- components/                 #All things components
  |-- <comp>
    |-- __tests__/              #Unit tests for components
      |-- <comp>.spec.js        #Unit test files -- karma looks for them with this pattern
    |-- examples/               #Examples of the component used in the proving grounds for backstop testing
    |-- <comp>.backstop.js      #Config files for backstop visual regression testing
    |-- <comp>.md               #Component documentation file displayed in styleguide -- styleguide examples are added here
    |-- <comp>.pcss             #Styles specific to the component which are imported into the `.vue` file
    |-- <comp>.vue              #Single file component
  |-- _index.js                 #All components are imported/exported here
  |-- examples.js               #All component example are imported/exported here for use in App.vue and the proving grounds
|-- css/                        #All things css
  |-- directives/               #CSS files for directives
  |-- generic/                  #Reset and normalize styles. Also general styles that are related to large layout.
  |-- settings/                 #Values and variables that are consumed in other files.
  |-- themes/                   #Might be used for vertical and/or horizontal themes in the future.
  |-- main.postcss              #CSS files imported here for ordering
|-- directives/                 #All things directives
  |-- <direc>
    |-- examples/               #Examples of the directive used in the proving grounds for backstop testing
    |-- <direc>.backstop.js     #Config files for backstop visual regression testing
    |-- <direc>.js              #Code for the directive
|-- mixins/                     #Mixins that are shared in components
|-- utils/                      #Helper js files for things like debounce
|-- App.vue                     #The component/directive catalog for building and regression testing -- the proving grounds
|-- dev.js                      #Webpack entry point for everything !release
|-- main.js                     #Webpack entry point for release that builds delivery assets
static/                         #For static assets. These get included in dist/ and release/ exactly as is -- check the vue webpack template docs
styleguide/                     #Unique config options for the styleguide
test/                           #All things testing for both unit and e2e
|-- e2e/                        #Everything for nightwatch testing
|-- unit/                       #Everything for karma testing
utils/                          #Utility node scripts
|-- brandai.js                  #Fetches values from brand.ai for use in css
|-- icons.js                    #Fetches icons from brand.ai and outputs a sprite of all of them
.babelrc                        #Babel es6 transpiling config
.eslintignore                   #Self explanatory
.eslintrc.js                    #Config for eslint
.gitignore                      #Self explanatory
.pullapprove.yml                #Config for github PR approval
.stylelintignore                #Directories that won't be linted by stylelint
.stylelintrc                    #Config for stylelint
.travis.yml                     #Holding onto it from v1, will need to be updated
backstop.js                     #Main config for backstop. Global settings like viewport sizes and paths are set here. 
index.html                      #app.vue is bootstrapped here and is used for both dev and build -- all css and js files will be injected automatically
package.json                    #Everything for npm
postcss.config.js               #Config for postcss -- add new postcss plugins here
styleguide.config.js            #Configuration for vue-styleguidist
yarn.lock                       #We’re using yarn -- go read the docs
```
