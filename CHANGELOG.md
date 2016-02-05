## 2.0.0 2016-01-22 Scott Flesher <sfleshe@rei.com> && Michael Hewson  <mhewson@rei.com.com>
Features:
 - Moves project to Github <https://github.com/rei/rei-cedar>
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
 - adding margin-top: 0 to all default headers
Removals:
 - variables.less

## 1.2.1 2015-12-21  Michael Hewson  <mhewson@rei.com.com>
Features:
 - Update to postcss autoprefix.

## 1.2.0 2015-12-07  Michael Hewson  <mhewson@rei.com.com>
Features:
 - Moving from standard less mixin pattern to extend where possible.
 - Created bootstrap directory and moved unmodified bootstrap patterns there.
Removals:
 - REI-Overlays directory.
 - Border radius from input.less.
 - Gliphcons.
 - Grunt and refactored build system to use only gulp.

## 1.1.3 2015-12-07  Michael Hewson  <mhewson@rei.com.com>
Features:
 - Adding default focus state for button, link and form.
Removals:
 - List group patterns not defined in the ERL
 - Jumbotron
 - Button toolbar
 - Badges
 - Border-radius from input groups
 - List-group variables
 - Navbar

## 1.1.0 2015-11-10  Michael Hewson  <mhewson@rei.com.com>
Version 1.1.0 of REI pattern library.
Features:
 - Moved remaining mixins imports to the rei-overlay mixin file.
 - Close X icon is reset to new default size of 20px per ERL
 - Small tag and text-small updated to 12px (Disclaimer text)
 - Well mountain group
 - overlay classes now add border color (default is background color)
 - Update to Twin Mountain-peaks
 - Off-price family added for links buttons and overlay fills
Removals:
 - Alerts.
 - Border Radius.
 - Gradient Filter.
 - Panel Mixin.
 - Tab Focus.
 - Generic Bootstrap files.
 - Labels.
 - Theme.
 - Mixin.
 - Generic Bootstrap Components.
 - Progress Bar.
 - DropDown.
 - Gliphcons.
Renamed
 - 'hide-text' to 'text-hide' and removed excess mixins.

## 1.02 2015-10-08 Michael Hewson  <mhewson@rei.com.com>
Features:
 - Disabled style added for checkbox and radio.
 - Checkbox and radio labels now render using the label-narrow mixin as default and that class can be removed from markup structures.
 - Support for inline contrast overlay links.
 - Announce heading.
Bugfixes:
 - Wrapping text bug for checkbox and radio.
 - Space between checkbox and radio control and label.
 - outlet overlay link -- added underline.
 - inline-group button wrapping.
 - list item wrapping for decoration list.

## 1.0.1 2015-09-21 Michael Hewson  <mhewson@rei.com.com>
Features:
 - Support for inline form validation.
Bugfixes:
 - Input horizontal padding.
 - Inline checkbox and radio display.
 - Inline-group update to remove float.
 - Grid mixins, medium and large row and col padding now applying correctly.

## 1.0.0 2015-09-03 Michael Hewson  <mhewson@rei.com.com>
Features:
 - Tree icon in all button families.
 - Variables added for page header '@header-spacing -- 40px',' @breadcrumb-spacing --30px'.
 - Default list margin update for ordered list.
 - Bullet list updated to use css shape.
Bugfixes:
 - Form update for characters getting chopped.
 - Update to radio button border radius value.

## 1.0.0-13 2015-09-03 Michael Hewson  <mhewson@rei.com.com>
Features:
 - Filter - remove.
 - Well-lg update to use 30px padding.
 - Update for button internal padding.
 - Link-sub-navigation.
 - List-inline-md.
 - list-inline-lg.
 - List-inline-pipe.
 - 'use_link-stag-explore', added to link lists this class will update links to use link-stag-explore.
 - button + button default margin moved to right.
 - inline-group, use with button groups to allow groups of elements to have correct wrapping behavior.
 - ig-sm - shrinks the amount of bottom margin.
 - menu group padding updates.

## 1.0.0-12 2015-08-17 Scott Flesher <sfleshe@rei.com>
Final version for REI.com hardening before redesign launch.
Features:
 - 'text-strikethrough' added as a class.
 - 'text-danger' update, added utility error to color attr.
 - Alerts created:  inherits media.
 - Field messages updated: inherits alert.
 - Buttons with icons, play and external link.
 - Links with icons, play and external link.
 - '@text-with-right-icon-rei-external-link-ruleset' & '.text-icon-external' , dynamic size ajustment and alignment.
 - '@text-with-left-icon-rei-play-small-ruleset' & '.text-icon-play', dynamic size ajustment and alignment.
 - '@text-with-icon-rei-right-arrow-ruleset' & '.text-icon-right-arrow', dynamic size ajustment and alignment.
 - '@text-with-icon-rei-tree-arrow-ruleset' & '.text-icon-tree-arrow', dynamic size ajustment and alignment.
 - Header links core.
 - Header links explore.
 - Header links outlet.
 - Input groups sm default and lg.
 - Input group input-group-merge-left : removes border left.
 - Input group input-group-merge-right : removes border right.
 - Input group support for icons and buttons with group.
 - Form group.
 - Form group with icon.

## 1.0.0-11 2015-08-13
Features:
 - Shapes - Twin mountain peak.

## 1.0.0-11 2015-08-04  Michael Hewson  <mhewson@rei.com.com>
Features:
 - Error state for checkbox and radio.
 - Required class added as sibling to form-group, adds an astrix to the end of labels, checkboxes and radios override this to have the astrix precede labels.
 - Updates to button sizes sm and xs.
 - Input group sizing updates - inline with inputs.
 - Explore tree arrow link support.

