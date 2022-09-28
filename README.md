# REI Cedar Vue 2!
[![Build Status](https://travis-ci.org/rei/rei-cedar.svg?branch=master)](https://travis-ci.org/rei/rei-cedar)
[![codecov](https://codecov.io/gh/rei/rei-cedar/branch/master/graph/badge.svg)](https://codecov.io/gh/rei/rei-cedar)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Deprecated 

Cedar's Vue 2 component library has been deprecated and support will end in Spring 2023. Our forest continues to grow over at [@rei/cedar](https://github.com/rei/rei-cedar) 


## Getting Started

### Install

Clone the project.

`npm install`

### Run

`npm run dev`

Runs locally for development. Has hot reloading, and other nice things related to development.

Sometimes the liveReload server will hang in the background, do the following...

Works on MacOS:

`kill -9 $(lsof -ti tcp:35729)`

## Testing

### Code Tests

`npm run unit`

Runs unit tests.

`npm run e2e`

Runs [Nightwatch](http://nightwatchjs.org/) end-to-end tests and Axe a11y tests.

`npm run test`

Runs both unit and e2e/accesibility tests.

### Visual Regression Testing

Check [backstop](https://github.com/garris/BackstopJS) for general configuration questions.

Our visual regressions audits can be performed against all patterns documented within the project's component proving grounds. To do so, follow the steps below:

1. Run the project locally with `npm run dev`
2. `npm run reference` will create a base set of images providing coverage for all defined patterns. Ensure this is run against a clean build prior to any edits.
3. `npm run compare` after making changes to the markup or css. This will create another set of test images and compare them against those generated in the previous step.
4. Review the generated report that should open in your browser. Make sure all changes are what you expect.
5. `npm run approve` if everything looks good. This will promote the latest test images to be the new reference images that future tests will be compared against.

If you want to do backstop tests against a single scenario you can do `npm run compare -- --filter=<Label>`

The config (`backstop.js`) looks through `src/` for all __*.backstop.js__ and generates a proper backstop scenario object for each.

__*.backstop.js__ files will export an array of objects that are standard backstop scenario objects and support all the same options noted in the docs with the following exceptions:

- `responsive`: Boolean, configures whether or not the scenario runs against all 4 breakpoints. If not present or false it will only run against the largest breakpoint. Note that running responsive tests against specific selectors can often lead to incorrect screenshots, and it is better to set up a separate responsive scenario that targets the entire document, for example: `{ url: 'http://localhost:3000/#/EXAMPLE', label: 'EXAMPLE', responsive: true }`
- `focusSelectors`: Array, list of selectors that will have `focus` applied before screenshotting
- `hoverSelectors`: Array, list of selectors that will have `hover` applied before screenshotting
- `wait`: Number, if using `focusSelectors` or `hoverSelectors` this will insert a delay in milliseconds between the element interaction and the screenshot


## Publishing Prerelease Components

`npm run prerelease`

Publishes package to npm with a prerelease tag. You must increment the component's version manually prior to publishing. `--dry-run` flag will run the prerelease process without publishing to npm.

## Commits

This project is Commitizen friendly.  To install: `npm install -g commitizen`
When creating a pull request run `git cz` rather than `git commit` and follow the prompts.

## JSX

Cedar templates are written in JSX rather than as `.vue` SFCs in order to support tree-shaking. See [JSX notes](jsx.md) for more information.

## Creating New Components

You can generate new Cedar components by running `node generator.js`. The new component will be compiled based on the template inside `/templates`. After running the generator it will list out some manual steps that must be taken in order to add that new component to the main entry point and make it available in the dev environment.

## Dist Structure

This project uses Rollup to compile the Cedar components into CJS and ESM format. The `module` paramater in the `package.json` defines a tree-shakeable ESM entry point which is what should be used by consumers of Cedar for their production build. The single file `cedar.js` and `cedar.mjs` outputs are available for ease of setting up test/dev/internal projects but should not be used for customer facing production sites as those files are not tree-shakeable and they contain all of the code in Cedar.

```
/dist
  /lib -> Contains individual files matching the directory structure of Cedar. This is generated using the `preserveModules` option in rollup and is necessary for the Cedar distributable to be tree-shakeable
    /src
      /index.js -> Main entry point for ESM Cedar. Tree shake-able.
  /style -> Contains individual CSS files for each Cedar component
  /svg -> Contains SVG assets used by Cedar
  cdr-fonts.css -> Contains font definitions that Cedar depends on
  cedar-compiled.css -> Full compiled CSS for every Cedar component
  cedar.js -> Single file CJS output. Not tree-shakeable.
  cedar.mjs -> Single file ESM output. Not tree-shakeable.
```

## Prod/CSS/Dev/Test Builds

The main rollup build is defined in `rollup.config.js` and `build/rollup-plugins.js`.

The individual CSS files per component that exist in `dist/lib/style` are generated using the `build/extract-css.js` script. CSS class names have the current Cedar version appended to them to reduce the possibility of naming collissions and discourage consumers from overriding Cedar styles, that is done using a `generateScopedName` function which is defined in the rollup config as well as the extract-css utility.

The dev environment "kitchen sink" is compiled by `rollup.config.dev.js` and is defined in `/src/dev`.

The unit tests are run with Jest and are configured in `jest.config.js`. The e2e tests are defined in `/test`.
