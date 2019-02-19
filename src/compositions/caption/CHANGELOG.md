# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.0.1 (2019-02-19)


* Patch update so lerna can manage future releases


<a name="1.0.0"></a>
# 1.0.0 (2018-12-20)


### Chores

* **build:** make cdr-* packages externals by default ([e0d9763](https://github.com/rei/rei-cedar/commit/e0d9763))


### Features

* **18.9.1 release:** release adds support for cdr-icon and updates the peer-dependancies of compone ([5a6da2c](https://github.com/rei/rei-cedar/commit/5a6da2c))
* **assets:** bump to 0.2.0 with removal of icon assets ([2e57098](https://github.com/rei/rei-cedar/commit/2e57098))
* **caption:** add defensive css for normalize and cedar 1 styles ([99c0698](https://github.com/rei/rei-cedar/commit/99c0698))
* **caption:** clean up caption composition ([d88bfa5](https://github.com/rei/rei-cedar/commit/d88bfa5))
* **caption:** update dependencies ([daee967](https://github.com/rei/rei-cedar/commit/daee967))
* **caption block-quote and pull-quote release:** moving these components to v1 ([0286274](https://github.com/rei/rei-cedar/commit/0286274))
* **component:** the cdr-quote component allows for block and pull quotes. spacing, inset, and break ([2c30b1a](https://github.com/rei/rei-cedar/commit/2c30b1a))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **css reset:** accounted for heading and paragraph resets in components ([2cab6ca](https://github.com/rei/rei-cedar/commit/2cab6ca))
* **deps:** update icon and assets for publishing ([48f2c67](https://github.com/rei/rei-cedar/commit/48f2c67))
* **docs:** added all component's routes to rei-cedar project, and a couple compositions as a POC ([29fdf72](https://github.com/rei/rei-cedar/commit/29fdf72))
* **docs:** added compositions routes ([a3a0f81](https://github.com/rei/rei-cedar/commit/a3a0f81))
* **examples:** updates to examples to use cdr-text rather than elements ([3619265](https://github.com/rei/rei-cedar/commit/3619265))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **release:** bump all to 0.1.0 and remove base-components ([f5c335e](https://github.com/rei/rei-cedar/commit/f5c335e))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))
* **tokens:** consume 0.0.6 tokens and fix issues ([53f4baa](https://github.com/rei/rei-cedar/commit/53f4baa))


### BREAKING CHANGES

* **components:** Components are now using css-modules for unique class names tied to the package version
* **release:** packages no longer have plugin as default export
* **build:** Raw component cdr-* peerdependencies are no longer bundled
