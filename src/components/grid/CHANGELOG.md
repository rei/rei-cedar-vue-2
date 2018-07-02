<a name="0.1.0"></a>
# 0.1.0 (2018-06-27)


### Features

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



