# REI Cedar Style Framework!
[![Build Status](https://travis-ci.org/rei/rei-cedar.svg?branch=master)](https://travis-ci.org/rei/rei-cedar)
[![codecov](https://codecov.io/gh/rei/rei-cedar/branch/master/graph/badge.svg)](https://codecov.io/gh/rei/rei-cedar)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Welcome to REI's style framework! The overall goals of this project are to provide a common scaffolding for UI elements,
and a set of themes that build on this scaffolding. We started this project in 2015 as a fork of
[Bootstrap](http://getbootstrap.com/).
The project has evolved into what it is today, and will continue to grow to fit our expanding needs. Feel free to watch
the Cedar grow and learn from what we are doing, or jump in and provide some recommendations.

## Using Cedar

See the [Cedar docs](https://rei.github.io/rei-cedar-docs/) for usage instructions.

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

This projects Changelogs are generated.
- Generate the Changelog: `npm run changelog`

## JSX

Cedar templates are written in JSX rather than as `.vue` SFCs in order to support tree-shaking. See [JSX notes](jsx.md) for more information.
