<a name="0.2.0"></a>
# 0.2.0 (2018-06-27)


### Bug Fixes

* **icon:** prevent flex icon shrinking ([851a078](https://github.com/rei/rei-cedar/commit/851a078))


### Chores

* **build:** make cdr-* packages externals by default ([e0d9763](https://github.com/rei/rei-cedar/commit/e0d9763))


### Features

* **all components:** change package name prefixes from cedar-* to cdr-* ([dad0dfb](https://github.com/rei/rei-cedar/commit/dad0dfb)), closes [#354](https://github.com/rei/rei-cedar/issues/354)
* **assets:** bump to 0.2.0 with removal of icon assets ([2e57098](https://github.com/rei/rei-cedar/commit/2e57098))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **deps:** update icon and assets for publishing ([48f2c67](https://github.com/rei/rei-cedar/commit/48f2c67))
* **docs:** added all component's routes to rei-cedar project, and a couple compositions as a POC ([29fdf72](https://github.com/rei/rei-cedar/commit/29fdf72))
* **icon:** generate new sprite, externalize icon.json ([f49f828](https://github.com/rei/rei-cedar/commit/f49f828))
* **icons:** gernerate icon components ([dcefd4e](https://github.com/rei/rei-cedar/commit/dcefd4e))
* **link-component:** simplifies link component props, adds prop to Icon for fill color inheritance ([9d404f4](https://github.com/rei/rei-cedar/commit/9d404f4))


### BREAKING CHANGES

* **components:** Components are now using css-modules for unique class names tied to the package version
* **icons:** cdr-icon is now used as a lower level component for the icon components. A complete rewrite with no
backwards compatibility.
* **build:** Raw component cdr-* peerdependencies are no longer bundled
* **all components:** Change all package names to cdr- prefix. Package name for cdr-image changed to cdr-img. Package name
for cdr-column changed to cdr-col



