<a name="1.7.12"></a>
## [1.7.12](https://github.com/rei/rei-cedar/compare/1.7.11...1.7.12) (2017-10-14)



<a name="1.7.11"></a>
## [1.7.11](https://github.com/rei/rei-cedar/compare/v1.7.10...v1.7.11) (2017-10-14)



<a name="1.7.10"></a>
## [1.7.10](https://github.com/rei/rei-cedar/compare/v1.7.9...v1.7.10) (2017-10-14)
Bugfixes:
- select box text bug on safari

<a name="1.7.8"></a>
## [1.7.8](https://github.com/rei/rei-cedar/compare/v1.7.7...v1.7.8)
Bugfixes:
- star color updates
- secondary button border color updates
- breadcrumb text-decoration on hover

<a name="1.7.7"></a>
## [1.7.7](https://github.com/rei/rei-cedar/compare/v1.7.6...v1.7.7)
Bugfixes:
- link color updates

<a name="1.7.6"></a>
## [1.7.6](https://github.com/rei/rei-cedar/compare/v1.7.5...v1.7.6)
Features:
- btn-icon
- btn-bare
Bugfixes:
- text-decoration turned on by default

<a name="1.7.5"></a>
## [1.7.5](https://github.com/rei/rei-cedar/compare/v1.7.4...v1.7.5)
Features:
- transparent button utility class
- link text decoration skip
Bugfixes:
- secondary button hover state
- link text decoration set to on for defualt
- input-group addon icon spacing ajustments
- md button font and spacing updates
- close button sizing updates

<a name="1.7.4"></a>
## [1.7.4](https://github.com/rei/rei-cedar/compare/v1.7.3...v1.7.4)
Features:
- update to focus and hover state of tab items


<a name="1.7.3"></a>
## [1.7.3](https://github.com/rei/rei-cedar/compare/v1.7.2...v1.7.3)
Bugfixes:
- restrain close button from going full width at xs breakpoint


<a name="1.7.2"></a>
## [1.7.2](https://github.com/rei/rei-cedar/compare/v1.7.1...v1.7.2)
Bugfixes:
- close button on modal was not assigned the icon font correctly

<a name="1.7.1"></a>
## [1.7.1](https://github.com/rei/rei-cedar/compare/v1.7.0...v1.7.1)
Bugfixes:
- close button padding increase
- input lg padding increase
- medium button font family to redwood-ui-40
- update to brand.ai variables

<a name="1.7.0"></a>
## [1.7.0](https://github.com/rei/rei-cedar/compare/v1.6.3...v1.7.0)
Features:
- Button design updates
- Input design updates
- Input Group design updates
- Form updates
- Validation markup and design updates, still supports old markup contract

<a name="1.6.3"></a>
## [1.6.3](https://github.com/rei/rei-cedar/compare/v1.6.2...v1.6.3)
Features:
- Adding event riot components

<a name="1.6.2"></a>
## [1.6.2](https://github.com/rei/rei-cedar/compare/v1.6.1...v1.6.2)
Features:
- removing jQuery from video modal ui-component

<a name="1.5.1"></a>
## [1.5.1](https://github.com/rei/rei-cedar/compare/v1.5.0...v1.5.1)
Features:
- Riot modals.
- Open and closed type classes for lineheight.

<a name="1.5"></a>
## [1.5](https://github.com/rei/rei-cedar/compare/v1.2.11...v1.5)
Features:
- Typograpgy updates.

<a name="1.2.11"></a>
## [1.2.11](https://github.com/rei/rei-cedar/compare/v1.2.10...v1.2.11)
Bugfixes:
- Bootstrap added to project and import removed.

<a name="1.2.10"></a>
## [1.2.10](https://github.com/rei/rei-cedar/compare/v1.2.9...v1.2.10)
Features:
- BackstopJs visual regression
- Bootstrap removed from project and imported to main less file.
- first pass of css-usage-report 

<a name="1.2.9"></a>
## [1.2.9](https://github.com/rei/rei-cedar/compare/v1.2.5...v1.2.9)
Features:
- Set image sharpening to be an opt-in by assigning .img-sharpen class rather than being a built in feature of .img-frame

<a name="1.2.5"></a>
## [1.2.5](https://github.com/rei/rei-cedar/compare/v1.2.4...v1.2.5)
Features:
- BackstopJs visual regression first pass

<a name="1.2.4"></a>
## [1.2.4](https://github.com/rei/rei-cedar/compare/v1.2.2...v1.2.4)
Features:
- Toggle between float and flex grid by adding the row-flex class to existing rows

<a name="1.2.2"></a>
## [1.2.2](https://github.com/rei/rei-cedar/compare/v1.2.1...v1.2.2)
Bugfixes:
- adding padding to container and -margin to row

<a name="1.2.1"></a>
## [1.2.1](https://github.com/rei/rei-cedar/compare/v1.2.0...v1.2.1)
Bugfixes:
- adding position relative to cols
- setting col to display inline-block

<a name="1.2.0"></a>
## [1.2.0](https://github.com/rei/rei-cedar/compare/v1.1.0...v1.2.0)
Features:
- Move from bootstrap 3.6 float based grid to flex grid.
Bugfixes:
- Reset hamburger text size from 1.8rem to 2.4 rem.

<a name="1.1.0"></a>
## [1.1.0](https://github.com/rei/rei-cedar/compare/v1.0.0...v1.1.0)(2016-03-9)
Features:
- Move from px to rem.

<a name="1.0.0"></a>
## [1.0.0](https://github.com/rei/rei-cedar/v1.0.0)(2016-02-19)
Features:
 - Moves former ui-framework project to Github <https://github.com/rei/rei-cedar>
 - Re-brands project as rei-cedar.
 - Breaking out less patterns into atomic directory structure and moving to the definitions dir.
 - Major update for themes following semantic-UI structure.
 - Stub out for garage theme.
 - Provide variables and overrides per component within themes directory.
 - Update to gulp-less dependency allowing for 'optional' imports and variables defined outside of root.
 - Documentation directory structure and navigation now following atomic design.
 - All site navigation contained within navigation.yml, removed nav dir.
 - Visual regression tests updated to flow through new site order.
Bugfixes:
 - Filter button bug fix
 - Adding margin-top: 0 to all default headers
 - Fixed hardcoded protocol for icon font path
 - Moved reset.override to reset.less,
 - Refactored image utility mixins
Removals:
 - Variables.less
 - .overrides are adding multiple iterations of themselves and have been removed for the moment.
 - Gliphcons
