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

