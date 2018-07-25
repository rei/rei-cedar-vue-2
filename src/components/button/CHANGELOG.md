<a name="1.0.0"></a>
# 1.0.0 (2018-07-25)


### Bug Fixes

* **button:** bump version to match alpha ([3439b98](https://github.com/rei/rei-cedar/commit/3439b98))
* **button cta:** import cdr-icon css for components packaged with an icon ([6bb2233](https://github.com/rei/rei-cedar/commit/6bb2233))


### Chores

* **build:** make cdr-* packages externals by default ([e0d9763](https://github.com/rei/rei-cedar/commit/e0d9763))


### Features

* **accordion button cta:** bump versions to match alpha release ([c7f21bb](https://github.com/rei/rei-cedar/commit/c7f21bb))
* **all components:** change package name prefixes from cedar-* to cdr-* ([dad0dfb](https://github.com/rei/rei-cedar/commit/dad0dfb)), closes [#354](https://github.com/rei/rei-cedar/issues/354)
* **assets:** bump to 0.2.0 with removal of icon assets ([2e57098](https://github.com/rei/rei-cedar/commit/2e57098))
* **buttons:** update to use css modules ([a5e5fda](https://github.com/rei/rei-cedar/commit/a5e5fda))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **deps:** update icon and assets for publishing ([48f2c67](https://github.com/rei/rei-cedar/commit/48f2c67))
* **docs:** added all component's routes to rei-cedar project, and a couple compositions as a POC ([29fdf72](https://github.com/rei/rei-cedar/commit/29fdf72))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **release:** bump all to 0.1.0 and remove base-components ([f5c335e](https://github.com/rei/rei-cedar/commit/f5c335e))


### BREAKING CHANGES

* **buttons:** Buttons use css modules
* **components:** Components are now using css-modules for unique class names tied to the package version
* **release:** packages no longer have plugin as default export
* **build:** Raw component cdr-* peerdependencies are no longer bundled
* **all components:** Change all package names to cdr- prefix. Package name for cdr-image changed to cdr-img. Package name
for cdr-column changed to cdr-col



