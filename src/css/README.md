# CSS Utility classes:

## A11y

| Class                  | notes                                                                                                   |
|------------------------|---------------------------------------------------------------------------------------------------------|
| .cdr-sr-only           | Hide an element to all devices except screen readers                                                    |
| .cdr-sr-only-focusable | Combine with `.cdr-sr-only` to show the element again when it's focused (e.g. by a keyboard-only user). |

## Alignment

### Text:

| class            | notes             |
|------------------|-------------------|
| .cdr-text-left   | Left align text   |
| .cdr-text-center | Center align text |
| .cdr-text-right  | Right align text  |

### Content:

| class             | notes                                                            |
|-------------------|------------------------------------------------------------------|
| .cdr-center-block | Sets element to block display and centers using `margin: 0 auto` |

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

### Inline:
Intended to be used for adding margin to the right of an element.

#### Variants

| Class                   | property     | value     |
|-------------------------|--------------|-----------|
| .inline-eighth-x        | margin-right | 2px       |
| .inline-quarter-x       | margin-right | 4px       |
| .inline-half-x          | margin-right | 8px       |
| .inline-three-quarter-x | margin-right | 12px      |
| .inline-1-x             | margin-right | 16px      |
| .inline-1-and-a-half-x  | margin-right | 24px      |
| .inline-2-x             | margin-right | 32px      |
| .inline-4-x             | margin-right | 64px      |

### Insets:
Used to add padding to all of our elements, it is important to be sure that elements use these variables rather than the generic space values for their internal spacing.

#### Variants

| Class                              | property       | value     |
|------------------------------------|----------------|-----------|
| .inset-eighth-x                    | padding        | 2px       |
| .inset-eighth-x-squish             | padding        | 0 2px     |
| .inset-eighth-x-stretch            | padding        | 4px 2px   |
| .inset-quarter-x                   | padding        | 4px       |
| .inset-quarter-x-squish            | padding        | 2px 4px   |
| .inset-quarter-x-stretch           | padding        | 6px 4px   |
| .inset-half-x                      | padding        | 8px       |
| .inset-half-x-squish               | padding        | 4px 8px   |
| .inset-half-x-stretch              | padding        | 12px 8px  |
| .inset-three-quarter-x             | padding        | 12px      |
| .inset-three-quarter-x-squish      | padding        | 6px 12px  |
| .inset-three-quarter-x-stretch     | padding        | 18px 12px |
| .inset-1-x                         | padding        | 16px      |
| .inset-1-x-squish                  | padding        | 8px 16px  |
| .inset-1-x-stretch                 | padding        | 24px 16px |
| .inset-1-and-a-half-x              | padding        | 24px      |
| .inset-1-and-a-half-x-squish       | padding        | 12px 24px |
| .inset-1-and-a-half-x-stretch      | padding        | 36px 24px |
| .inset-2-x                         | padding        | 32px      |
| .inset-2-x-squish                  | padding        | 16px 32px |
| .inset-2-x-stretch                 | padding        | 48px 32px |
| .inset-4-x                         | padding        | 64px      |
| .inset-4-x-squish                  | padding        | 32px 64px |
| .inset-4-x-stretch                 | padding        | 96px 64px |


### Stack
Intended to be used to add margin to the bottom of an element.

#### Variants 

| Class                   | property      | value     |
|-------------------------|---------------|-----------|
| .stack-eighth-x         | margin-bottom | 2px       |
| .stack-quarter-x        | margin-bottom | 4px       |
| .stack-half-x           | margin-bottom | 8px       |
| .stack-three-quarter-x  | margin-bottom | 12px      |
| .stack-1-x              | margin-bottom | 16px      |
| .stack-1-and-a-half-x   | margin-bottom | 24px      |
| .stack-2-x              | margin-bottom | 32px      |
| .stack-4-x              | margin-bottom | 64px      |