## 1.0.0-10 2015-07-24  Michael Hewson  <mhewson@rei.com.com>
Features:
 - Outlet breadcrumbs created with breadcrumb outlet-crumb.
 - Explore breadcrumbs modified from breadcrumb explore to  with breadcrumb explore-crumb.
 - Overlay-outlet-dark-1 style created for outlet fills.
 - Outlet link.
 - Outlet overlay link.
 - Outlet standalone link.
 - Outlet standalone overlay link.
 - Line-height adjustments made to heading families.
 - Hero heading group re sized.

## 1.0.0-9 2015-07-23  Michael Hewson  <mhewson@rei.com.com>
Features:
 - Input-group to support icon sizing.
 - Theme input-group for dark backgrounds.

## 1.0.0-8 2015-07-21  Michael Hewson  <mhewson@rei.com.com>
Features:
 - Outlet color variables: '@outlet-action-1: mapped to @brand-danger', '@outlet-action-2:  mix(@brand-danger, @core-architectural-5, 70%);', '@outlet-architectural-1: mapped to @outlet-action-1;'.
 - '@bg-explore-1-ruleset' outlet background fill helper.
 - Primary Outlet button.
 - Default Outlet button.

## 1.0.0-7 2015-07-21  Michael Hewson  <mhewson@rei.com.com>
Features:
 - Explore Outline Alternate button.
 - Explore button tree icon.

## 1.0.0-7 2015-07-18  Michael Hewson  <mhewson@rei.com.com>
Features:
 - Icon sizes baked in to icon class names via mixin : Icon documentation.
 - Color-palette documentation
 - 'overlay-dark-1'.
 - 'overlay-dark-2'.
 - 'overlay-medium-1'.
 - 'overlay-medium-2'.
 - 'overlay-light-1'.
 - 'overlay-light-2'.
 - 'overlay-light-3'.
 - '.checkbox-radio-color-variant' :checkbox and radio mixin to select primary background and label color
 - Defining and passing '.checkbox-radio-color-variant' mixin to appropriate overlay classes.
Deprecated:
 - 'overlay-dark'.
 - 'overlay-medium'.
 - 'overlay-light'.
 - 'overlay-dusty'.

## 1.0.0-6 2015-07-15  Michael Hewson  <mhewson@rei.com.com>
Features:
 - Icon size variables
 - Icon size classes
 - Icon utility classes based on font awesome allowing font icon animation and stacking
 - collapsibleList: Css only expand collapse control
 - toggle-rating: checkbox or radio as star
 - toggle-sort: checkbox or radio as checkmark
 - toggle-remove: checkbox or radio as x
 - toggle-expand-collapse: checkbox or radio as plus / minus
 - place-toggle-variant: mixin allowing placement of toggle control
 - update to sort menu, aligning toggle to the right of menu
 - update to filter and menu list groups to use the collapsibleList control and checkbox radio toggles

## 1.0.0-5 2015-06-22  Jay Billings  <jabilli@rei.com.com>
Features:
 - Icons

## 1.0.0-4 2015-06-22  Michael Hewson  <mhewson@rei.com.com>
Features:
 - updated core H1 and H2 line-heights
 - Utility class label-narrow created for labels to display as normal text.
 - Focus states updated for links and buttons
Utility padding classes for grid containers created:
 - vertical-push
 - vertical-push-md
 - vertical-push-lg
 - vertical-pull
 - vertical-pull-md
 - vertical-pull-lg
Background/color fill classes created:
 - overlay-dark
 - overlay-medium
 - overlay-light
 - overlay-dusty
 - overlay-explore-dark
 - overlay-explore-light
 - sample page created to demonstrate grid construction.
 - Web font moved to the font dir.
 - Update to breadcrums style, adding core and explore variations.

## 1.0.0-3 2015-06-10  Michael Hewson  <mhewson@rei.com.com>
Features:
 - List Group updates - sort list

## 1.0.0-rc.2 2015-06-04  Michael Hewson  <mhewson@rei.com.com>
Features:
 - large screen breakpoint
 - List Group: sort, filter, menu
 - Interstate Bold  Condensed

## 1.0.0-rc.1 2015-05-26  Michael Hewson  <mhewson@rei.com.com>
Version 1 of REI pattern library.
Palette
 - Color (Core): accounts for architectural palette
 - Color (Explore)
 - Color (High Contrast)
 - Color (Social)
 - Color (classes)
Typography
Headings
 - Header (Core)
 - Header (Explore)
 - Header (Hero)

 - Header: Decorations (Content label)

Body Copy
 - Paragraph
 - Paragraph (text-lead)
Links
Core
 - Standard (Copy)
 - Standalone (Body)
 - Standalone
 - Standalone (Title)
 - Navigation
 - Navigation (Title)
 - Navigation (Utility)
Overlay
 - Standard (Copy)
 - Standalone (Body)
 - Standalone
 - Standalone (Title)
 - Navigation
 - Navigation (Contextual)
 - Navigation (Utility)

Explore
 - Standard (Copy)
 - Standalone
Overlay
 - Standard (Copy)
 - Standalone
Inline Text Elements
 - Message with Status Icon
 - Contextual Colors
 - Marked
 - Emphasis
 - Transformation Classes
 - Blockquote
List
 - Ordered
 - Text List
 - Text List (With Decoration)
 - Inline
Navigation List
 - Breadcrumb
 - Tab
Button
 - Primary
 - Default
 - Disabled
 - Block
 - Explore (Primary)
 - High Contrast (Primary)
 - High Contrast (Default)

Button groups

Forms
 - Default
 - Inline
 - Horizontal
 - Checkbox and radio
 - select
 - Input
 - Static Controls
 - Disabled State
 - Disabled Fieldsets
 - Focus State
 - Validation styles
 - Addons
