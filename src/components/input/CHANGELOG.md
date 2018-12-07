<a name="1.0.1-alpha.0"></a>
## 1.0.1-alpha.0 (2018-12-07)


### Bug Fixes

* **input:** a11y test fix ([080972e](https://github.com/rei/rei-cedar/commit/080972e))
* **input:** link style update ([fe8e491](https://github.com/rei/rei-cedar/commit/fe8e491))
* **input:** removed direct modification of input value ([45d6070](https://github.com/rei/rei-cedar/commit/45d6070))
* **input:** updated element contrast for a11y ([b527cdd](https://github.com/rei/rei-cedar/commit/b527cdd))


### Chores

* **build:** make cdr-* packages externals by default ([e0d9763](https://github.com/rei/rei-cedar/commit/e0d9763))


### Features

* **18.9.1 release:** release adds support for cdr-icon and updates the peer-dependancies of compone ([5a6da2c](https://github.com/rei/rei-cedar/commit/5a6da2c))
* **all components:** change package name prefixes from cedar-* to cdr-* ([dad0dfb](https://github.com/rei/rei-cedar/commit/dad0dfb)), closes [#354](https://github.com/rei/rei-cedar/issues/354)
* **assets:** bump to 0.2.0 with removal of icon assets ([2e57098](https://github.com/rei/rei-cedar/commit/2e57098))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **deps:** update icon and assets for publishing ([48f2c67](https://github.com/rei/rei-cedar/commit/48f2c67))
* **docs:** added all component's routes to rei-cedar project, and a couple compositions as a POC ([29fdf72](https://github.com/rei/rei-cedar/commit/29fdf72))
* **examples:** updates to examples to use cdr-text rather than elements ([3619265](https://github.com/rei/rei-cedar/commit/3619265))
* **input:** add css resets to input ([ac3b95b](https://github.com/rei/rei-cedar/commit/ac3b95b))
* **input:** add defensive css for normalize and cedar 1 styles ([f930c61](https://github.com/rei/rei-cedar/commit/f930c61))
* **input:** add keydown event ([3c476b3](https://github.com/rei/rei-cedar/commit/3c476b3))
* **input:** finalized changes for input release ([2b480a3](https://github.com/rei/rei-cedar/commit/2b480a3))
* **input:** input refactor for cedar2 ([4ab0131](https://github.com/rei/rei-cedar/commit/4ab0131))
* **input:** removed explicit string value for inherit color input example ([9b2a536](https://github.com/rei/rei-cedar/commit/9b2a536))
* **input:** removed unneccessary comments ([da292c5](https://github.com/rei/rei-cedar/commit/da292c5))
* **input:** return event along with value in input event ([975fcc4](https://github.com/rei/rei-cedar/commit/975fcc4))
* **input:** update dependencies ([e6b43fa](https://github.com/rei/rei-cedar/commit/e6b43fa))
* **input:** updated comment for pre icon width slot ([d5ab6ba](https://github.com/rei/rei-cedar/commit/d5ab6ba))
* **input:** updated pre icon width constant and cleaned up comment ([093874d](https://github.com/rei/rei-cedar/commit/093874d))
* **input:** updated version to 1.0.0-alpha.4 ([9f8d6d4](https://github.com/rei/rei-cedar/commit/9f8d6d4))
* **input:** zach finished testing updating version ([595de3d](https://github.com/rei/rei-cedar/commit/595de3d))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **release:** bump all to 0.1.0 and remove base-components ([f5c335e](https://github.com/rei/rei-cedar/commit/f5c335e))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))


### BREAKING CHANGES

* **components:** Components are now using css-modules for unique class names tied to the package version
* **release:** packages no longer have plugin as default export
* **build:** Raw component cdr-* peerdependencies are no longer bundled
* **all components:** Change all package names to cdr- prefix. Package name for cdr-image changed to cdr-img. Package name
for cdr-column changed to cdr-col



