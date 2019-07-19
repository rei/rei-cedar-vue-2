# CSS Utility classes:

## Alignment

### Text:

| class                      | notes             |
|----------------------------|-------------------|
| .cdr-align-text-left       | Left align text   |
| .cdr-align-text-left@xs    | Left align text   |
| .cdr-align-text-left@sm    | Left align text   |
| .cdr-align-text-left@md    | Left align text   |
| .cdr-align-text-left@lg    | Left align text   |
| .cdr-align-text-center     | Center align text |
| .cdr-align-text-center@xs  | Center align text |
| .cdr-align-text-center@sm  | Center align text |
| .cdr-align-text-center@md  | Center align text |
| .cdr-align-text-center@lg  | Center align text |
| .cdr-align-text-justify    | Justify align text|
| .cdr-align-text-justify@xs | Justify align text|
| .cdr-align-text-justify@sm | Justify align text|
| .cdr-align-text-justify@md | Justify align text|
| .cdr-align-text-justify@lg | Justify align text|
| .cdr-align-text-right      | Right align text  |
| .cdr-align-text-right@xs   | Right align text  |
| .cdr-align-text-right@sm   | Right align text  |
| .cdr-align-text-right@md   | Right align text  |
| .cdr-align-text-right@lg   | Right align text  |

### Content:

| class                   | notes             |
|-------------------|------------------------------------------------------------------|
| .cdr-align-center-block | Sets element to block display and centers using `margin: 0 auto` |
| .cdr-align-center-block@xs |   for the extra small breakpoint only             |
| .cdr-align-center-block@sm |   for the small breakpoint only             |
| .cdr-align-center-block@md |   for the medium breakpoint only             |
| .cdr-align-center-block@lg |   for the large breakpoint only            |

## Visibility

| Class                        | notes |
|------------------------------|:-----:|
| .cdr-display-none            |       |
| .cdr-display-none@xs         |       |
| .cdr-display-none@sm         |       |
| .cdr-display-none@md         |       |
| .cdr-display-none @lg        |       |
| .cdr-display-hidden          |       |
| .cdr-display-hidden@xs       |       |
| .cdr-display-hidden@sm       |       |
| .cdr-display-hidden@md       |       |
| .cdr-display-hidden@lg       |       |
| .cdr-display-block           |       |
| .cdr-display-block@xs        |       |
| .cdr-display-block@sm        |       |
| .cdr-display-block@md        |       |
| .cdr-display-block@lg        |       |
| .cdr-display-inline-block    |       |
| .cdr-display-inline-block@xs |       |
| .cdr-display-inline-block@sm |       |
| .cdr-display-inline-block@md |       |
| .cdr-display-inline-block@lg |       |
| .cdr-display-flex            |       |
| .cdr-display-flex@xs         |       |
| .cdr-display-flex@sm         |       |
| .cdr-display-flex@md         |       |
| .cdr-display-flex@lg         |       |
| .cdr-display-inline-flex     |       |
| .cdr-display-inline-flex@xs  |       |
| .cdr-display-inline-flex@sm  |       |
| .cdr-display-inline-flex@md  |       |
| .cdr-display-inline-flex@lg  |       |
| .cdr-display-sr-only         |       |
| .cdr-display-sr-focusable    |       |

### Print:

Within print media query.

| Class                          |             note              |
|--------------------------------|---------------------------------|
| .cdr-display-none@print        | Sets display to none         |
| .cdr-display-block@print       | Sets display to block        |
| .cdr-disply-inline@print       | Sets display to inline       |
| .cdr-display-inline-block@print| Sets display to inline-block |

## Spacing

Spacing classes reflect spacing tokens.

### Insets:

Insets are used to add padding to all of our elements, it is important to be sure that elements use these variables rather than the generic space values for their internal spacing.

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
