<a name="1.0.0-next.beta.4"></a>
# 1.0.0-next.beta.4 (2018-09-13)


### Bug Fixes

* **icon:** prevent flex icon shrinking ([851a078](https://github.com/rei/rei-cedar/commit/851a078))
* **icons:** flip incorrect pin-fill and pin-stroke icons ([4a3ce56](https://github.com/rei/rei-cedar/commit/4a3ce56))


### Chores

* **build:** make cdr-* packages externals by default ([e0d9763](https://github.com/rei/rei-cedar/commit/e0d9763))


### Features

* **all components:** change package name prefixes from cedar-* to cdr-* ([dad0dfb](https://github.com/rei/rei-cedar/commit/dad0dfb)), closes [#354](https://github.com/rei/rei-cedar/issues/354)
* **assets:** bump to 0.2.0 with removal of icon assets ([2e57098](https://github.com/rei/rei-cedar/commit/2e57098))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **deps:** update icon and assets for publishing ([48f2c67](https://github.com/rei/rei-cedar/commit/48f2c67))
* **docs:** added all component's routes to rei-cedar project, and a couple compositions as a POC ([29fdf72](https://github.com/rei/rei-cedar/commit/29fdf72))
* **icon:** add a slot to all components ([5bd063f](https://github.com/rei/rei-cedar/commit/5bd063f))
* **icon:** add grid-view, list-view, and scan-barcode icons ([918f782](https://github.com/rei/rei-cedar/commit/918f782))
* **icon:** generate new sprite, externalize icon.json ([f49f828](https://github.com/rei/rei-cedar/commit/f49f828))
* **icon:** update dependencies ([6b6c0fe](https://github.com/rei/rei-cedar/commit/6b6c0fe))
* **icons:** gernerate icon components ([dcefd4e](https://github.com/rei/rei-cedar/commit/dcefd4e))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **link-component:** simplifies link component props, adds prop to Icon for fill color inheritance ([9d404f4](https://github.com/rei/rei-cedar/commit/9d404f4))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))


### BREAKING CHANGES

* **icons:** pin-fill and pin-stroke have been reversed to correct a naming error
* **icon:** Replace star icons with new ones
* **components:** Components are now using css-modules for unique class names tied to the package version
* **icons:** cdr-icon is now used as a lower level component for the icon components. A complete rewrite with no
backwards compatibility.
* **build:** Raw component cdr-* peerdependencies are no longer bundled
* **all components:** Change all package names to cdr- prefix. Package name for cdr-image changed to cdr-img. Package name
for cdr-column changed to cdr-col



