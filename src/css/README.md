# CSS Utility classes:

## A11y
  - .cdr-sr-only
  - .cdr-sr-only-focusable

## Alignment

1. Text:
  - .cdr-text-left
  - .cdr-text-center
  - .cdr-text-right
2. Content:
  - .cdr-center-block

## Visibility

1. Hide:
  - .cdr-hide
  - .cdr-hide@xs-only
  - .cdr-hide@sm-only
  - .cdr-hide@sm
  - .cdr-hide@md-only
  - .cdr-hide@md
  - .cdr-hide@lg-only
  - .cdr-hide@lg
2. Show:
  - .cdr-show
  - .cdr-show-inline
  - .cdr-show-inline-block
  - .cdr-show@xs-only
  - .cdr-show-inline@xs-only
  - .cdr-show-inline-block@xs-only
  - .cdr-show@sm-only
  - .cdr-show-inline@sm-only
  - .cdr-show-inline-block@sm-only
  - .cdr-show@sm
  - .cdr-show-inline@sm
  - .cdr-show-inline-block@sm
  - .cdr-show@md-only
  - .cdr-show-inline@md-only
  - .cdr-show-inline-block@md-only
  - .cdr-show@md
  - .cdr-show-inline@md
  - .cdr-show-inline-block@md
  - .cdr-show@lg-only
  - .cdr-show-inline@lg-only
  - .cdr-show-inline-block@lg-only
  - .cdr-show@lg
  - .cdr-show-inline@lg
  - .cdr-show-inline-block@lg
3. Print:
  - .cdr-hide@print
  - .cdr-show@print
  - .cdr-show-inline@print
  - .cdr-show-inline-block@print

## Spacing

### Inline:
Intended to be used for adding margin to the right of an element.

#### Variants

| Class            | property     | value     |
|------------------|--------------|-----------|
| .cdr-inline--xxs | margin-right | 2px       |
| .cdr-inline--xs  | margin-right | 4px       |
| .cdr-inline--sm  | margin-right | 8px       |
| .cdr-inline      | margin-right | 16px      |
| .cdr-inline--lg  | margin-right | 32px      |
| .cdr-inline--xl  | margin-right | 64px      |
| .cdr-inline--xxl | margin-right | 128px     |

### Insets:
Used to add padding to all of our elements, it is important to be sure that elements use these variables rather than the generic space values for their internal spacing.

#### Variants

| Class                              | property       | value     |
|------------------------------------|----------------|-----------|
| .cdr-inset--xxs                    | padding        | 2px       |
| .cdr-inset--xxs.cdr-inset--squish  | padding        | 0 2px     |
| .cdr-inset--xxs.cdr-inset--stretch | padding        | 4px 2px   |
| .cdr-inset--xs                     | padding        | 4px       |
| .cdr-inset--xs.cdr-inset--squish   | padding        | 2px 4px   |
| .cdr-inset--xs.cdr-inset--stretch  | padding        | 6px 4px   |
| .cdr-inset--sm                     | padding        | 8px       |
| .cdr-inset--sm.cdr-inset--squish   | padding        | 4px 8px   |
| .cdr-inset--sm.cdr-inset--stretch  | padding        | 12px 8px  |
| .cdr-inset                         | padding        | 16px      |
| .cdr-inset--squish                 | padding        | 8px 16px  |
| .cdr-inset--stretch                | padding        | 24px 16px |
| .cdr-inset--lg                     | padding        | 32px      |
| .cdr-inset--lg.cdr-inset--squish   | padding        | 16px 32px |
| .cdr-inset--lg.cdr-inset--stretch  | padding        | 48px 32px |
| .cdr-inset--xl                     | padding        | 64px      |
| .cdr-inset--xl.cdr-inset--squish   | padding        | 32px 64px |
| .cdr-inset--xl.cdr-inset--stretch  | padding        | 96px 64px |
| .cdr-inset--remove-all             | padding        | 0         |
| .cdr-inset--remove-top             | padding-top    | 0         |
| .cdr-inset--remove-right           | padding-right  | 0         |
| .cdr-inset--remove-bottom          | padding-bottom | 0         |
| .cdr-inset--remove-left            | padding-left   | 0         |

### Stack
Intended to be used to add margin to the bottom of an element.

#### Variants 

| Class           | property      | value     |
|-----------------|---------------|-----------|
| .cdr-stack--xxs | margin-bottom | 2px       |
| .cdr-stack--xs  | margin-bottom | 4px       |
| .cdr-stack--sm  | margin-bottom | 8px       |
| .cdr-stack      | margin-bottom | 16px      |
| .cdr-stack--lg  | margin-bottom | 32px      |
| .cdr-stack--xl  | margin-bottom | 64px      |
| .cdr-stack--xxl | margin-bottom | 128px     |

