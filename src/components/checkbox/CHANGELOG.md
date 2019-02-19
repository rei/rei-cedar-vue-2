# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.0.2 (2019-02-19)


### chore

* **build:** make cdr-* packages externals by default ([e0d9763](https://github.com/rei/rei-cedar/commit/e0d9763))


### Features

* **checkbox radio:** update checkbox and radio to design spec ([30a5ef0](https://github.com/rei/rei-cedar/commit/30a5ef0))
* 1.0 Space variables and classes have been added to REI-Cedar, Brand.ai vaiables have been upda ([7e87b0f](https://github.com/rei/rei-cedar/commit/7e87b0f))
* **18.9.1 release:** release adds support for cdr-icon and updates the peer-dependancies of compone ([5a6da2c](https://github.com/rei/rei-cedar/commit/5a6da2c))
* **all components:** change package name prefixes from cedar-* to cdr-* ([dad0dfb](https://github.com/rei/rei-cedar/commit/dad0dfb)), closes [#354](https://github.com/rei/rei-cedar/issues/354)
* **assets:** bump to 0.2.0 with removal of icon assets ([2e57098](https://github.com/rei/rei-cedar/commit/2e57098))
* **cdr-radio release:** updates to the cdr-radio readme API and moving the package.json to v1 ([13b35c4](https://github.com/rei/rei-cedar/commit/13b35c4))
* **checkbox:** add custom label class ([7012f33](https://github.com/rei/rei-cedar/commit/7012f33))
* **checkbox:** update dependencies ([ea5d4fa](https://github.com/rei/rei-cedar/commit/ea5d4fa))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **components:** update npm organization from [@rei-co-op](https://github.com/rei-co-op) to [@rei](https://github.com/rei) ([0842f77](https://github.com/rei/rei-cedar/commit/0842f77))
* **crd-checkbox release:** updates to the cdr-checkbox API readme and bumping the package to v1 ([0066831](https://github.com/rei/rei-cedar/commit/0066831))
* **deps:** update icon and assets for publishing ([48f2c67](https://github.com/rei/rei-cedar/commit/48f2c67))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **release:** bump all to 0.1.0 and remove base-components ([f5c335e](https://github.com/rei/rei-cedar/commit/f5c335e))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))
* **resets:** remove unused css and relocate resets into components ([b6134dc](https://github.com/rei/rei-cedar/commit/b6134dc)), closes [#516](https://github.com/rei/rei-cedar/issues/516) [#518](https://github.com/rei/rei-cedar/issues/518) [#519](https://github.com/rei/rei-cedar/issues/519) [#498](https://github.com/rei/rei-cedar/issues/498)


### BREAKING CHANGES

* **components:** Components are now using css-modules for unique class names tied to the package version
* **checkbox radio:** box model sizing changes
* **release:** packages no longer have plugin as default export
* **build:** Raw component cdr-* peerdependencies are no longer bundled
* **all components:** Change all package names to cdr- prefix. Package name for cdr-image changed to cdr-img. Package name
for cdr-column changed to cdr-col
* **components:** Update all package names
* The Checkbox and Radio had a hard-coded value of 10px for right margin spacing,
this is not represented in the spacing system and was updated with the closest represnted  value,
size-sm(8px).

PLIB-2046





<a name="1.0.1"></a>
## 1.0.1 (2018-12-20)


### Chores

* **build:** make cdr-* packages externals by default ([e0d9763](https://github.com/rei/rei-cedar/commit/e0d9763))


### Features

* **18.9.1 release:** release adds support for cdr-icon and updates the peer-dependancies of compone ([5a6da2c](https://github.com/rei/rei-cedar/commit/5a6da2c))
* **all components:** change package name prefixes from cedar-* to cdr-* ([dad0dfb](https://github.com/rei/rei-cedar/commit/dad0dfb)), closes [#354](https://github.com/rei/rei-cedar/issues/354)
* **assets:** bump to 0.2.0 with removal of icon assets ([2e57098](https://github.com/rei/rei-cedar/commit/2e57098))
* **cdr-radio release:** updates to the cdr-radio readme API and moving the package.json to v1 ([13b35c4](https://github.com/rei/rei-cedar/commit/13b35c4))
* **checkbox:** add custom label class ([d8882b8](https://github.com/rei/rei-cedar/commit/d8882b8))
* **checkbox:** add custom label class ([7012f33](https://github.com/rei/rei-cedar/commit/7012f33))
* **checkbox:** update dependencies ([ea5d4fa](https://github.com/rei/rei-cedar/commit/ea5d4fa))
* **checkbox radio:** update checkbox and radio to design spec ([30a5ef0](https://github.com/rei/rei-cedar/commit/30a5ef0))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **crd-checkbox release:** updates to the cdr-checkbox API readme and bumping the package to v1 ([0066831](https://github.com/rei/rei-cedar/commit/0066831))
* **deps:** update icon and assets for publishing ([48f2c67](https://github.com/rei/rei-cedar/commit/48f2c67))
* **docs:** added all component's routes to rei-cedar project, and a couple compositions as a POC ([29fdf72](https://github.com/rei/rei-cedar/commit/29fdf72))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **release:** bump all to 0.1.0 and remove base-components ([f5c335e](https://github.com/rei/rei-cedar/commit/f5c335e))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))


### BREAKING CHANGES

* **components:** Components are now using css-modules for unique class names tied to the package version
* **checkbox radio:** box model sizing changes
* **release:** packages no longer have plugin as default export
* **build:** Raw component cdr-* peerdependencies are no longer bundled
* **all components:** Change all package names to cdr- prefix. Package name for cdr-image changed to cdr-img. Package name
for cdr-column changed to cdr-col
