<a name="0.1.4"></a>
## 0.1.4 (2018-12-20)


### Bug Fixes

* **activity card:** correct border-radius on image to match card ([5a48d79](https://github.com/rei/rei-cedar/commit/5a48d79))
* **css:** relocate needed anchor reset css ([8cc8ced](https://github.com/rei/rei-cedar/commit/8cc8ced))
* **peer dependancy updates:** not all files had the icon peer updates ([5489a22](https://github.com/rei/rei-cedar/commit/5489a22))


### Chores

* **build:** make cdr-* packages externals by default ([e0d9763](https://github.com/rei/rei-cedar/commit/e0d9763))


### Features

* **18.9.1 release:** release adds support for cdr-icon and updates the peer-dependancies of compone ([5a6da2c](https://github.com/rei/rei-cedar/commit/5a6da2c))
* **activity-card:** publish new plugin build ([2fb19e3](https://github.com/rei/rei-cedar/commit/2fb19e3))
* **activity-card:** update dependencies ([efcc917](https://github.com/rei/rei-cedar/commit/efcc917))
* **all components:** change package name prefixes from cedar-* to cdr-* ([dad0dfb](https://github.com/rei/rei-cedar/commit/dad0dfb)), closes [#354](https://github.com/rei/rei-cedar/issues/354)
* **assets:** bump to 0.2.0 with removal of icon assets ([2e57098](https://github.com/rei/rei-cedar/commit/2e57098))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **deps:** update icon and assets for publishing ([48f2c67](https://github.com/rei/rei-cedar/commit/48f2c67))
* **docs:** added all component's routes to rei-cedar project, and a couple compositions as a POC ([29fdf72](https://github.com/rei/rei-cedar/commit/29fdf72))
* **docs:** added compositions routes ([a3a0f81](https://github.com/rei/rei-cedar/commit/a3a0f81))
* **examples:** updates to examples to use cdr-text rather than elements ([3619265](https://github.com/rei/rei-cedar/commit/3619265))
* **input:** input refactor for cedar2 ([4ab0131](https://github.com/rei/rei-cedar/commit/4ab0131))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **release:** bump all to 0.1.0 and remove base-components ([f5c335e](https://github.com/rei/rei-cedar/commit/f5c335e))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))


### BREAKING CHANGES

* **components:** Components are now using css-modules for unique class names tied to the package version
* **release:** packages no longer have plugin as default export
* **activity-card:** activity-card no longer is a plugin by default
* **build:** Raw component cdr-* peerdependencies are no longer bundled
* **all components:** Change all package names to cdr- prefix. Package name for cdr-image changed to cdr-img. Package name
for cdr-column changed to cdr-col



