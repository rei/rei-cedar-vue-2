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
Bugfixes:x
 - Filter button bug fix
 - adding margin-top: 0 to all default headers
 - fixed hardcoded protocol for icon font path
 - moved reset.override to reset.less,
Removals:
 - variables.less
 - .overrides are adding multiple iterations of themselves and have been removed for the moment.
 - gliphcons
