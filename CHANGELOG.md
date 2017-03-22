## 1.6.2
Features:
- removing jQuery from video modal ui-component

## 1.5
Features:
- Riot modals.
- Open and closed type classes for lineheight.

## 1.5
Features:
- Typograpgy updates.

## 1.2.11  2016-08-25 Michael Hewson  <mhewson@rei.com.com>
Bugfixes:
- Bootstrap added to project and import removed.

## 1.2.10  2016-08-24 Michael Hewson  <mhewson@rei.com.com>
Features:
- BackstopJs visual regression
- Bootstrap removed from project and imported to main less file.
- first pass of css-usage-report 

## 1.2.9
Features:
- Set image sharpening to be an opt-in by assigning .img-sharpen class rather than being a built in feature of .img-frame

## 1.2.5  2016-05-31 Michael Hewson  <mhewson@rei.com.com>
Features:
- BackstopJs visual regression first pass

## 1.2.4  2016-03-18 Michael Hewson  <mhewson@rei.com.com>
Features:
- Toggle between float and flex grid by adding the row-flex class to existing rows

## 1.2.2  2016-03-18 Michael Hewson  <mhewson@rei.com.com>
Bugfixes:
- adding padding to container and -margin to row

## 1.2.1  2016-03-18 Michael Hewson  <mhewson@rei.com.com>
Bugfixes:
- adding position relative to cols
- setting col to display inline-block

## 1.2.0  2016-03-16 Michael Hewson  <mhewson@rei.com.com>
Features:
- Move from bootstrap 3.6 float based grid to flex grid.
Bugfixes:
- Reset hamburger text size from 1.8rem to 2.4 rem.

## 1.1.0  2016-03-9 Michael Hewson  <mhewson@rei.com.com>
Features:
- Move from px to rem.

## 1.0.0  2016-02-19 Michael Hewson  <mhewson@rei.com.com>
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
