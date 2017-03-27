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

`npm run dev`

Runs locally for development. Has hot reloading, linting, and other nice things related to development.

`npm run build`

Creates an exported bundle (index.html, compiled .js, and compiled .css) that reflects the state of dev to the `dist/` directory for something like gh-pages.

`npm run release`

Export the component library to a umd js bundle and compiled css in the `release/` directory for use in other projects. This creates the delivery bundle.

## Build System

The [webpack](https://webpack.github.io/) build system is taken largely from the [Vue webpack template](https://github.com/vuejs-templates/webpack) which has its own set of docs that are a good reference.

## Testing

### Code Tests

`npm run test`

Runs [karma](https://karma-runner.github.io/1.0/index.html) unit tests.

`npm run e2e`

Runs [Nightwatch](http://nightwatchjs.org/) end-to-end tests.

### Visual Regression Testing

Check [backstop](https://github.com/garris/BackstopJS) for general configuration questions. 

Our visual regressions audits can be performed against all patterns documented within the patterns site. To do so, follow the steps below:

1. Run the project locally with `npm run dev`
2. `npm run reference` will create a base set of images providing coverage for all defined patterns. Ensure this is run against a clean build prior to any edits.
3. `npm run compare` after making changes to the markup or css. This will create another set of test images and compare them against those generated in the previous step.
4. Review the generated report that should open in your browser. Make sure all changes are what you expect.
5. `npm run approve` if everything looks good. This will promote the latest test images to be the new reference images that future tests will be compared against.

#### Notes about our backstop configuration

We’re aliasing the backstop commands to use `npm run <command>` just to abstract away supplying the config option since we are using a javascript version of the backstop config file to dynamically generate most of it. By using the js format instead of the standard json, we can avoid having a monolithic config file and instead have more localized, manageable configs that can remove some repetition and allow for different stateful tests, like hover, more easily.

The config (__backstop.js__) looks through `src/` for all __*.backstop.js__ files and turns them into the proper json format for backstop. A backstop scenario object is generated for each _selector_ in the array as well as each _onReadyScript_ if any are supplied to the _onReadyScripts_ array. Those scripts allow us to do things like hover or set the element to a disabled state for testing those. Each selector/onReadyScript will generate it’s own scenario because you can only do things like hover for one element at a time via casper.

Casper scripts live in `backstop_data > casper_scripts`

__*.backstop.js__ files will export an array of objects that are standard backstop scenario objects and support all the same options noted in the docs with the following exceptions:

1. `url` is assumed to be `localhost:8080` (running the project locally) and you don’t need to define that for each object.
2. `onReadyScripts` is something we’ve added to auto generate a scenario for each script.

if supplying an `onReadyScripts` array __AND__ you want a screenshot of the element in its normal state, one of the states will be false (examples below)

```javascript
"onReadyScripts": [false, "hover.js", "disabled.js"]
```

This will take normal, hover, and disabled screenshots.

```javascript
"onReadyScripts": ["hover.js", "disabled.js"]
```

This will take ONLY hover and disabled screenshots.

## Javascript

__TODO:__ Notes about js, eslint

- Babel for transpiling js so use es6.
- Aim to have 0 dependencies, don’t use jquery.
- Eslint using [airbnb config](https://github.com/airbnb/javascript)

## Design system Integration

__TODO:__ Notes about DDS, design tokens, integrations

- `npm run get-tokens` fetch css variables from Brand.ai

## CSS

__TODO:__ Notes about css, postcss, stylelint, css-modules?

- Main.postcss (.postcss so webpack uses the correct loader - others can be .css or whatever, just need to be imported here to be processed)
- Imported into entry files (dev.js and main.js so webpack processes the css since we aren’t using a css loader for our files)
- cssnext, auto namespace prefix (don’t write css prefixed, but use the prefix in markup)
- Build with variable configs for theming (want to hook these into theo/sketch/something for theming).
- css-modules in components turn into abstracted javascript classes (better here or components?)
- Stylelint using `stylelint-config-standard` for base but we have customizations on top of it. Not following stylelint guidelines will throw errors in build (need to lock down rules still).

## Components

__TODO:__ Notes about Vue, components, css-modules?

- Using [Vue.js](https://vuejs.org/) single file components. They have excellent docs.
- Import them into the local  _index.js. 
- Don’t write the component name prefixed/namespaced, this will happen automatically for both dev/build and release.
- Horizontal theming with css-modules, dynamically binding classes based on theme
- css-modules in components turn into abstracted javascript classes (better here or CSS?)

## Folder Structure

%`<file or directory>` = generated by a process (so don't worry too much about them/what's in them)

```
backstop_data               #Files related to visual regression testing. Mostly generated by backstop.
|-- %bitmaps_reference      #Generated by backstop reference - contains reference backstop images
|-- %bitmaps_test           #Generated by backstop test - contains images that are tested against reference images
|-- casper_scripts          #Contains scripts that will be used by backstop for doing things like clicks, hovers, etc.
|-- %html_report            #Generated report for backstop test results
build                       #Contains scripts and configs for the webpack build system (most of this is from the vue webpack template)
|-- build.js                #Prod build script - the entry point for `npm run build`
|-- check-versions.js       #Checks node/npm versions (this came with the vue webpack template so I’m not sure if it’s super useful)
|-- dev-client.js           #For hot module reloading in dev
|-- dev-server.js           #Config for express dev server
|-- release.js              #Release build script - the entry point for `npm run release`
|-- utils.js                #From vue webpack template to mostly automate which loaders need to be used since vue supports scss, stylus, postcss, etc.
|-- vue-loader.conf.js      #Config object for vue webpack loader (vue-loader)
|-- webpack.base.conf.js    #Webpack config that the others all use as a foundation - mostly just defines the loaders and entry
|-- webpack.dev.conf.js     #Webpack config options specific to dev
|-- webpack.prod.conf.js    #Webpack config options specific to build/prod
|-- webpack.release.conf.js #Webpack config options specific to release
|-- webpack.test.conf.js    #Webpack config options specific to unit/e2e test
config                      #Configuration files used in the webpack build steps (most of this is from the vue webpack template)
|-- dev.env.js              #Setting NODE_ENV for dev
|-- index.js                #Used in build steps for configuration options specific to each build type
|-- prod.env.js             #Setting NODE_ENV for prod
|-- release.env.js          #Setting NODE_ENV for release
|-- test.env.js             #Setting NODE_ENV for test
%dist/                      #Results from `npm run build` end up here
%release/                   #Results from `npm run release end up here
src/                        #Source files
|-- assets/                 #For things that will be included like images, fonts, icons, etc. (check the vue webpack template docs)
|-- components/             #All things components
|-- css/                    #All things css
|-- app.vue                 #The playground for testing components
|-- dev.js                  #Webpack entry point for everything !release
|-- main.js                 #Webpack entry point for release that builds delivery assets
|-- **/*.backstop.js        #Config files for backstop visual regression testing
|-- */_index.js             #For maintaining imports of components for use between release and dev/build
static/                     #For static assets -- check the vue webpack template docs
test/                       #All things testing for both unit and e2e
|-- e2e/                    #Everything for nightwatch testing
|-- unit/                   #Everything for karma testing
utils/                      #Utility node scripts
|-- brandai.js              #Fetches values from brand.ai for use in css
.babelrc                    #Babel es6 transpiling config
.gitignore                  #Self explanatory
.pullapprove.yml            #Config for github PR approval
.stylelintrc                #Config for stylelint
.travis.yml                 #Holding onto it from v1, will need to be updated
backstop.js                 #Main config for backstop. Global settings like viewport sizes and paths are set here. 
index.html                  #app.vue is bootstrapped here and is used for both dev and build -- all css and js files will be injected as needed for each environment
package.json                #Everything for npm
postcss.config.js           #Config for postcss -- add new postcss plugins here
yarn.lock                   #We’re using yarn -- go read the docs
```