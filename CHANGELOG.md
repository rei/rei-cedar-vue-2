# [2.0.0-alpha.0](https://github.com/rei/rei-cedar/compare/18.12.2...2.0.0-alpha.0) (2019-06-24)


### Bug Fixes

* **add style:** hover for icon example ([8254c69](https://github.com/rei/rei-cedar/commit/8254c69))
* **adding comments:** tOC comments for color ([7974882](https://github.com/rei/rei-cedar/commit/7974882))
* **ally:** added an example to the radio page that had a duplicate ID attribute ([b680c88](https://github.com/rei/rei-cedar/commit/b680c88))
* **babel:** go back to babel 6 to fix ie11 issues ([657094a](https://github.com/rei/rei-cedar/commit/657094a))
* **input:** fix border and box shadow on ios ([f0a89d8](https://github.com/rei/rei-cedar/commit/f0a89d8)), closes [#627](https://github.com/rei/rei-cedar/issues/627)
* **package:** package ([962c601](https://github.com/rei/rei-cedar/commit/962c601))
* **package update:** update to prevent vulnerabilities ([bf086e5](https://github.com/rei/rei-cedar/commit/bf086e5))
* **removed file:** adding back the import of the color css file for theme support ([f5e6508](https://github.com/rei/rei-cedar/commit/f5e6508))
* **revert breakpoint:** revert breakpoint ([929992a](https://github.com/rei/rei-cedar/commit/929992a))
* **template name:** update inset template name ([e47eec9](https://github.com/rei/rei-cedar/commit/e47eec9))


### chore

* **package.json:** bump version to alpha, update name to reflect npm publishing ([0a42ab7](https://github.com/rei/rei-cedar/commit/0a42ab7))
* **package.json:** remove lerna ([31df2b1](https://github.com/rei/rei-cedar/commit/31df2b1))
* **package.json:** update babel 7 dependencies via babel-update ([3b678b4](https://github.com/rei/rei-cedar/commit/3b678b4))


### Features

* **breakpoints:** moving responsive.pcss to use TokensV1 ([c004629](https://github.com/rei/rei-cedar/commit/c004629))
* **build:** add sourcemaps to output and uniminify built files ([9ac57d8](https://github.com/rei/rei-cedar/commit/9ac57d8))
* **class names:** changing the names of our responsive classes ([2322d22](https://github.com/rei/rei-cedar/commit/2322d22))
* **data-table:** add constrainWidth prop, increase content resilience ([6c5001a](https://github.com/rei/rei-cedar/commit/6c5001a))
* **icons:** updating icons variables to tokenV1 variables ([706c318](https://github.com/rei/rei-cedar/commit/706c318))
* **motion:** removing legacy motion token values, moving some values to use token variables ([3a5bedd](https://github.com/rei/rei-cedar/commit/3a5bedd))
* **prominence:** update mapping of variables using prominence to new tokenV1 names ([262bed0](https://github.com/rei/rei-cedar/commit/262bed0))
* **radius tokens:** components using radius tokens have been updated to use updated tokensv1 names ([7707bfb](https://github.com/rei/rei-cedar/commit/7707bfb))
* **reset:** restore body line-height to 1.5 ([8ece439](https://github.com/rei/rei-cedar/commit/8ece439))
* **space, utilities:** add !important to spacing utility classes ([adab6f1](https://github.com/rei/rei-cedar/commit/adab6f1))
* **space, utilities:** add important to legacy util classes, add deprecation notice ([069a2a3](https://github.com/rei/rei-cedar/commit/069a2a3))
* **spacing:** add x and y space utility classes ([02edc24](https://github.com/rei/rei-cedar/commit/02edc24))
* **tokens:** add component token maps to cdr-assets ([afe53d0](https://github.com/rei/rei-cedar/commit/afe53d0))
* **tokenv1 beta:** the TokensV1 dependancy has been moved to beta, icon-fill has been removed and r ([03fbdd5](https://github.com/rei/rei-cedar/commit/03fbdd5))
* **utilities:** include legacy spacing utilities for backwards compatibility ([4b5c4f2](https://github.com/rei/rei-cedar/commit/4b5c4f2))
* **utilities:** space utilities and examples updated to use token naming ([9a42abc](https://github.com/rei/rei-cedar/commit/9a42abc))


### BREAKING CHANGES

* **package.json:** convert from cal versionsing back to semver
* **package.json:** babel 7 update in the past caused us some issues, so calling this a breaking
change.
* **package.json:** Cedar components will no longer be distributed individually



<a name="18.12.2"></a>
## [18.12.2](https://github.com/rei/rei-cedar/compare/18.12.1...18.12.2) (2018-12-20)


### Bug Fixes

* **pagination:** update icon dependency and correct for API change ([e816666](https://github.com/rei/rei-cedar/commit/e816666))


### Features

* **cta:** cdr-icon dependency removed, update readme ([e8cb080](https://github.com/rei/rei-cedar/commit/e8cb080))
* **pagination:** release pagination@1.0.0 ([bc1ba85](https://github.com/rei/rei-cedar/commit/bc1ba85))



<a name="18.11.1"></a>
## [18.11.1](https://github.com/rei/rei-cedar/compare/v5.0.0-alpha.1...v18.11.1) (2018-11-17)


### Bug Fixes

* **accordion:** add dynamic class to change cdr-accordion-item z-index on focus/blur ([b701ab7](https://github.com/rei/rei-cedar/commit/b701ab7))
* **accordion:** fix css bugs ([d19278c](https://github.com/rei/rei-cedar/commit/d19278c))
* **accordion:** set visibility hidden on cdr-accordion-item slot contents when closed ([81a5a0d](https://github.com/rei/rei-cedar/commit/81a5a0d))
* **activity card:** correct border-radius on image to match card ([5a48d79](https://github.com/rei/rei-cedar/commit/5a48d79))
* **breadcrumb:** cdrButton dependency removal ([9e10229](https://github.com/rei/rei-cedar/commit/9e10229))
* **breadcrumb:** fixed console error where element was not available in resize event ([dea6b8b](https://github.com/rei/rei-cedar/commit/dea6b8b))
* **button:** bump version to match alpha ([3439b98](https://github.com/rei/rei-cedar/commit/3439b98))
* **button cta:** import cdr-icon css for components packaged with an icon ([6bb2233](https://github.com/rei/rei-cedar/commit/6bb2233))
* **button cta accordion:** bump version from alpha ([fe1c8f0](https://github.com/rei/rei-cedar/commit/fe1c8f0))
* **cdr-img:** add radius to cropped/ratio images ([ceefec6](https://github.com/rei/rei-cedar/commit/ceefec6))
* **cdr-img:** the radius validator did not have the correct values, removing them and updating radiu ([c39066d](https://github.com/rei/rei-cedar/commit/c39066d))
* **css:** relocate needed anchor reset css ([8cc8ced](https://github.com/rei/rei-cedar/commit/8cc8ced))
* **cta:** fix box shadow on --light --elevated ([341f2de](https://github.com/rei/rei-cedar/commit/341f2de))
* **grid:** add style property to package.json ([6f7a22f](https://github.com/rei/rei-cedar/commit/6f7a22f))
* **icon:** updated icon inheritColor prop ([1872f41](https://github.com/rei/rei-cedar/commit/1872f41))
* **icon example:** missed a merge conflict ([059f940](https://github.com/rei/rei-cedar/commit/059f940))
* **icons:** flip incorrect pin-fill and pin-stroke icons ([4a3ce56](https://github.com/rei/rei-cedar/commit/4a3ce56))
* **input:** a11y test fix ([080972e](https://github.com/rei/rei-cedar/commit/080972e))
* **input:** link style update ([fe8e491](https://github.com/rei/rei-cedar/commit/fe8e491))
* **input:** updated element contrast for a11y ([b527cdd](https://github.com/rei/rei-cedar/commit/b527cdd))
* **misc:** fix console errors with size validator and missing imports ([a80e232](https://github.com/rei/rei-cedar/commit/a80e232))
* **peer dependancy updates:** not all files had the icon peer updates ([5489a22](https://github.com/rei/rei-cedar/commit/5489a22))
* **select:** fix bug with selenium interaction ([18fbab3](https://github.com/rei/rei-cedar/commit/18fbab3))
* **select:** update variable name ([dbdc0e4](https://github.com/rei/rei-cedar/commit/dbdc0e4))
* **size:** fixed size validator console errors ([d21e71c](https://github.com/rei/rei-cedar/commit/d21e71c))
* **size prop validator:** prop validator fix for xs and size mixin ([918df0a](https://github.com/rei/rei-cedar/commit/918df0a))
* **tabs:** content overflow behavior cleanup ([d58f43b](https://github.com/rei/rei-cedar/commit/d58f43b))
* **test:** added breadcrumb and input page links ([eebb259](https://github.com/rei/rei-cedar/commit/eebb259))


### Code Refactoring

* **tabs:** seo update ([8ed9a60](https://github.com/rei/rei-cedar/commit/8ed9a60))


### Features

* **18.9.1 release:** release adds support for cdr-icon and updates the peer-dependancies of compone ([5a6da2c](https://github.com/rei/rei-cedar/commit/5a6da2c))
* **accordion:** update dependencies ([d45808f](https://github.com/rei/rei-cedar/commit/d45808f))
* **accordion button cta:** bump versions to match alpha release ([c7f21bb](https://github.com/rei/rei-cedar/commit/c7f21bb))
* **activity-card:** update dependencies ([efcc917](https://github.com/rei/rei-cedar/commit/efcc917))
* **breadcrumb:** breadcrumb component is ready for pr ([984a31c](https://github.com/rei/rei-cedar/commit/984a31c))
* **breadcrumb:** final cleanup after pr comments ([34467e9](https://github.com/rei/rei-cedar/commit/34467e9))
* **breadcrumb:** update dependencies ([9cf4192](https://github.com/rei/rei-cedar/commit/9cf4192))
* **breadcrumb:** update version ([fa16f95](https://github.com/rei/rei-cedar/commit/fa16f95))
* **button:** update dependencies ([9f2c00d](https://github.com/rei/rei-cedar/commit/9f2c00d))
* **buttons:** update to use css modules ([a5e5fda](https://github.com/rei/rei-cedar/commit/a5e5fda))
* **caption:** update dependencies ([daee967](https://github.com/rei/rei-cedar/commit/daee967))
* **caption block-quote and pull-quote release:** moving these components to v1 ([0286274](https://github.com/rei/rei-cedar/commit/0286274))
* **card:** update dependencies ([0ef7910](https://github.com/rei/rei-cedar/commit/0ef7910))
* **cdr-image v1 release:** moving the package.json to v1 for the cdr-image component ([6fa1cc7](https://github.com/rei/rei-cedar/commit/6fa1cc7))
* **cdr-list release:** moving cdr-list to V1 and updating its readme ([451d3ae](https://github.com/rei/rei-cedar/commit/451d3ae))
* **cdr-radio release:** updates to the cdr-radio readme API and moving the package.json to v1 ([13b35c4](https://github.com/rei/rei-cedar/commit/13b35c4))
* **cedar proving grounds:** loops through all the routes, which have been moved to routes.js, and e ([7cda2b3](https://github.com/rei/rei-cedar/commit/7cda2b3))
* **checkbox:** update dependencies ([ea5d4fa](https://github.com/rei/rei-cedar/commit/ea5d4fa))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **crd-checkbox release:** updates to the cdr-checkbox API readme and bumping the package to v1 ([0066831](https://github.com/rei/rei-cedar/commit/0066831))
* **create cedar component:** create skeleton for cedar component for data table ([c576ac0](https://github.com/rei/rei-cedar/commit/c576ac0))
* **css reset:** accounted for heading and paragraph resets in components ([2cab6ca](https://github.com/rei/rei-cedar/commit/2cab6ca))
* **cta:** update dependencies ([6467ba2](https://github.com/rei/rei-cedar/commit/6467ba2))
* **cta:** update readme, bump version ([4f87071](https://github.com/rei/rei-cedar/commit/4f87071))
* **data-table:** update readme, bump version ([b10a134](https://github.com/rei/rei-cedar/commit/b10a134))
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
* **icon:** add a slot to all components ([5bd063f](https://github.com/rei/rei-cedar/commit/5bd063f))
* **icon:** add grid-view, list-view, and scan-barcode icons ([918f782](https://github.com/rei/rei-cedar/commit/918f782))
* **icon:** update dependencies ([6b6c0fe](https://github.com/rei/rei-cedar/commit/6b6c0fe))
* **image:** update dependencies ([d1adf01](https://github.com/rei/rei-cedar/commit/d1adf01))
* **input:** add css resets to input ([ac3b95b](https://github.com/rei/rei-cedar/commit/ac3b95b))
* **input:** finalized changes for input release ([2b480a3](https://github.com/rei/rei-cedar/commit/2b480a3))
* **input:** input refactor for cedar2 ([4ab0131](https://github.com/rei/rei-cedar/commit/4ab0131))
* **input:** removed explicit string value for inherit color input example ([9b2a536](https://github.com/rei/rei-cedar/commit/9b2a536))
* **input:** removed unneccessary comments ([da292c5](https://github.com/rei/rei-cedar/commit/da292c5))
* **input:** update dependencies ([e6b43fa](https://github.com/rei/rei-cedar/commit/e6b43fa))
* **input:** updated comment for pre icon width slot ([d5ab6ba](https://github.com/rei/rei-cedar/commit/d5ab6ba))
* **input:** updated pre icon width constant and cleaned up comment ([093874d](https://github.com/rei/rei-cedar/commit/093874d))
* **input:** updated version to 1.0.0-alpha.4 ([9f8d6d4](https://github.com/rei/rei-cedar/commit/9f8d6d4))
* **input:** zach finished testing updating version ([595de3d](https://github.com/rei/rei-cedar/commit/595de3d))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **link:** update dependencies ([bf6b68e](https://github.com/rei/rei-cedar/commit/bf6b68e))
* **link:** use css modules for link ([6b244d2](https://github.com/rei/rei-cedar/commit/6b244d2))
* **link:** use css modules with link ([bfb98f9](https://github.com/rei/rei-cedar/commit/bfb98f9))
* **list:** update dependencies ([1d78423](https://github.com/rei/rei-cedar/commit/1d78423))
* **media-object:** update dependencies ([ec035df](https://github.com/rei/rei-cedar/commit/ec035df))
* **mixin:** abstract out the methods of the modifier mixin to create a re-usable module for future ([c934122](https://github.com/rei/rei-cedar/commit/c934122))
* **proving grounds:** removes cruft ([ae8c943](https://github.com/rei/rei-cedar/commit/ae8c943))
* **quote:** update dependencies ([6d0149e](https://github.com/rei/rei-cedar/commit/6d0149e))
* **quote:** update to the quote component merging block into the base class for cdr-quote. This ena ([f53e0b7](https://github.com/rei/rei-cedar/commit/f53e0b7))
* **radio:** update dependencies ([d2786a5](https://github.com/rei/rei-cedar/commit/d2786a5))
* **rating:** new icons, color adjustments, add ability to make the component a link ([302f30c](https://github.com/rei/rei-cedar/commit/302f30c))
* **rating:** update dependencies ([98f8250](https://github.com/rei/rei-cedar/commit/98f8250))
* **rating:** update rating version for new size prop ([e86a18f](https://github.com/rei/rei-cedar/commit/e86a18f))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))
* **release:** cedar Alpha release ([883ff94](https://github.com/rei/rei-cedar/commit/883ff94))
* **reset:** remove anchor styles from reset ([853740e](https://github.com/rei/rei-cedar/commit/853740e))
* **resets:** normalize resets to use tokens ([5a705e3](https://github.com/rei/rei-cedar/commit/5a705e3))
* **resets:** remove unused css and relocate resets into components ([b6134dc](https://github.com/rei/rei-cedar/commit/b6134dc)), closes [#516](https://github.com/rei/rei-cedar/issues/516) [#518](https://github.com/rei/rei-cedar/issues/518) [#519](https://github.com/rei/rei-cedar/issues/519) [#498](https://github.com/rei/rei-cedar/issues/498)
* **search:** update dependencies ([f8d98b6](https://github.com/rei/rei-cedar/commit/f8d98b6))
* **select:** add DOM event to emitted vue event ([ddb99f1](https://github.com/rei/rei-cedar/commit/ddb99f1))
* **select:** update dependencies ([cd60f29](https://github.com/rei/rei-cedar/commit/cd60f29))
* **tabs:** passed testing and api doc review, updated version for publishing ([ae1395c](https://github.com/rei/rei-cedar/commit/ae1395c))
* **text:** update dependencies ([506d029](https://github.com/rei/rei-cedar/commit/506d029))
* **tokens:** consume [@rei](https://github.com/rei)/cdr-tokens package ([f094978](https://github.com/rei/rei-cedar/commit/f094978))


### BREAKING CHANGES

* **reset:** removed default anchor styles from reset, now only available via cdr-link
* **components:** Components are now using css-modules for unique class names tied to the package version
* **tabs:** content

ISSUES CLOSED: PLIB-3986
* **resets:** Default line height changed from 1.15 to 1 | Remove default margin on blockquote, figure, and label
elements
* **icon:** Replace star icons with new ones
* **rating:** Sizes have changed -- small: 16px, medium(default): 24px, large: 32px
* **release:** CdrLink and CdrText are moving to V1
* **grid:** alignSelfSm, alignSelfMd, alignSelfLg consolidated to just alignSelf that accepts responsive
modifiers
* **grid:** offsetRightSm, offsetRightMd, offsetRightLg consolidated to just offsetRight that accepts responsive modifiers
* **grid:** offsetLeftSm, offsetLeftMd, offsetLeftLg consolidated to just offsetLeft that accepts responsive
modifiers
* **grid:** spanSm, spanMd, spanLg removed and span accepts responsive modifiers
* **icons:** pin-fill and pin-stroke have been reversed to correct a naming error
* **grid:** remove wrapSm, wrapMd, wrapLg in favor of using wrap with responsive modifiers
* **grid:** vertical prop is now a string instead of boolean. verticalSm, verticalMd, verticalLg removed and now
supports responsive modifiers
* **grid:** gutterSm, gutterMd, gutterLg replaced with just gutter
* **grid:** alignSm, alignMd, alignLg replaced with just align that accepts responsive values
* **grid:** colsSm, colsMd, colsLg replaced with just cols prop. justifySm, justifyMd, justifyLg replaced with
just justify prop
* **buttons:** Buttons use css modules
* **grid:** grid css is no longer in cdr-assets, col and row are no longer their own packages
* **link:** link uses css modules
* **link:** link now uses css modules
* **grid:** change row's nowrap prop from boolean to string. Remove nowrapSm, nowrapMd, nowrapLg in favor of
using nowrap with responsive modifiers



<a name="18.8.1"></a>
## [18.8.1](https://github.com/rei/rei-cedar/compare/v5.0.0-alpha.1...v18.8.1) (2018-11-16)


### Bug Fixes

* **accordion:** add dynamic class to change cdr-accordion-item z-index on focus/blur ([b701ab7](https://github.com/rei/rei-cedar/commit/b701ab7))
* **accordion:** fix css bugs ([d19278c](https://github.com/rei/rei-cedar/commit/d19278c))
* **accordion:** set visibility hidden on cdr-accordion-item slot contents when closed ([81a5a0d](https://github.com/rei/rei-cedar/commit/81a5a0d))
* **activity card:** correct border-radius on image to match card ([5a48d79](https://github.com/rei/rei-cedar/commit/5a48d79))
* **breadcrumb:** cdrButton dependency removal ([9e10229](https://github.com/rei/rei-cedar/commit/9e10229))
* **breadcrumb:** fixed console error where element was not available in resize event ([dea6b8b](https://github.com/rei/rei-cedar/commit/dea6b8b))
* **button:** bump version to match alpha ([3439b98](https://github.com/rei/rei-cedar/commit/3439b98))
* **button cta:** import cdr-icon css for components packaged with an icon ([6bb2233](https://github.com/rei/rei-cedar/commit/6bb2233))
* **button cta accordion:** bump version from alpha ([fe1c8f0](https://github.com/rei/rei-cedar/commit/fe1c8f0))
* **cdr-img:** add radius to cropped/ratio images ([ceefec6](https://github.com/rei/rei-cedar/commit/ceefec6))
* **cdr-img:** the radius validator did not have the correct values, removing them and updating radiu ([c39066d](https://github.com/rei/rei-cedar/commit/c39066d))
* **css:** relocate needed anchor reset css ([8cc8ced](https://github.com/rei/rei-cedar/commit/8cc8ced))
* **cta:** fix box shadow on --light --elevated ([341f2de](https://github.com/rei/rei-cedar/commit/341f2de))
* **grid:** add style property to package.json ([6f7a22f](https://github.com/rei/rei-cedar/commit/6f7a22f))
* **icon:** updated icon inheritColor prop ([1872f41](https://github.com/rei/rei-cedar/commit/1872f41))
* **icon example:** missed a merge conflict ([059f940](https://github.com/rei/rei-cedar/commit/059f940))
* **icons:** flip incorrect pin-fill and pin-stroke icons ([4a3ce56](https://github.com/rei/rei-cedar/commit/4a3ce56))
* **input:** a11y test fix ([080972e](https://github.com/rei/rei-cedar/commit/080972e))
* **input:** link style update ([fe8e491](https://github.com/rei/rei-cedar/commit/fe8e491))
* **input:** updated element contrast for a11y ([b527cdd](https://github.com/rei/rei-cedar/commit/b527cdd))
* **misc:** fix console errors with size validator and missing imports ([a80e232](https://github.com/rei/rei-cedar/commit/a80e232))
* **peer dependancy updates:** not all files had the icon peer updates ([5489a22](https://github.com/rei/rei-cedar/commit/5489a22))
* **select:** fix bug with selenium interaction ([18fbab3](https://github.com/rei/rei-cedar/commit/18fbab3))
* **select:** update variable name ([dbdc0e4](https://github.com/rei/rei-cedar/commit/dbdc0e4))
* **size:** fixed size validator console errors ([d21e71c](https://github.com/rei/rei-cedar/commit/d21e71c))
* **size prop validator:** prop validator fix for xs and size mixin ([918df0a](https://github.com/rei/rei-cedar/commit/918df0a))
* **tabs:** content overflow behavior cleanup ([d58f43b](https://github.com/rei/rei-cedar/commit/d58f43b))
* **test:** added breadcrumb and input page links ([eebb259](https://github.com/rei/rei-cedar/commit/eebb259))


### Code Refactoring

* **tabs:** seo update ([8ed9a60](https://github.com/rei/rei-cedar/commit/8ed9a60))


### Features

* **18.9.1 release:** release adds support for cdr-icon and updates the peer-dependancies of compone ([5a6da2c](https://github.com/rei/rei-cedar/commit/5a6da2c))
* **accordion:** update dependencies ([d45808f](https://github.com/rei/rei-cedar/commit/d45808f))
* **accordion button cta:** bump versions to match alpha release ([c7f21bb](https://github.com/rei/rei-cedar/commit/c7f21bb))
* **activity-card:** update dependencies ([efcc917](https://github.com/rei/rei-cedar/commit/efcc917))
* **breadcrumb:** breadcrumb component is ready for pr ([984a31c](https://github.com/rei/rei-cedar/commit/984a31c))
* **breadcrumb:** final cleanup after pr comments ([34467e9](https://github.com/rei/rei-cedar/commit/34467e9))
* **breadcrumb:** update dependencies ([9cf4192](https://github.com/rei/rei-cedar/commit/9cf4192))
* **breadcrumb:** update version ([fa16f95](https://github.com/rei/rei-cedar/commit/fa16f95))
* **button:** update dependencies ([9f2c00d](https://github.com/rei/rei-cedar/commit/9f2c00d))
* **buttons:** update to use css modules ([a5e5fda](https://github.com/rei/rei-cedar/commit/a5e5fda))
* **caption:** update dependencies ([daee967](https://github.com/rei/rei-cedar/commit/daee967))
* **caption block-quote and pull-quote release:** moving these components to v1 ([0286274](https://github.com/rei/rei-cedar/commit/0286274))
* **card:** update dependencies ([0ef7910](https://github.com/rei/rei-cedar/commit/0ef7910))
* **cdr-image v1 release:** moving the package.json to v1 for the cdr-image component ([6fa1cc7](https://github.com/rei/rei-cedar/commit/6fa1cc7))
* **cdr-list release:** moving cdr-list to V1 and updating its readme ([451d3ae](https://github.com/rei/rei-cedar/commit/451d3ae))
* **cdr-radio release:** updates to the cdr-radio readme API and moving the package.json to v1 ([13b35c4](https://github.com/rei/rei-cedar/commit/13b35c4))
* **cedar proving grounds:** loops through all the routes, which have been moved to routes.js, and e ([7cda2b3](https://github.com/rei/rei-cedar/commit/7cda2b3))
* **checkbox:** update dependencies ([ea5d4fa](https://github.com/rei/rei-cedar/commit/ea5d4fa))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **crd-checkbox release:** updates to the cdr-checkbox API readme and bumping the package to v1 ([0066831](https://github.com/rei/rei-cedar/commit/0066831))
* **create cedar component:** create skeleton for cedar component for data table ([c576ac0](https://github.com/rei/rei-cedar/commit/c576ac0))
* **css reset:** accounted for heading and paragraph resets in components ([2cab6ca](https://github.com/rei/rei-cedar/commit/2cab6ca))
* **cta:** update dependencies ([6467ba2](https://github.com/rei/rei-cedar/commit/6467ba2))
* **cta:** update readme, bump version ([4f87071](https://github.com/rei/rei-cedar/commit/4f87071))
* **data-table:** update readme, bump version ([b10a134](https://github.com/rei/rei-cedar/commit/b10a134))
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
* **icon:** add a slot to all components ([5bd063f](https://github.com/rei/rei-cedar/commit/5bd063f))
* **icon:** add grid-view, list-view, and scan-barcode icons ([918f782](https://github.com/rei/rei-cedar/commit/918f782))
* **icon:** update dependencies ([6b6c0fe](https://github.com/rei/rei-cedar/commit/6b6c0fe))
* **image:** update dependencies ([d1adf01](https://github.com/rei/rei-cedar/commit/d1adf01))
* **input:** add css resets to input ([ac3b95b](https://github.com/rei/rei-cedar/commit/ac3b95b))
* **input:** finalized changes for input release ([2b480a3](https://github.com/rei/rei-cedar/commit/2b480a3))
* **input:** input refactor for cedar2 ([4ab0131](https://github.com/rei/rei-cedar/commit/4ab0131))
* **input:** removed explicit string value for inherit color input example ([9b2a536](https://github.com/rei/rei-cedar/commit/9b2a536))
* **input:** removed unneccessary comments ([da292c5](https://github.com/rei/rei-cedar/commit/da292c5))
* **input:** update dependencies ([e6b43fa](https://github.com/rei/rei-cedar/commit/e6b43fa))
* **input:** updated comment for pre icon width slot ([d5ab6ba](https://github.com/rei/rei-cedar/commit/d5ab6ba))
* **input:** updated pre icon width constant and cleaned up comment ([093874d](https://github.com/rei/rei-cedar/commit/093874d))
* **input:** updated version to 1.0.0-alpha.4 ([9f8d6d4](https://github.com/rei/rei-cedar/commit/9f8d6d4))
* **input:** zach finished testing updating version ([595de3d](https://github.com/rei/rei-cedar/commit/595de3d))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **link:** update dependencies ([bf6b68e](https://github.com/rei/rei-cedar/commit/bf6b68e))
* **link:** use css modules for link ([6b244d2](https://github.com/rei/rei-cedar/commit/6b244d2))
* **link:** use css modules with link ([bfb98f9](https://github.com/rei/rei-cedar/commit/bfb98f9))
* **list:** update dependencies ([1d78423](https://github.com/rei/rei-cedar/commit/1d78423))
* **media-object:** update dependencies ([ec035df](https://github.com/rei/rei-cedar/commit/ec035df))
* **mixin:** abstract out the methods of the modifier mixin to create a re-usable module for future ([c934122](https://github.com/rei/rei-cedar/commit/c934122))
* **proving grounds:** removes cruft ([ae8c943](https://github.com/rei/rei-cedar/commit/ae8c943))
* **quote:** update dependencies ([6d0149e](https://github.com/rei/rei-cedar/commit/6d0149e))
* **quote:** update to the quote component merging block into the base class for cdr-quote. This ena ([f53e0b7](https://github.com/rei/rei-cedar/commit/f53e0b7))
* **radio:** update dependencies ([d2786a5](https://github.com/rei/rei-cedar/commit/d2786a5))
* **rating:** new icons, color adjustments, add ability to make the component a link ([302f30c](https://github.com/rei/rei-cedar/commit/302f30c))
* **rating:** update dependencies ([98f8250](https://github.com/rei/rei-cedar/commit/98f8250))
* **rating:** update rating version for new size prop ([e86a18f](https://github.com/rei/rei-cedar/commit/e86a18f))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))
* **release:** cedar Alpha release ([883ff94](https://github.com/rei/rei-cedar/commit/883ff94))
* **reset:** remove anchor styles from reset ([853740e](https://github.com/rei/rei-cedar/commit/853740e))
* **resets:** normalize resets to use tokens ([5a705e3](https://github.com/rei/rei-cedar/commit/5a705e3))
* **resets:** remove unused css and relocate resets into components ([b6134dc](https://github.com/rei/rei-cedar/commit/b6134dc)), closes [#516](https://github.com/rei/rei-cedar/issues/516) [#518](https://github.com/rei/rei-cedar/issues/518) [#519](https://github.com/rei/rei-cedar/issues/519) [#498](https://github.com/rei/rei-cedar/issues/498)
* **search:** update dependencies ([f8d98b6](https://github.com/rei/rei-cedar/commit/f8d98b6))
* **select:** add DOM event to emitted vue event ([ddb99f1](https://github.com/rei/rei-cedar/commit/ddb99f1))
* **select:** update dependencies ([cd60f29](https://github.com/rei/rei-cedar/commit/cd60f29))
* **tabs:** passed testing and api doc review, updated version for publishing ([ae1395c](https://github.com/rei/rei-cedar/commit/ae1395c))
* **text:** update dependencies ([506d029](https://github.com/rei/rei-cedar/commit/506d029))
* **tokens:** consume [@rei](https://github.com/rei)/cdr-tokens package ([f094978](https://github.com/rei/rei-cedar/commit/f094978))


### BREAKING CHANGES

* **reset:** removed default anchor styles from reset, now only available via cdr-link
* **components:** Components are now using css-modules for unique class names tied to the package version
* **tabs:** content

ISSUES CLOSED: PLIB-3986
* **resets:** Default line height changed from 1.15 to 1 | Remove default margin on blockquote, figure, and label
elements
* **icon:** Replace star icons with new ones
* **rating:** Sizes have changed -- small: 16px, medium(default): 24px, large: 32px
* **release:** CdrLink and CdrText are moving to V1
* **grid:** alignSelfSm, alignSelfMd, alignSelfLg consolidated to just alignSelf that accepts responsive
modifiers
* **grid:** offsetRightSm, offsetRightMd, offsetRightLg consolidated to just offsetRight that accepts responsive modifiers
* **grid:** offsetLeftSm, offsetLeftMd, offsetLeftLg consolidated to just offsetLeft that accepts responsive
modifiers
* **grid:** spanSm, spanMd, spanLg removed and span accepts responsive modifiers
* **icons:** pin-fill and pin-stroke have been reversed to correct a naming error
* **grid:** remove wrapSm, wrapMd, wrapLg in favor of using wrap with responsive modifiers
* **grid:** vertical prop is now a string instead of boolean. verticalSm, verticalMd, verticalLg removed and now
supports responsive modifiers
* **grid:** gutterSm, gutterMd, gutterLg replaced with just gutter
* **grid:** alignSm, alignMd, alignLg replaced with just align that accepts responsive values
* **grid:** colsSm, colsMd, colsLg replaced with just cols prop. justifySm, justifyMd, justifyLg replaced with
just justify prop
* **buttons:** Buttons use css modules
* **grid:** grid css is no longer in cdr-assets, col and row are no longer their own packages
* **link:** link uses css modules
* **link:** link now uses css modules
* **grid:** change row's nowrap prop from boolean to string. Remove nowrapSm, nowrapMd, nowrapLg in favor of
using nowrap with responsive modifiers



<a name="18.8.1"></a>
## [18.8.1](https://github.com/rei/rei-cedar/compare/v5.0.0-alpha.1...v18.8.1) (2018-09-13)


### Bug Fixes

* **accordion:** add dynamic class to change cdr-accordion-item z-index on focus/blur ([b701ab7](https://github.com/rei/rei-cedar/commit/b701ab7))
* **accordion:** fix css bugs ([d19278c](https://github.com/rei/rei-cedar/commit/d19278c))
* **accordion:** set visibility hidden on cdr-accordion-item slot contents when closed ([81a5a0d](https://github.com/rei/rei-cedar/commit/81a5a0d))
* **activity card:** correct border-radius on image to match card ([5a48d79](https://github.com/rei/rei-cedar/commit/5a48d79))
* **breadcrumb:** fixed console error where element was not available in resize event ([dea6b8b](https://github.com/rei/rei-cedar/commit/dea6b8b))
* **button:** bump version to match alpha ([3439b98](https://github.com/rei/rei-cedar/commit/3439b98))
* **button cta:** import cdr-icon css for components packaged with an icon ([6bb2233](https://github.com/rei/rei-cedar/commit/6bb2233))
* **cdr-img:** add radius to cropped/ratio images ([ceefec6](https://github.com/rei/rei-cedar/commit/ceefec6))
* **cdr-img:** the radius validator did not have the correct values, removing them and updating radiu ([c39066d](https://github.com/rei/rei-cedar/commit/c39066d))
* **cta:** fix box shadow on --light --elevated ([341f2de](https://github.com/rei/rei-cedar/commit/341f2de))
* **icons:** flip incorrect pin-fill and pin-stroke icons ([4a3ce56](https://github.com/rei/rei-cedar/commit/4a3ce56))
* **select:** fix bug with selenium interaction ([18fbab3](https://github.com/rei/rei-cedar/commit/18fbab3))
* **select:** update variable name ([dbdc0e4](https://github.com/rei/rei-cedar/commit/dbdc0e4))
* **test:** added breadcrumb and input page links ([eebb259](https://github.com/rei/rei-cedar/commit/eebb259))


### Features

* **accordion:** update dependencies ([d45808f](https://github.com/rei/rei-cedar/commit/d45808f))
* **accordion button cta:** bump versions to match alpha release ([c7f21bb](https://github.com/rei/rei-cedar/commit/c7f21bb))
* **activity-card:** update dependencies ([efcc917](https://github.com/rei/rei-cedar/commit/efcc917))
* **breadcrumb:** breadcrumb component is ready for pr ([984a31c](https://github.com/rei/rei-cedar/commit/984a31c))
* **breadcrumb:** final cleanup after pr comments ([34467e9](https://github.com/rei/rei-cedar/commit/34467e9))
* **breadcrumb:** update dependencies ([9cf4192](https://github.com/rei/rei-cedar/commit/9cf4192))
* **breadcrumb:** update version ([fa16f95](https://github.com/rei/rei-cedar/commit/fa16f95))
* **button:** update dependencies ([9f2c00d](https://github.com/rei/rei-cedar/commit/9f2c00d))
* **buttons:** update to use css modules ([a5e5fda](https://github.com/rei/rei-cedar/commit/a5e5fda))
* **caption:** update dependencies ([daee967](https://github.com/rei/rei-cedar/commit/daee967))
* **card:** update dependencies ([0ef7910](https://github.com/rei/rei-cedar/commit/0ef7910))
* **cdr-image v1 release:** moving the package.json to v1 for the cdr-image component ([6fa1cc7](https://github.com/rei/rei-cedar/commit/6fa1cc7))
* **cdr-list release:** moving cdr-list to V1 and updating its readme ([451d3ae](https://github.com/rei/rei-cedar/commit/451d3ae))
* **cdr-radio release:** updates to the cdr-radio readme API and moving the package.json to v1 ([13b35c4](https://github.com/rei/rei-cedar/commit/13b35c4))
* **cedar proving grounds:** loops through all the routes, which have been moved to routes.js, and e ([7cda2b3](https://github.com/rei/rei-cedar/commit/7cda2b3))
* **checkbox:** update dependencies ([ea5d4fa](https://github.com/rei/rei-cedar/commit/ea5d4fa))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **crd-checkbox release:** updates to the cdr-checkbox API readme and bumping the package to v1 ([0066831](https://github.com/rei/rei-cedar/commit/0066831))
* **cta:** update dependencies ([6467ba2](https://github.com/rei/rei-cedar/commit/6467ba2))
* **cta:** update readme, bump version ([4f87071](https://github.com/rei/rei-cedar/commit/4f87071))
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
* **icon:** add a slot to all components ([5bd063f](https://github.com/rei/rei-cedar/commit/5bd063f))
* **icon:** add grid-view, list-view, and scan-barcode icons ([918f782](https://github.com/rei/rei-cedar/commit/918f782))
* **icon:** update dependencies ([6b6c0fe](https://github.com/rei/rei-cedar/commit/6b6c0fe))
* **image:** update dependencies ([d1adf01](https://github.com/rei/rei-cedar/commit/d1adf01))
* **input:** update dependencies ([e6b43fa](https://github.com/rei/rei-cedar/commit/e6b43fa))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **link:** update dependencies ([bf6b68e](https://github.com/rei/rei-cedar/commit/bf6b68e))
* **link:** use css modules for link ([6b244d2](https://github.com/rei/rei-cedar/commit/6b244d2))
* **link:** use css modules with link ([bfb98f9](https://github.com/rei/rei-cedar/commit/bfb98f9))
* **list:** update dependencies ([1d78423](https://github.com/rei/rei-cedar/commit/1d78423))
* **media-object:** update dependencies ([ec035df](https://github.com/rei/rei-cedar/commit/ec035df))
* **proving grounds:** removes cruft ([ae8c943](https://github.com/rei/rei-cedar/commit/ae8c943))
* **quote:** update dependencies ([6d0149e](https://github.com/rei/rei-cedar/commit/6d0149e))
* **quote:** update to the quote component merging block into the base class for cdr-quote. This ena ([f53e0b7](https://github.com/rei/rei-cedar/commit/f53e0b7))
* **radio:** update dependencies ([d2786a5](https://github.com/rei/rei-cedar/commit/d2786a5))
* **rating:** new icons, color adjustments, add ability to make the component a link ([302f30c](https://github.com/rei/rei-cedar/commit/302f30c))
* **rating:** update dependencies ([98f8250](https://github.com/rei/rei-cedar/commit/98f8250))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))
* **release:** cedar Alpha release ([883ff94](https://github.com/rei/rei-cedar/commit/883ff94))
* **resets:** normalize resets to use tokens ([5a705e3](https://github.com/rei/rei-cedar/commit/5a705e3))
* **search:** update dependencies ([f8d98b6](https://github.com/rei/rei-cedar/commit/f8d98b6))
* **select:** update dependencies ([cd60f29](https://github.com/rei/rei-cedar/commit/cd60f29))
* **text:** update dependencies ([506d029](https://github.com/rei/rei-cedar/commit/506d029))
* **tokens:** consume [@rei](https://github.com/rei)/cdr-tokens package ([f094978](https://github.com/rei/rei-cedar/commit/f094978))


### BREAKING CHANGES

* **icons:** pin-fill and pin-stroke have been reversed to correct a naming error
* **components:** Components are now using css-modules for unique class names tied to the package version
* **icon:** Replace star icons with new ones
* **rating:** Sizes have changed -- small: 16px, medium(default): 24px, large: 32px
* **release:** CdrLink and CdrText are moving to V1
* **grid:** alignSelfSm, alignSelfMd, alignSelfLg consolidated to just alignSelf that accepts responsive
modifiers
* **grid:** offsetRightSm, offsetRightMd, offsetRightLg consolidated to just offsetRight that accepts responsive modifiers
* **grid:** offsetLeftSm, offsetLeftMd, offsetLeftLg consolidated to just offsetLeft that accepts responsive
modifiers
* **grid:** spanSm, spanMd, spanLg removed and span accepts responsive modifiers
* **grid:** change row's nowrap prop from boolean to string. Remove nowrapSm, nowrapMd, nowrapLg in favor of
using nowrap with responsive modifiers
* **resets:** Default line height changed from 1.15 to 1 | Remove default margin on blockquote, figure, and label
elements
* **grid:** vertical prop is now a string instead of boolean. verticalSm, verticalMd, verticalLg removed and now
supports responsive modifiers
* **grid:** gutterSm, gutterMd, gutterLg replaced with just gutter
* **grid:** alignSm, alignMd, alignLg replaced with just align that accepts responsive values
* **grid:** colsSm, colsMd, colsLg replaced with just cols prop. justifySm, justifyMd, justifyLg replaced with
just justify prop
* **buttons:** Buttons use css modules
* **grid:** grid css is no longer in cdr-assets, col and row are no longer their own packages
* **link:** link uses css modules
* **link:** link now uses css modules
* **grid:** remove wrapSm, wrapMd, wrapLg in favor of using wrap with responsive modifiers



<a name="18.8.1"></a>
## [18.8.1](https://github.com/rei/rei-cedar/compare/v5.0.0-alpha.1...v18.8.1) (2018-08-01)


### Bug Fixes

* **accordion:** add dynamic class to change cdr-accordion-item z-index on focus/blur ([b701ab7](https://github.com/rei/rei-cedar/commit/b701ab7))
* **accordion:** fix css bugs ([d19278c](https://github.com/rei/rei-cedar/commit/d19278c))
* **accordion:** set visibility hidden on cdr-accordion-item slot contents when closed ([81a5a0d](https://github.com/rei/rei-cedar/commit/81a5a0d))
* **activity card:** correct border-radius on image to match card ([5a48d79](https://github.com/rei/rei-cedar/commit/5a48d79))
* **button:** bump version to match alpha ([3439b98](https://github.com/rei/rei-cedar/commit/3439b98))
* **button cta:** import cdr-icon css for components packaged with an icon ([6bb2233](https://github.com/rei/rei-cedar/commit/6bb2233))
* **cdr-img:** add radius to cropped/ratio images ([ceefec6](https://github.com/rei/rei-cedar/commit/ceefec6))
* **cdr-img:** the radius validator did not have the correct values, removing them and updating radiu ([c39066d](https://github.com/rei/rei-cedar/commit/c39066d))
* **cta:** fix box shadow on --light --elevated ([341f2de](https://github.com/rei/rei-cedar/commit/341f2de))
* **select:** fix bug with selenium interaction ([18fbab3](https://github.com/rei/rei-cedar/commit/18fbab3))
* **select:** update variable name ([dbdc0e4](https://github.com/rei/rei-cedar/commit/dbdc0e4))
* **test:** added breadcrumb and input page links ([eebb259](https://github.com/rei/rei-cedar/commit/eebb259))


### Features

* **accordion button cta:** bump versions to match alpha release ([c7f21bb](https://github.com/rei/rei-cedar/commit/c7f21bb))
* **breadcrumb:** breadcrumb component is ready for pr ([984a31c](https://github.com/rei/rei-cedar/commit/984a31c))
* **breadcrumb:** final cleanup after pr comments ([34467e9](https://github.com/rei/rei-cedar/commit/34467e9))
* **breadcrumb:** update version ([fa16f95](https://github.com/rei/rei-cedar/commit/fa16f95))
* **buttons:** update to use css modules ([a5e5fda](https://github.com/rei/rei-cedar/commit/a5e5fda))
* **cdr-image v1 release:** moving the package.json to v1 for the cdr-image component ([6fa1cc7](https://github.com/rei/rei-cedar/commit/6fa1cc7))
* **cdr-list release:** moving cdr-list to V1 and updating its readme ([451d3ae](https://github.com/rei/rei-cedar/commit/451d3ae))
* **cdr-radio release:** updates to the cdr-radio readme API and moving the package.json to v1 ([13b35c4](https://github.com/rei/rei-cedar/commit/13b35c4))
* **cedar proving grounds:** loops through all the routes, which have been moved to routes.js, and e ([7cda2b3](https://github.com/rei/rei-cedar/commit/7cda2b3))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **crd-checkbox release:** updates to the cdr-checkbox API readme and bumping the package to v1 ([0066831](https://github.com/rei/rei-cedar/commit/0066831))
* **cta:** update readme, bump version ([4f87071](https://github.com/rei/rei-cedar/commit/4f87071))
* **grid:** consolidate col's alignSelf props to single alignSelf ([0058ad0](https://github.com/rei/rei-cedar/commit/0058ad0))
* **grid:** consolidate col's offsetLeft props to just offsetLeft ([ecc3294](https://github.com/rei/rei-cedar/commit/ecc3294))
* **grid:** consolidate col's offsetRight props to single offsetRight ([b812e99](https://github.com/rei/rei-cedar/commit/b812e99))
* **grid:** consolidate col's span props to just span ([a3ef361](https://github.com/rei/rei-cedar/commit/a3ef361))
* **grid:** move col and row to single package ([b0469b6](https://github.com/rei/rei-cedar/commit/b0469b6))
* **grid:** release 0.2.0 ([accc22b](https://github.com/rei/rei-cedar/commit/accc22b))
* **grid:** update align prop to accept responsive values ([1907de8](https://github.com/rei/rei-cedar/commit/1907de8))
* **grid:** update col and justify props to accept responsive values ([c572a51](https://github.com/rei/rei-cedar/commit/c572a51))
* **grid:** update gutter prop to accept responsive values ([a3f613f](https://github.com/rei/rei-cedar/commit/a3f613f))
* **grid:** update row's nowrap prop to accept responsive values ([6dd3514](https://github.com/rei/rei-cedar/commit/6dd3514))
* **grid:** update vertical prop to be a string and accept responsive values ([008f05b](https://github.com/rei/rei-cedar/commit/008f05b))
* **grid:** update wrap prop to be a string and accept responsive values ([cfe2d8a](https://github.com/rei/rei-cedar/commit/cfe2d8a))
* **icon:** add a slot to all components ([5bd063f](https://github.com/rei/rei-cedar/commit/5bd063f))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **link:** use css modules for link ([6b244d2](https://github.com/rei/rei-cedar/commit/6b244d2))
* **link:** use css modules with link ([bfb98f9](https://github.com/rei/rei-cedar/commit/bfb98f9))
* **proving grounds:** removes cruft ([ae8c943](https://github.com/rei/rei-cedar/commit/ae8c943))
* **release:** button, breadcrumb, grid, and list are released to v1 ([d6973b7](https://github.com/rei/rei-cedar/commit/d6973b7))
* **release:** cedar Alpha release ([883ff94](https://github.com/rei/rei-cedar/commit/883ff94))
* **tokens:** consume [@rei](https://github.com/rei)/cdr-tokens package ([f094978](https://github.com/rei/rei-cedar/commit/f094978))


### BREAKING CHANGES

* **release:** CdrLink and CdrText are moving to V1
* **components:** Components are now using css-modules for unique class names tied to the package version
* **grid:** offsetRightSm, offsetRightMd, offsetRightLg consolidated to just offsetRight that accepts responsive modifiers
* **grid:** offsetLeftSm, offsetLeftMd, offsetLeftLg consolidated to just offsetLeft that accepts responsive
modifiers
* **grid:** spanSm, spanMd, spanLg removed and span accepts responsive modifiers
* **grid:** change row's nowrap prop from boolean to string. Remove nowrapSm, nowrapMd, nowrapLg in favor of
using nowrap with responsive modifiers
* **grid:** remove wrapSm, wrapMd, wrapLg in favor of using wrap with responsive modifiers
* **grid:** vertical prop is now a string instead of boolean. verticalSm, verticalMd, verticalLg removed and now
supports responsive modifiers
* **grid:** alignSelfSm, alignSelfMd, alignSelfLg consolidated to just alignSelf that accepts responsive
modifiers
* **grid:** alignSm, alignMd, alignLg replaced with just align that accepts responsive values
* **grid:** colsSm, colsMd, colsLg replaced with just cols prop. justifySm, justifyMd, justifyLg replaced with
just justify prop
* **buttons:** Buttons use css modules
* **grid:** grid css is no longer in cdr-assets, col and row are no longer their own packages
* **link:** link uses css modules
* **link:** link now uses css modules
* **grid:** gutterSm, gutterMd, gutterLg replaced with just gutter



<a name="18.7.2"></a>
## [18.7.2](https://github.com/rei/rei-cedar/compare/v5.0.0-alpha.1...v18.7.2) (2018-07-25)


### Bug Fixes

* **activity card:** correct border-radius on image to match card ([5a48d79](https://github.com/rei/rei-cedar/commit/5a48d79))
* **button:** bump version to match alpha ([3439b98](https://github.com/rei/rei-cedar/commit/3439b98))
* **button cta:** import cdr-icon css for components packaged with an icon ([6bb2233](https://github.com/rei/rei-cedar/commit/6bb2233))
* **cdr-img:** add radius to cropped/ratio images ([ceefec6](https://github.com/rei/rei-cedar/commit/ceefec6))
* **cdr-img:** the radius validator did not have the correct values, removing them and updating radiu ([c39066d](https://github.com/rei/rei-cedar/commit/c39066d))
* **select:** fix bug with selenium interaction ([18fbab3](https://github.com/rei/rei-cedar/commit/18fbab3))
* **select:** update variable name ([dbdc0e4](https://github.com/rei/rei-cedar/commit/dbdc0e4))
* **test:** added breadcrumb and input page links ([eebb259](https://github.com/rei/rei-cedar/commit/eebb259))


### Features

* **accordion button cta:** bump versions to match alpha release ([c7f21bb](https://github.com/rei/rei-cedar/commit/c7f21bb))
* **breadcrumb:** breadcrumb component is ready for pr ([984a31c](https://github.com/rei/rei-cedar/commit/984a31c))
* **breadcrumb:** final cleanup after pr comments ([34467e9](https://github.com/rei/rei-cedar/commit/34467e9))
* **breadcrumb:** update version ([fa16f95](https://github.com/rei/rei-cedar/commit/fa16f95))
* **buttons:** update to use css modules ([a5e5fda](https://github.com/rei/rei-cedar/commit/a5e5fda))
* **cdr-list release:** moving cdr-list to V1 and updating its readme ([451d3ae](https://github.com/rei/rei-cedar/commit/451d3ae))
* **cedar proving grounds:** loops through all the routes, which have been moved to routes.js, and e ([7cda2b3](https://github.com/rei/rei-cedar/commit/7cda2b3))
* **components:** update components to use css-modules ([ec1321c](https://github.com/rei/rei-cedar/commit/ec1321c))
* **grid:** consolidate col's alignSelf props to single alignSelf ([0058ad0](https://github.com/rei/rei-cedar/commit/0058ad0))
* **grid:** consolidate col's offsetLeft props to just offsetLeft ([ecc3294](https://github.com/rei/rei-cedar/commit/ecc3294))
* **grid:** consolidate col's offsetRight props to single offsetRight ([b812e99](https://github.com/rei/rei-cedar/commit/b812e99))
* **grid:** consolidate col's span props to just span ([a3ef361](https://github.com/rei/rei-cedar/commit/a3ef361))
* **grid:** move col and row to single package ([b0469b6](https://github.com/rei/rei-cedar/commit/b0469b6))
* **grid:** release 0.2.0 ([accc22b](https://github.com/rei/rei-cedar/commit/accc22b))
* **grid:** update align prop to accept responsive values ([1907de8](https://github.com/rei/rei-cedar/commit/1907de8))
* **grid:** update col and justify props to accept responsive values ([c572a51](https://github.com/rei/rei-cedar/commit/c572a51))
* **grid:** update gutter prop to accept responsive values ([a3f613f](https://github.com/rei/rei-cedar/commit/a3f613f))
* **grid:** update row's nowrap prop to accept responsive values ([6dd3514](https://github.com/rei/rei-cedar/commit/6dd3514))
* **grid:** update vertical prop to be a string and accept responsive values ([008f05b](https://github.com/rei/rei-cedar/commit/008f05b))
* **grid:** update wrap prop to be a string and accept responsive values ([cfe2d8a](https://github.com/rei/rei-cedar/commit/cfe2d8a))
* **icon:** add a slot to all components ([5bd063f](https://github.com/rei/rei-cedar/commit/5bd063f))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **link:** use css modules for link ([6b244d2](https://github.com/rei/rei-cedar/commit/6b244d2))
* **link:** use css modules with link ([bfb98f9](https://github.com/rei/rei-cedar/commit/bfb98f9))
* **proving grounds:** removes cruft ([ae8c943](https://github.com/rei/rei-cedar/commit/ae8c943))
* **release:** cedar Alpha release ([883ff94](https://github.com/rei/rei-cedar/commit/883ff94))
* **tokens:** consume [@rei](https://github.com/rei)/cdr-tokens package ([f094978](https://github.com/rei/rei-cedar/commit/f094978))


### BREAKING CHANGES

* **release:** CdrLink and CdrText are moving to V1
* **components:** Components are now using css-modules for unique class names tied to the package version
* **grid:** offsetRightSm, offsetRightMd, offsetRightLg consolidated to just offsetRight that accepts responsive modifiers
* **grid:** offsetLeftSm, offsetLeftMd, offsetLeftLg consolidated to just offsetLeft that accepts responsive
modifiers
* **grid:** spanSm, spanMd, spanLg removed and span accepts responsive modifiers
* **grid:** change row's nowrap prop from boolean to string. Remove nowrapSm, nowrapMd, nowrapLg in favor of
using nowrap with responsive modifiers
* **grid:** remove wrapSm, wrapMd, wrapLg in favor of using wrap with responsive modifiers
* **grid:** vertical prop is now a string instead of boolean. verticalSm, verticalMd, verticalLg removed and now
supports responsive modifiers
* **grid:** alignSelfSm, alignSelfMd, alignSelfLg consolidated to just alignSelf that accepts responsive
modifiers
* **grid:** alignSm, alignMd, alignLg replaced with just align that accepts responsive values
* **grid:** colsSm, colsMd, colsLg replaced with just cols prop. justifySm, justifyMd, justifyLg replaced with
just justify prop
* **buttons:** Buttons use css modules
* **grid:** grid css is no longer in cdr-assets, col and row are no longer their own packages
* **link:** link uses css modules
* **link:** link now uses css modules
* **grid:** gutterSm, gutterMd, gutterLg replaced with just gutter



<a name="18.7.1"></a>
## [18.7.1](https://github.com/rei/rei-cedar/compare/v5.0.0-alpha.1...v18.7.1) (2018-07-11)


### Bug Fixes

* **activity card:** correct border-radius on image to match card ([5a48d79](https://github.com/rei/rei-cedar/commit/5a48d79))
* **cdr-img:** the radius validator did not have the correct values, removing them and updating radiu ([c39066d](https://github.com/rei/rei-cedar/commit/c39066d))
* **select:** fix bug with selenium interaction ([18fbab3](https://github.com/rei/rei-cedar/commit/18fbab3))
* **select:** update variable name ([dbdc0e4](https://github.com/rei/rei-cedar/commit/dbdc0e4))


### Features

* **accordion button cta:** bump versions to match alpha release ([c7f21bb](https://github.com/rei/rei-cedar/commit/c7f21bb))
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
* **grid:** release 0.2.0 ([accc22b](https://github.com/rei/rei-cedar/commit/accc22b))
* **grid:** update align prop to accept responsive values ([1907de8](https://github.com/rei/rei-cedar/commit/1907de8))
* **grid:** update col and justify props to accept responsive values ([c572a51](https://github.com/rei/rei-cedar/commit/c572a51))
* **grid:** update gutter prop to accept responsive values ([a3f613f](https://github.com/rei/rei-cedar/commit/a3f613f))
* **grid:** update row's nowrap prop to accept responsive values ([6dd3514](https://github.com/rei/rei-cedar/commit/6dd3514))
* **grid:** update vertical prop to be a string and accept responsive values ([008f05b](https://github.com/rei/rei-cedar/commit/008f05b))
* **grid:** update wrap prop to be a string and accept responsive values ([cfe2d8a](https://github.com/rei/rei-cedar/commit/cfe2d8a))
* **icon:** add a slot to all components ([5bd063f](https://github.com/rei/rei-cedar/commit/5bd063f))
* **lerna-semantic-release:** replaced standard changelog with lerna-semantic-release as dev depende ([5084037](https://github.com/rei/rei-cedar/commit/5084037))
* **link:** use css modules for link ([6b244d2](https://github.com/rei/rei-cedar/commit/6b244d2))
* **link:** use css modules with link ([bfb98f9](https://github.com/rei/rei-cedar/commit/bfb98f9))
* **proving grounds:** removes cruft ([ae8c943](https://github.com/rei/rei-cedar/commit/ae8c943))
* **release:** cedar Alpha release ([883ff94](https://github.com/rei/rei-cedar/commit/883ff94))
* **tokens:** consume [@rei](https://github.com/rei)/cdr-tokens package ([f094978](https://github.com/rei/rei-cedar/commit/f094978))


### BREAKING CHANGES

* **release:** CdrLink and CdrText are moving to V1
* **components:** Components are now using css-modules for unique class names tied to the package version
* **grid:** offsetRightSm, offsetRightMd, offsetRightLg consolidated to just offsetRight that accepts responsive modifiers
* **grid:** offsetLeftSm, offsetLeftMd, offsetLeftLg consolidated to just offsetLeft that accepts responsive
modifiers
* **grid:** spanSm, spanMd, spanLg removed and span accepts responsive modifiers
* **grid:** change row's nowrap prop from boolean to string. Remove nowrapSm, nowrapMd, nowrapLg in favor of
using nowrap with responsive modifiers
* **grid:** remove wrapSm, wrapMd, wrapLg in favor of using wrap with responsive modifiers
* **grid:** vertical prop is now a string instead of boolean. verticalSm, verticalMd, verticalLg removed and now
supports responsive modifiers
* **grid:** alignSelfSm, alignSelfMd, alignSelfLg consolidated to just alignSelf that accepts responsive
modifiers
* **grid:** alignSm, alignMd, alignLg replaced with just align that accepts responsive values
* **grid:** colsSm, colsMd, colsLg replaced with just cols prop. justifySm, justifyMd, justifyLg replaced with
just justify prop
* **buttons:** Buttons use css modules
* **grid:** grid css is no longer in cdr-assets, col and row are no longer their own packages
* **link:** link uses css modules
* **link:** link now uses css modules
* **grid:** gutterSm, gutterMd, gutterLg replaced with just gutter



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



