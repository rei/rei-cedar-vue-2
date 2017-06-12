# REI Cedar Style Framework!
[![Build Status](https://travis-ci.org/rei/rei-cedar.svg?branch=master)](https://travis-ci.org/rei/rei-cedar)

Welcome to REI's style framework! The overall goals of this project are to provide a common scaffolding for UI elements,
and a set of themes that build on this scaffolding. We started this project in 2015 as a fork of
[Bootstrap](http://getbootstrap.com/) and have applied many of the concepts from [Semantic-ui](http://semantic-ui.com/).
The project has evolved into what it is today, and will continue to grow to fit our expanding needs. Feel free to watch
the Cedar grow and learn from what we are doing, or jump in and provide some recommendations.

The goal, at this point, is to generate multiple themed CSS resources that different web properties can consume.
In time, we will explore more atomic theming that will allow page creators to mix and match themes: essentially becoming
a theme generator.

This project will work in conjunction with an upcoming component framework that is in the works.  Stay tuned for that!

## Getting Started

### Install

We’re using [Yarn](https://yarnpkg.com/en/) instead of npm for dependency management so you should install that.

Clone the project. 

`yarn install` 

(npm install will also work, but is not advised)

### Run

`yarn dev`

Runs locally for development. Has hot reloading, linting, browsersync, and other nice things related to development.

`yarn build`

Creates an exported bundle (index.html, compiled .js, and compiled .css) that reflects the state of dev to the `dist/` directory for something like gh-pages.

`yarn release`

Export the component library to a umd js bundle and compiled css in the `release/` directory for use in other projects. This creates the delivery bundle.

## Build System

The [webpack](https://webpack.github.io/) build system is taken largely from the [Vue webpack template](https://github.com/vuejs-templates/webpack) which has its own set of docs that are a good reference.

## Vue-play

We're using [vue-play](https://github.com/vue-play/vue-play) to demo components. Configs live in the examples directory for each component as `*.play.js`.

`yarn play`

Runs the webpack config for vue-play and starts a local server.

`yarn build:play`

Outputs a standalone app to `dist-play` that can be hosted somewhere (like gh-pages).

## Testing

### Code Tests

`yarn test`

Runs [karma](https://karma-runner.github.io/1.0/index.html) unit tests. We're using [avoriaz](https://github.com/eddyerburgh/avoriaz) to help with Vue component testing (Vue is adopting this as the official testing utility library).

`yarn e2e`

Runs [Nightwatch](http://nightwatchjs.org/) end-to-end tests.

### Visual Regression Testing

Check [backstop](https://github.com/garris/BackstopJS) for general configuration questions. 

Our visual regressions audits can be performed against all patterns documented within the patterns site. To do so, follow the steps below:

1. Run the project locally with `yarn dev`
2. `yarn reference` will create a base set of images providing coverage for all defined patterns. Ensure this is run against a clean build prior to any edits.
3. `yarn compare` after making changes to the markup or css. This will create another set of test images and compare them against those generated in the previous step.
4. Review the generated report that should open in your browser. Make sure all changes are what you expect.
5. `yarn approve` if everything looks good. This will promote the latest test images to be the new reference images that future tests will be compared against.

#### Notes about our backstop configuration

We’re aliasing the backstop commands to use `yarn <command>` just to abstract away supplying the config option since we are using a javascript version of the backstop config file to dynamically generate most of it. By using the js format instead of the standard json, we can avoid having a monolithic config file and instead have more localized, manageable configs that can remove some repetition and allow for different stateful tests, like hover, more easily.

The config (__backstop.js__) looks through `src/` for all __*.backstop.js__ files and turns them into the proper json format for backstop. A backstop scenario object is generated for each _selector_ in the array.

If you want to test states (i.e. hover) you can create another backstop file that has an `onReadyScript`. These scripts use [casperjs] (http://docs.casperjs.org/en/latest/).

Casper scripts live in `backstop_data > casper_scripts`

__*.backstop.js__ files will export an array of objects that are standard backstop scenario objects and support all the same options noted in the docs with the following exceptions:

1. `url` is assumed to be `localhost:8080` (running the project locally) and you don’t need to define that for each object.
2. `readyEvent` is set to null for each scenario.

## Javascript

__TODO:__ Notes about js, eslint

- Babel for transpiling js so use es6.
- Aim to have 0 dependencies, don’t use jquery.
- Eslint using [airbnb config](https://github.com/airbnb/javascript)

## Design system Integration

__TODO:__ Notes about DDS, design tokens, integrations

- `yarn get-tokens` fetch css variables from Brand.ai.
- `yarn get-icons` fetch icons and build an svg sprite of them.

## CSS

__TODO:__ Notes about css, postcss, stylelint, css-modules?

- Using postcss. Config for it lives in `postcss.config.js`
- main.postcss (.postcss so webpack uses the correct loader - others are .pcss and just need to be imported here to be processed)
- Imported into entry files (dev.js and main.js so webpack processes the css since we aren’t using a css loader for our files)
- [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) inspired file structure.
- CSS needs to be written with cdr- namespace prefix (tried automating it but had too many gotchas and wasn't intuitive)
- [cssnext](http://cssnext.io/) (autoprefixer built in)
- Auto prefixer settings is in package.json under "browserslist"
- safari >= 4 used for backstop (phantomjs engine) issues with flexbox [issue here](https://github.com/ariya/phantomjs/issues/14365)
- Build with variable configs for theming (want to hook these into theo/sketch/something for theming).
- css-modules in components turn into abstracted javascript classes (better here or components?)
- Stylelint using `stylelint-config-standard` for base but we have customizations on top of it. Not following stylelint guidelines will throw errors in build (need to lock down rules still).

## Components

__TODO:__ Notes about Vue, components, css-modules?

- Using [Vue.js](https://vuejs.org/) single file components. They have excellent docs.
- Import them into the local  _index.js. 
- Do write the component name prefixed/namespaced (considered automating, a little too black box/too many gotchas).
- Horizontal theming with css-modules, dynamically binding classes based on theme
- css-modules in components turn into abstracted javascript classes (better here or CSS?)

## Folder Structure

%`<file or directory>` = generated by a process (so don't worry too much about them/what's in them)

```
backstop_data                   #Files related to visual regression testing. Mostly generated by backstop.
|-- %bitmaps_reference          #Generated by backstop reference - contains reference backstop images
|-- %bitmaps_test               #Generated by backstop test - contains images that are tested against reference images
|-- casper_scripts              #Contains scripts that will be used by backstop for doing things like clicks, hovers, etc.
|-- %html_report                #Generated report for backstop test results
build                           #Contains scripts and configs for the webpack build system (most of this is from the vue webpack template)
|-- build.js                    #Prod build script - the entry point for `yarn build`
|-- check-versions.js           #Checks node/npm versions (this came with the vue webpack template so I’m not sure if it’s super useful)
|-- dev-client.js               #For hot module reloading in dev
|-- dev-server.js               #Config for express dev server
|-- play.config.js              #Webpack config for vue-play
|-- release.js                  #Release build script - the entry point for `yarn release`
|-- utils.js                    #From vue webpack template to mostly automate which loaders need to be used since vue supports scss, stylus, postcss, etc.
|-- vue-loader.conf.js          #Config object for vue webpack loader (vue-loader)
|-- webpack.base.conf.js        #Webpack config that the others all use as a foundation - mostly just defines the loaders and entry
|-- webpack.dev.conf.js         #Webpack config options specific to dev
|-- webpack.prod.conf.js        #Webpack config options specific to build/prod
|-- webpack.release.conf.js     #Webpack config options specific to release
|-- webpack.test.conf.js        #Webpack config options specific to unit/e2e test
config                          #Configuration files used in the webpack build steps (most of this is from the vue webpack template)
|-- dev.env.js                  #Setting NODE_ENV for dev
|-- index.js                    #Used in build steps for configuration options specific to each build type
|-- prod.env.js                 #Setting NODE_ENV for prod
|-- release.env.js              #Setting NODE_ENV for release
|-- test.env.js                 #Setting NODE_ENV for test
%dist/                          #Results from `yarn build` end up here
%dist-play/                     #Results from `yarn build:play` end up here
play/                           #Stores files for use with vue-play
|-- %app.js                     #Used for initializing vue-play (probably don't need to change anything here)
|-- index.js                    #Setting up vue-play scenarios (currently just loads all *.play.js files from src/components)
|-- my-index.ejs                #Custom page template for vue-play
|-- %preview.js                 #Used for creating the preview for vue-play (probably don't need to change anything here)
%release/                       #Results from `yarn release` end up here
src/                            #Source files
|-- assets/                     #For things that will be included like images, fonts, icons, etc. (check the vue webpack template docs)
|-- components/                 #All things components
|-- css/                        #All things css
    |-- components/             #CSS files for component styles
    |-- directives/             #CSS files for directives
    |-- generic/                #Reset and normalize styles. Also general styles that are related to large layout.
    |-- settings/               #Values and variables that are consumed in other files.
      |-- component-variables/  #Values and variables that are consumed in component css.
    |-- themes/                 #Might be used for vertical and/or horizontal themes in the future.
|-- directives/                 #All things directives
|-- examples/                   #Everything for demos/docs/testing of components and directives
  |-- **/*.backstop.js          #Config files for backstop visual regression testing
  |-- **/*.play.js              #Config files for vue-play testing
  |-- **/*.md                   #Component and directive docs that are imported into *.play.js for readme support
|-- utils/                      #Helper js files for things like debounce
|-- app.vue                     #The component/directive catalog for building and regression testing
|-- dev.js                      #Webpack entry point for everything !release
|-- main.js                     #Webpack entry point for release that builds delivery assets
|-- */_index.js                 #For maintaining imports of components for use between release and dev/build
static/                         #For static assets. These get included in dist/ and release/ exactly as is -- check the vue webpack template docs
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
yarn.lock                       #We’re using yarn -- go read the docs
```