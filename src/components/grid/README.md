# CdrGrid

## Props

### CdrRow

| name | type   | Default |
|:-----|:-------|:--------|
| cols | String | none    |

Number of equal-width columns in the row. A value of ‘auto’ will size columns as wide as their content.

Possible values: {1-12, auto}
Also accepts responsive values with `@breakpoint`: "2 4@md"

| name    | type   | Default |
|:--------|:-------|:--------|
| justify | String | none    |

Justify columns within a row. See CSS flexbox justify-content.

Possible values: {left, center, right, around, between}.
Also accepts responsive values with `@breakpoint`: "center right@lg"

| name  | type   | Default |
|:------|:-------|:--------|
| align | String | none    |

Align columns of different heights. See CSS flexbox align-items.

Possible values: {top, middle, bottom, stretch}.
Also accepts responsive values with `@breakpoint`: "top middle@sm"

| name   | type   | Default |
|:-------|:-------|:--------|
| gutter | String | none    |

Defines gutter size.
Default gutter size is 16px @xs and @sm and 32px @md and @lg.

Possible values: {none, xxs}.
Also accepts responsive values with `@breakpoint`: "none@md"

| name     | type   | Default |
|:---------|:-------|:--------|
| vertical | String | none    |

Changes row to a column layout. See CSS flexbox flex-direction.

Possible values: {vertical}.
Also accepts responsive values with `@breakpoint`: "vertical@md"

| name | type   | Default |
|:-----|:-------|:--------|
| wrap | String | none    |

Enables row wrapping. Only needs to be changed if overriding `nowrap`. See CSS flexbox flex-wrap.

Possible values: {wrap}.
Also accepts responsive values with `@breakpoint`: "wrap@md"

| name   | type   | Default |
|:-------|:-------|:--------|
| nowrap | String | none    |

Disables row wrapping and enables overflow scrolling. See CSS flexbox flex-wrap.

Possible values: {nowrap}.
Also accepts responsive values with `@breakpoint`: "nowrap@md"

| name | type   | Default |
|:-----|:-------|:--------|
| type | String | none    |

Sets grid to use `ul` and `li` or `div`.

Possible values: {normal, list}.

### CdrCol

| name | type   | Default |
|:-----|:-------|:--------|
| span | String | none    |

Number of columns (out of 12) the column should span. Functions like bootstrap col-* classes.
Overrides widths set by "cols" prop on CdrRow.

Possible values: {1-12}
Also accepts responsive values with `@breakpoint`: "12 8@lg"

| name       | type   | Default |
|:-----------|:-------|:--------|
| offsetLeft | String | none    |

Number of columns (out of 12)  of empty space to add left of this column.

Possible values: {0-12}
Also accepts responsive values with `@breakpoint`: "12 8@lg"

| name        | type   | Default |
|:------------|:-------|:--------|
| offsetRight | String | none    |

Number of columns (out of 12) of empty space to add right of this column.

Possible values: {0-12}
Also accepts responsive values with `@breakpoint`: "12 8@lg"

| name      | type   | Default |
|:----------|:-------|:--------|
| alignSelf | String | none    |

How the column should align (overrides CdrRow alignment). See CSS flexbox align-self.

Possible values: {top, middle, bottom, stretch}.
Also accepts responsive values with `@breakpoint`: "middle@sm"

| name  | type    | Default |
|:------|:--------|:--------|
| isRow | Boolean | false   |

Makes the column act as a CdrRow. Setting this to true exposes all props of CdrRow in addition to CdrCol props.

## Installation

Resources are available within the [cdr-grid package](https://www.npmjs.com/package/@rei/cdr-grid):

| **Name**        | **Type**            | **Description**                        |
|:----------------|:--------------------|:---------------------------------------|
| `@rei/cdr-grid` | Node module package | Import the component into your project |
| `cdr-grid.css`  | Style sheet         | Component specific styles              |

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-grid` package using **npm** in your terminal:

_Terminal_

```terminal
npm i -s @rei/cdr-grid
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-grid/dist/cdr-grid.css";
```

### #3. Add component to a template

_local.vue_

```html
<template>
  <cdr-row>
    <cdr-col>
      ...
    </cdr-col>
    <cdr-col>
      ...
    </cdr-col>
  </cdr-row>
</template>

<script>
import { CdrRow, CdrCol } from '@rei/cdr-grid';
export default {
  ...
  components: {
     CdrRow,
     CdrCol  
  }
}
</script>
```

## Usage

CdrRow functions as a flexbox container, and CdrCol functions as a flexbox item.

- Always use CdrRow and CdrCol together:
    - Attempting to use either without the other will not work
    - Never include other elements as immediate children of CdrRow besides CdrCol 
- The grid system is mobile-first, flexbox based, and 12 columns wide. Many props mirror the flexbox API and work as you’d expect CSS flexbox to work.

New to or unfamiliar with flexbox? Read this [CSS Tricks flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) for background, terminology, guidelines, and examples.

Immediate children of `cdr-col` are flexed due to a flex height display bug in some versions of Safari. This causes immediate children to be full-width and display stacked horizontally. Wrapping child elements in a single `div` element will fix these problems (if undesired). 

```html
<cdr-row>
  <cdr-col>
    <div>
      <p>This will display</p>
      <p>As expected</p>
    </div>
  </cdr-col>
</cdr-row>
```

## Nested Grids

Nested grids are made by nesting CdrCols and adding the `is-row` prop to the `CdrCol` that acts as the row wrapper:

- Add `is-row` prop to `cdr-col` that has other `cdr-col` as children
- `is-row` will expose all props for both col and row


```html
<cdr-row cols=”3”>
  <cdr-col is-row span=”6” cols”2”>
    <cdr-col></cdr-col>
  </cdr-col>
</cdr-row>
```

## Accessibility

- Low-vision users should be able to increase the size of the text by up to 200 percent without breaking the layout
- Use list markup for content layout. List markup allow contents to be structured which makes it easier for assistive technologies

This component follows WebAIM’s accessibility guidelines:

- [WCAG SC 1.3.2: Meaningful Sequence](https://www.w3.org/TR/WCAG20/#content-structure-separation-sequence): Cedar Design System does not provide for flexbox’s order property.  Reverse order or reordering of items is not allowed. Content must be presented in a correct reading sequence to comply with accessibility standards
