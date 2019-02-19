# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 0.3.1 (2019-02-19)


### Bug Fixes

* **assets:** fix async race condition in icon asset build ([4934639](https://github.com/rei/rei-cedar/commit/4934639))


### Features

* **18.9.1 release:** release adds support for cdr-icon and updates the peer-dependancies of compone ([5a6da2c](https://github.com/rei/rei-cedar/commit/5a6da2c))
* **assets:** bump to 0.2.0 with removal of icon assets ([2e57098](https://github.com/rei/rei-cedar/commit/2e57098))
* **assets:** remove icons from assets ([c402676](https://github.com/rei/rei-cedar/commit/c402676))
* **deps:** update icon and assets for publishing ([48f2c67](https://github.com/rei/rei-cedar/commit/48f2c67))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))


### BREAKING CHANGES

* **assets:** icon assets are removed from cdr-assets and are now in cdr-icon





<a name="0.3.0"></a>
# 0.3.0 (2018-12-20)


### Bug Fixes

* **assets:** fix async race condition in icon asset build ([4934639](https://github.com/rei/rei-cedar/commit/4934639))
* **grid:** remove margin bottom from row ([0f68118](https://github.com/rei/rei-cedar/commit/0f68118))


### Features

* **18.9.1 release:** release adds support for cdr-icon and updates the peer-dependancies of compone ([5a6da2c](https://github.com/rei/rei-cedar/commit/5a6da2c))
* **all components:** change package name prefixes from cedar-* to cdr-* ([dad0dfb](https://github.com/rei/rei-cedar/commit/dad0dfb)), closes [#354](https://github.com/rei/rei-cedar/issues/354)
* **assets:** bump to 0.2.0 with removal of icon assets ([2e57098](https://github.com/rei/rei-cedar/commit/2e57098))
* **assets:** remove icons from assets ([c402676](https://github.com/rei/rei-cedar/commit/c402676))
* **assets:** remove tokens from assets ([9304b8f](https://github.com/rei/rei-cedar/commit/9304b8f))
* **deps:** update icon and assets for publishing ([48f2c67](https://github.com/rei/rei-cedar/commit/48f2c67))
* **docs:** added all component's routes to rei-cedar project, and a couple compositions as a POC ([29fdf72](https://github.com/rei/rei-cedar/commit/29fdf72))
* **fonts:** remove several font weights and styles ([36f21d8](https://github.com/rei/rei-cedar/commit/36f21d8))
* **icon:** generate new sprite, externalize icon.json ([f49f828](https://github.com/rei/rei-cedar/commit/f49f828))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))
* **reset:** remove anchor styles from reset ([853740e](https://github.com/rei/rei-cedar/commit/853740e))
* **resets:** normalize resets to use tokens ([5a705e3](https://github.com/rei/rei-cedar/commit/5a705e3))
* **tokens:** output token file for cdr-assets ([717836f](https://github.com/rei/rei-cedar/commit/717836f))


### BREAKING CHANGES

* **assets:** Token file removed from cdr-assets. They are available in @rei/cdr-tokens
* **reset:** removed default anchor styles from reset, now only available via cdr-link
* **resets:** Default line height changed from 1.15 to 1 | Remove default margin on blockquote, figure, and label
elements
* **assets:** icon assets are removed from cdr-assets and are now in cdr-icon
* **grid:** row no longer has a margin-bottom so no styles bleed
* **all components:** Change all package names to cdr- prefix. Package name for cdr-image changed to cdr-img. Package name
for cdr-column changed to cdr-col
