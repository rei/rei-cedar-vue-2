<a name="18.6.1"></a>
## [18.6.1](https://github.com/rei/rei-cedar/compare/v5.0.0-alpha.1...v18.6.1) (2018-06-27)


### Bug Fixes

* **cdr-img:** the radius validator did not have the correct values, removing them and updating radiu ([c39066d](https://github.com/rei/rei-cedar/commit/c39066d))
* **select:** fix bug with selenium interaction ([18fbab3](https://github.com/rei/rei-cedar/commit/18fbab3))
* **select:** update variable name ([dbdc0e4](https://github.com/rei/rei-cedar/commit/dbdc0e4))


### Features

* **breadcrumb:** breadcrumb component is ready for pr ([984a31c](https://github.com/rei/rei-cedar/commit/984a31c))
* **breadcrumb:** final cleanup after pr comments ([34467e9](https://github.com/rei/rei-cedar/commit/34467e9))
* **buttons:** update to use css modules ([a5e5fda](https://github.com/rei/rei-cedar/commit/a5e5fda))
* **cedar proving grounds:** loops through all the routes, which have been moved to routes.js, and e ([7cda2b3](https://github.com/rei/rei-cedar/commit/7cda2b3))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **grid:** consolidate col's alignSelf props to single alignSelf ([0058ad0](https://github.com/rei/rei-cedar/commit/0058ad0))
* **grid:** consolidate col's offsetLeft props to just offsetLeft ([ecc3294](https://github.com/rei/rei-cedar/commit/ecc3294))
* **grid:** consolidate col's offsetRight props to single offsetRight ([b812e99](https://github.com/rei/rei-cedar/commit/b812e99))
* **grid:** consolidate col's span props to just span ([a3ef361](https://github.com/rei/rei-cedar/commit/a3ef361))
* **grid:** move col and row to single package ([b0469b6](https://github.com/rei/rei-cedar/commit/b0469b6))
* **grid:** update align prop to accept responsive values ([1907de8](https://github.com/rei/rei-cedar/commit/1907de8))
* **grid:** update col and justify props to accept responsive values ([c572a51](https://github.com/rei/rei-cedar/commit/c572a51))
* **grid:** update gutter prop to accept responsive values ([a3f613f](https://github.com/rei/rei-cedar/commit/a3f613f))
* **grid:** update row's nowrap prop to accept responsive values ([6dd3514](https://github.com/rei/rei-cedar/commit/6dd3514))
* **grid:** update vertical prop to be a string and accept responsive values ([008f05b](https://github.com/rei/rei-cedar/commit/008f05b))
* **grid:** update wrap prop to be a string and accept responsive values ([cfe2d8a](https://github.com/rei/rei-cedar/commit/cfe2d8a))
* **link:** use css modules for link ([6b244d2](https://github.com/rei/rei-cedar/commit/6b244d2))
* **link:** use css modules with link ([bfb98f9](https://github.com/rei/rei-cedar/commit/bfb98f9))
* **proving grounds:** removes cruft ([ae8c943](https://github.com/rei/rei-cedar/commit/ae8c943))
* **tokens:** consume [@rei](https://github.com/rei)/cdr-tokens package ([f094978](https://github.com/rei/rei-cedar/commit/f094978))


### BREAKING CHANGES

* **grid:** alignSelfSm, alignSelfMd, alignSelfLg consolidated to just alignSelf that accepts responsive
modifiers
* **components:** Components are now using css-modules for unique class names tied to the package version
* **grid:** offsetLeftSm, offsetLeftMd, offsetLeftLg consolidated to just offsetLeft that accepts responsive
modifiers
* **grid:** spanSm, spanMd, spanLg removed and span accepts responsive modifiers
* **grid:** change row's nowrap prop from boolean to string. Remove nowrapSm, nowrapMd, nowrapLg in favor of
using nowrap with responsive modifiers
* **grid:** remove wrapSm, wrapMd, wrapLg in favor of using wrap with responsive modifiers
* **grid:** vertical prop is now a string instead of boolean. verticalSm, verticalMd, verticalLg removed and now
supports responsive modifiers
* **grid:** offsetRightSm, offsetRightMd, offsetRightLg consolidated to just offsetRight that accepts responsive modifiers
* **grid:** alignSm, alignMd, alignLg replaced with just align that accepts responsive values
* **grid:** colsSm, colsMd, colsLg replaced with just cols prop. justifySm, justifyMd, justifyLg replaced with
just justify prop
* **buttons:** Buttons use css modules
* **grid:** grid css is no longer in cdr-assets, col and row are no longer their own packages
* **link:** link uses css modules
* **link:** link now uses css modules
* **grid:** gutterSm, gutterMd, gutterLg replaced with just gutter



<a name="5.0.0-0"></a>
# [5.0.0-0](https://github.com/rei/rei-cedar/compare/v4.3.4-0...v5.0.0-0) (2018-01-29)


### Bug Fixes

* **rating:** Fix rating screen reader text to be rounded ([949fc92](https://github.com/rei/rei-cedar/commit/949fc92)), closes [#352](https://github.com/rei/rei-cedar/issues/352)


### Features

* 1.0 Space variables and classes have been added to REI-Cedar, Brand.ai vaiables have been upda ([7e87b0f](https://github.com/rei/rei-cedar/commit/7e87b0f))


### BREAKING CHANGES

* The Checkbox and Radio had a hard-coded value of 10px for right margin spacing,
this is not represented in the spacing system and was updated with the closest represnted  value,
size-sm(8px).

PLIB-2046



<a name="4.3.4-0"></a>
## [4.3.4-0](https://github.com/rei/rei-cedar/compare/v4.3.3-0...v4.3.4-0) (2017-09-26)



<a name="4.3.3-0"></a>
## [4.3.3-0](https://github.com/rei/rei-cedar/compare/v4.3.2-0...v4.3.3-0) (2017-09-21)



<a name="4.3.2-0"></a>
## [4.3.2-0](https://github.com/rei/rei-cedar/compare/v4.3.1-0...v4.3.2-0) (2017-09-18)



<a name="4.3.1-0"></a>
## [4.3.1-0](https://github.com/rei/rei-cedar/compare/v4.3.0-0...v4.3.1-0) (2017-09-14)



<a name="4.3.0-0"></a>
# [4.3.0-0](https://github.com/rei/rei-cedar/compare/v4.2.0-0...v4.3.0-0) (2017-09-13)



<a name="4.2.0-0"></a>
# [4.2.0-0](https://github.com/rei/rei-cedar/compare/v4.1.1-0...v4.2.0-0) (2017-09-11)



<a name="4.1.1-0"></a>
## [4.1.1-0](https://github.com/rei/rei-cedar/compare/v4.1.0-0...v4.1.1-0) (2017-09-08)



<a name="4.1.0-0"></a>
# [4.1.0-0](https://github.com/rei/rei-cedar/compare/v4.0.1-0...v4.1.0-0) (2017-09-07)



<a name="4.0.1-0"></a>
## [4.0.1-0](https://github.com/rei/rei-cedar/compare/v4.0.0-0...v4.0.1-0) (2017-09-05)



<a name="4.0.0-0"></a>
# [4.0.0-0](https://github.com/rei/rei-cedar/compare/v3.0.0-0...v4.0.0-0) (2017-09-05)



<a name="3.0.0-0"></a>
# [3.0.0-0](https://github.com/rei/rei-cedar/compare/v1.6.1...v3.0.0-0) (2017-08-08)



<a name="1.6.0"></a>
# [1.6.0](https://github.com/rei/rei-cedar/compare/v1.5.0...v1.6.0) (2017-02-28)



<a name="1.2.10"></a>
## [1.2.10](https://github.com/rei/rei-cedar/compare/v1.2.12...v1.2.10) (2016-08-24)



<a name="1.2.12"></a>
## [1.2.12](https://github.com/rei/rei-cedar/compare/v1.2.9...v1.2.12) (2016-08-10)



<a name="1.2.9"></a>
## [1.2.9](https://github.com/rei/rei-cedar/compare/v1.2.8...v1.2.9) (2016-06-14)



<a name="1.2.8"></a>
## [1.2.8](https://github.com/rei/rei-cedar/compare/v1.2.7...v1.2.8) (2016-06-13)



<a name="1.2.7"></a>
## [1.2.7](https://github.com/rei/rei-cedar/compare/v1.2.6...v1.2.7) (2016-03-25)



<a name="1.2.6"></a>
## [1.2.6](https://github.com/rei/rei-cedar/compare/v1.2.5...v1.2.6) (2016-03-23)



<a name="1.2.5"></a>
## [1.2.5](https://github.com/rei/rei-cedar/compare/v1.2.1...v1.2.5) (2016-03-22)



<a name="1.2.1"></a>
## [1.2.1](https://github.com/rei/rei-cedar/compare/v1.1.2...v1.2.1) (2016-03-18)



<a name="1.1.2"></a>
## [1.1.2](https://github.com/rei/rei-cedar/compare/v1.1.1...v1.1.2) (2016-03-07)



<a name="1.1.1"></a>
## [1.1.1](https://github.com/rei/rei-cedar/compare/v1.1.0...v1.1.1) (2016-03-03)



<a name="1.1.0"></a>
# [1.1.0](https://github.com/rei/rei-cedar/compare/v1.0.0...v1.1.0) (2016-02-29)



<a name="1.0.0"></a>
# 1.0.0 (2016-02-24)



