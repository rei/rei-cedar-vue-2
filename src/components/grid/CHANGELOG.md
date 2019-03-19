# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 1.0.3 (2019-02-28)


### Bug Fixes

* **grid:** add defensive css to prevent cedar 1 collisions ([4a96291](https://github.com/rei/rei-cedar/commit/4a96291))
* **grid:** add style property to package.json ([6f7a22f](https://github.com/rei/rei-cedar/commit/6f7a22f))
* **grid:** change how grid gutters are created ([8807caa](https://github.com/rei/rei-cedar/commit/8807caa))
* **grid:** remove margin bottom from row ([0f68118](https://github.com/rei/rei-cedar/commit/0f68118))


### Features

* **18.9.1 release:** release adds support for cdr-icon and updates the peer-dependancies of compone ([5a6da2c](https://github.com/rei/rei-cedar/commit/5a6da2c))
* **examples:** updates to examples to use cdr-text rather than elements ([3619265](https://github.com/rei/rei-cedar/commit/3619265))
* **grid:** consolidate col's alignSelf props to single alignSelf ([0058ad0](https://github.com/rei/rei-cedar/commit/0058ad0))
* **grid:** consolidate col's offsetLeft props to just offsetLeft ([ecc3294](https://github.com/rei/rei-cedar/commit/ecc3294))
* **grid:** consolidate col's offsetRight props to single offsetRight ([b812e99](https://github.com/rei/rei-cedar/commit/b812e99))
* **grid:** consolidate col's span props to just span ([a3ef361](https://github.com/rei/rei-cedar/commit/a3ef361))
* **grid:** move col and row to single package ([b0469b6](https://github.com/rei/rei-cedar/commit/b0469b6))
* **grid:** update align prop to accept responsive values ([1907de8](https://github.com/rei/rei-cedar/commit/1907de8))
* **grid:** update col and justify props to accept responsive values ([c572a51](https://github.com/rei/rei-cedar/commit/c572a51))
* **grid:** update dependencies ([4c320d1](https://github.com/rei/rei-cedar/commit/4c320d1))
* **grid:** update gutter prop to accept responsive values ([a3f613f](https://github.com/rei/rei-cedar/commit/a3f613f))
* **grid:** update row's nowrap prop to accept responsive values ([6dd3514](https://github.com/rei/rei-cedar/commit/6dd3514))
* **grid:** update vertical prop to be a string and accept responsive values ([008f05b](https://github.com/rei/rei-cedar/commit/008f05b))
* **grid:** update wrap prop to be a string and accept responsive values ([cfe2d8a](https://github.com/rei/rei-cedar/commit/cfe2d8a))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))


### BREAKING CHANGES

* **grid:** alignSelfSm, alignSelfMd, alignSelfLg consolidated to just alignSelf that accepts responsive
modifiers
* **grid:** Removes space at the top of the first row of each cdr-row. Resulting size should be unchanged.
* **grid:** offsetLeftSm, offsetLeftMd, offsetLeftLg consolidated to just offsetLeft that accepts responsive
modifiers
* **grid:** spanSm, spanMd, spanLg removed and span accepts responsive modifiers
* **grid:** change row's nowrap prop from boolean to string. Remove nowrapSm, nowrapMd, nowrapLg in favor of
using nowrap with responsive modifiers
* **grid:** remove wrapSm, wrapMd, wrapLg in favor of using wrap with responsive modifiers
* **grid:** offsetRightSm, offsetRightMd, offsetRightLg consolidated to just offsetRight that accepts responsive modifiers
* **grid:** gutterSm, gutterMd, gutterLg replaced with just gutter
* **grid:** alignSm, alignMd, alignLg replaced with just align that accepts responsive values
* **grid:** colsSm, colsMd, colsLg replaced with just cols prop. justifySm, justifyMd, justifyLg replaced with
just justify prop
* **grid:** grid css is no longer in cdr-assets, col and row are no longer their own packages
* **grid:** row no longer has a margin-bottom so no styles bleed
* **grid:** vertical prop is now a string instead of boolean. verticalSm, verticalMd, verticalLg removed and now
supports responsive modifiers





<a name="1.0.2"></a>
## 1.0.2 (2018-12-20)


### Bug Fixes

* **grid:** add defensive css to prevent cedar 1 collisions ([4a96291](https://github.com/rei/rei-cedar/commit/4a96291))
* **grid:** add style property to package.json ([6f7a22f](https://github.com/rei/rei-cedar/commit/6f7a22f))


### Features

* **18.9.1 release:** release adds support for cdr-icon and updates the peer-dependancies of compone ([5a6da2c](https://github.com/rei/rei-cedar/commit/5a6da2c))
* **examples:** updates to examples to use cdr-text rather than elements ([3619265](https://github.com/rei/rei-cedar/commit/3619265))
* **grid:** consolidate col's alignSelf props to single alignSelf ([0058ad0](https://github.com/rei/rei-cedar/commit/0058ad0))
* **grid:** consolidate col's offsetLeft props to just offsetLeft ([ecc3294](https://github.com/rei/rei-cedar/commit/ecc3294))
* **grid:** consolidate col's offsetRight props to single offsetRight ([b812e99](https://github.com/rei/rei-cedar/commit/b812e99))
* **grid:** consolidate col's span props to just span ([a3ef361](https://github.com/rei/rei-cedar/commit/a3ef361))
* **grid:** move col and row to single package ([b0469b6](https://github.com/rei/rei-cedar/commit/b0469b6))
* **grid:** release 0.2.0 ([accc22b](https://github.com/rei/rei-cedar/commit/accc22b))
* **grid:** update align prop to accept responsive values ([1907de8](https://github.com/rei/rei-cedar/commit/1907de8))
* **grid:** update col and justify props to accept responsive values ([c572a51](https://github.com/rei/rei-cedar/commit/c572a51))
* **grid:** update dependencies ([4c320d1](https://github.com/rei/rei-cedar/commit/4c320d1))
* **grid:** update gutter prop to accept responsive values ([a3f613f](https://github.com/rei/rei-cedar/commit/a3f613f))
* **grid:** update row's nowrap prop to accept responsive values ([6dd3514](https://github.com/rei/rei-cedar/commit/6dd3514))
* **grid:** update vertical prop to be a string and accept responsive values ([008f05b](https://github.com/rei/rei-cedar/commit/008f05b))
* **grid:** update wrap prop to be a string and accept responsive values ([cfe2d8a](https://github.com/rei/rei-cedar/commit/cfe2d8a))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))


### BREAKING CHANGES

* **grid:** alignSelfSm, alignSelfMd, alignSelfLg consolidated to just alignSelf that accepts responsive
modifiers
* **grid:** grid css is no longer in cdr-assets, col and row are no longer their own packages
* **grid:** offsetLeftSm, offsetLeftMd, offsetLeftLg consolidated to just offsetLeft that accepts responsive
modifiers
* **grid:** spanSm, spanMd, spanLg removed and span accepts responsive modifiers
* **grid:** change row's nowrap prop from boolean to string. Remove nowrapSm, nowrapMd, nowrapLg in favor of
using nowrap with responsive modifiers
* **grid:** offsetRightSm, offsetRightMd, offsetRightLg consolidated to just offsetRight that accepts responsive modifiers
* **grid:** vertical prop is now a string instead of boolean. verticalSm, verticalMd, verticalLg removed and now
supports responsive modifiers
* **grid:** gutterSm, gutterMd, gutterLg replaced with just gutter
* **grid:** alignSm, alignMd, alignLg replaced with just align that accepts responsive values
* **grid:** colsSm, colsMd, colsLg replaced with just cols prop. justifySm, justifyMd, justifyLg replaced with
just justify prop
* **grid:** remove wrapSm, wrapMd, wrapLg in favor of using wrap with responsive modifiers
