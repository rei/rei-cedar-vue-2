# REI Cedar Style Framework!
[![Build Status](https://travis-ci.org/rei/rei-cedar.svg?branch=master)](https://travis-ci.org/rei/rei-cedar)
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

```kill -9 $(lsof -ti tcp:35729)```

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

#### Notes about our backstop configuration

We’re aliasing the backstop commands to use `npm run <command>` just to abstract away supplying the config option since we are using a javascript based backstop config file to dynamically generate most of it. By using the js format instead of the standard json, we can avoid having a monolithic config file and instead have more localized, manageable configs that can remove some repetition and allow for different stateful tests, like hover, more easily.

The config (`backstop.js`) looks through `src/` for all __*.backstop.js__ and generates a proper backstop scenario object for each.

If you want to test hover statyes you can create another array of selectors `hoverSelectors`. These selectors will use an onReadyScript (`hover.js`) to simulate a mouse moving and hovering. This engine script uses [chromy](https://github.com/OnetapInc/chromy). **This is a custom config option we've added to allow for adding hover tests for an array of selectors easily.**

Engine scripts live in `backstop_data > engine_scripts`

__*.backstop.js__ files will export an array of objects that are standard backstop scenario objects and support all the same options noted in the docs with the following exceptions:

1. `url` is assumed to be `localhost:8080` (running the project locally) and you don’t need to define that for each object.
2. `readyEvent` is set to null for each scenario.
3. `hoverSelectors` is a custom option we've added (as noted above).

### Publishing Prerelease Components

`npm run prerelease`

Publishes package to npm with a prerelease tag. You must increment the component's version manually prior to publishing. `--dry-run` flag will run the prerelease process without publishing to npm.

## Commits

This project is Commitizen friendly.  To install: `npm install -g commitizen`
When creating a pull request run `git cz` rather than `git commit` and follow the prompts.

This projects Changelogs are generated.
To output the latest changelog files you will need to create a new repository release.
This is done with calendar versioning in the following format
**YY.MM.(iterator)**

- Generate the root Changelog: `standard-changelog`.
- Generate the component Changelogs: `lerna-semantic-release post`.
