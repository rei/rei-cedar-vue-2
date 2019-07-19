# CSS Utility classes:

## A11y

| Class                  | notes                                                                                                   |
|------------------------|---------------------------------------------------------------------------------------------------------|
| .cdr-sr-only           | Hide an element to all devices except screen readers                                                    |
| .cdr-sr-only-focusable | Combine with `.cdr-sr-only` to show the element again when it's focused (e.g. by a keyboard-only user). |

## Alignment

### Text:

| class                   | notes             |
|-------------------------|-------------------|
| .cdr-align-text-left    | Left align text   |
| .cdr-align-text-center  | Center align text |
| .cdr-align-text-justify | Justify align text|
| .cdr-align-text-right   | Right align text  |

### Content:

| class                   | notes             |
|-------------------|------------------------------------------------------------------|
| .cdr-align-center-block | Sets element to block display and centers using `margin: 0 auto` |

## Visibility

### Hide:

| Class             | Visible @ xs | Visible @ sm | Visible @ md | Visible @ lg |
|-------------------|:------------:|:------------:|:------------:|:------------:|
| .cdr-hide         |              |              |              |              |
| .cdr-hide@xs-only |              |       x      |       x      |       x      |
| .cdr-hide@sm-only |       x      |              |       x      |       x      |
| .cdr-hide@sm      |       x      |              |              |              |
| .cdr-hide@md-only |       x      |       x      |              |       x      |
| .cdr-hide@md      |       x      |       x      |              |              |
| .cdr-hide@lg-only |       x      |       x      |       x      |              |
| .cdr-hide@lg      |       x      |       x      |       x      |              |

### Show:

| Class                  |             note             |
|------------------------|------------------------------|
| .cdr-show              | Sets display to block        |
| .cdr-show-inline       | Sets display to inline       |
| .cdr-show-inline-block | Sets display to inline-block |

When combined with `.cdr-hide`

| Class                 | Visible @ xs | Visible @ sm | Visible @ md | Visible @ lg |
|-----------------------|:------------:|:------------:|:------------:|:------------:|
| .cdr-show(-*)         |       x      |       x      |       x      |       x      |
| .cdr-show(-*)@xs-only |       x      |              |              |              |
| .cdr-show(-*)@sm-only |              |       x      |              |              |
| .cdr-show(-*)@sm      |              |       x      |       x      |       x      |
| .cdr-show(-*)@md-only |              |              |       x      |              |
| .cdr-show(-*)@md      |              |              |       x      |       x      |
| .cdr-show(-*)@lg-only |              |              |              |       x      |
| .cdr-show(-*)@lg      |              |              |              |       x      |

### Print:

Within print media query.

| Class                        |             note             |
|------------------------------|------------------------------|
| .cdr-hide@print              | Sets display to none         |
| .cdr-show@print              | Sets display to block        |
| .cdr-show-inline@print       | Sets display to inline       |
| .cdr-show-inline-block@print | Sets display to inline-block |

## Spacing

Spacing classes reflect spacing tokens.

### Insets:

Used to add padding to all of our elements, it is important to be sure that elements use these variables rather than the generic space values for their internal spacing.

#### Classes

Anatomy of the class name is `cdr-<token-name>`. For example, `cdr-space-inset-one-x`.

Classes can also have breakpoints appended to them to make them apply at that breakpoint only. `cdr-space-inset-one-x@md`

| Class                              | property       | value     |
|------------------------------------|----------------|-----------|
| .cdr-space-inset-eighth-x                    | padding        | 2px       |
| .cdr-space-inset-eighth-x-squish             | padding        | 0 2px     |
| .cdr-space-inset-eighth-x-stretch            | padding        | 4px 2px   |
| .cdr-space-inset-quarter-x                   | padding        | 4px       |
| .cdr-space-inset-quarter-x-squish            | padding        | 2px 4px   |
| .cdr-space-inset-quarter-x-stretch           | padding        | 6px 4px   |
| .cdr-space-inset-half-x                      | padding        | 8px       |
| .cdr-space-inset-half-x-squish               | padding        | 4px 8px   |
| .cdr-space-inset-half-x-stretch              | padding        | 12px 8px  |
| .cdr-space-inset-three-quarter-x             | padding        | 12px      |
| .cdr-space-inset-three-quarter-x-squish      | padding        | 6px 12px  |
| .cdr-space-inset-three-quarter-x-stretch     | padding        | 18px 12px |
| .cdr-space-inset-1-x                         | padding        | 16px      |
| .cdr-space-inset-1-x-squish                  | padding        | 8px 16px  |
| .cdr-space-inset-1-x-stretch                 | padding        | 24px 16px |
| .cdr-space-inset-1-and-a-half-x              | padding        | 24px      |
| .cdr-space-inset-1-and-a-half-x-squish       | padding        | 12px 24px |
| .cdr-space-inset-1-and-a-half-x-stretch      | padding        | 36px 24px |
| .cdr-space-inset-2-x                         | padding        | 32px      |
| .cdr-space-inset-2-x-squish                  | padding        | 16px 32px |
| .cdr-space-inset-2-x-stretch                 | padding        | 48px 32px |
| .cdr-space-inset-4-x                         | padding        | 64px      |
| .cdr-space-inset-4-x-squish                  | padding        | 32px 64px |
| .cdr-space-inset-4-x-stretch                 | padding        | 96px 64px |

### Generic:

Used to quickly add padding or margin to elements.

#### Classes

Classes add spacing as either padding (`p`) or margin (`m`) to either the top (`t`), right (`r`), bottom (`b`), or left (`l`). There are also `x` and `y` available for left/right and top/bottom respectively.

Anatomy of the class name is `cdr-(p|m)(t|r|b|l|x|y)-<space-token>`. For example, `cdr-pr-space-one-x`.

Classes can also have breakpoints appended to them to make them apply at that breakpoint only. `cdr-pr-space-one-x@mc`

| Class                                    | property | value     |
|------------------------------------------|----------|-----------|
| .cdr-(p|m)(t|r|b|l|x|y)-space-eighth-x                | padding  | 2px       |
| .cdr-(p|m)(t|r|b|l|x|y)-space-quarter-x               | padding  | 4px       |
| .cdr-(p|m)(t|r|b|l|x|y)-space-half-x                  | padding  | 8px       |
| .cdr-(p|m)(t|r|b|l|x|y)-space-three-quarter-x         | padding  | 12px      |
| .cdr-(p|m)(t|r|b|l|x|y)-space-1-x                     | padding  | 16px      |
| .cdr-(p|m)(t|r|b|l|x|y)-space-1-and-a-half-x          | padding  | 24px      |
| .cdr-(p|m)(t|r|b|l|x|y)-space-2-x                     | padding  | 32px      |
| .cdr-(p|m)(t|r|b|l|x|y)-space-4-x                     | padding  | 64px      |
