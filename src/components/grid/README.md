# CdrGrid

For the most up-to-date information, see [REI Cedar documentation](https://rei.github.io/rei-cedar-docs/components/grid/).

Grids are built from two components, **CdrRow** and **CdrCol**.

## Props

### CdrRow

| name | type   | default |
|:-----|:-------|:--------|
| cols | String | none    |

Number of equal-width columns in the row; however the value of ‘auto’ will size columns as wide as the column’s content. Possible values: {  ‘1’  through  ‘12’, ‘auto’  }.  Also accepts responsive values @breakpoint: ‘2 4@breakpoint--md’

| name    | type   | default |
|:--------|:-------|:--------|
| justify | String | none    |

Justify columns within a row. See CSS Flexbox justify-content. Possible values: {  ‘left’, ‘center’, ‘right’, ‘around’, ‘between’  }. Also accepts responsive values @breakpoint: ‘center right@breakpoint--lg’

| name  | type   | default |
|:------|:-------|:--------|
| align | String | none    |

Align columns of different heights. See CSS Flexbox align-items. Possible values: {  ‘top’, ‘middle’, ‘bottom’, ‘stretch}. Also accepts responsive values @breakpoint:  ‘top middle@breakpoint--sm’

| name   | type   | default |
|:-------|:-------|:--------|
| gutter | String | none    |

Defines gutter size. Default gutter size is 16px @breakpoint--xs and @breakpoint--sm and 32px @breakpoint--md and @breakpoint--lg. Possible values: {  ‘none’, ‘xxs’  }. Also accepts responsive values @breakpoint:  none@breakpoint--md’

| name     | type   | default |
|:---------|:-------|:--------|
| vertical | String | none    |

Changes row to a column layout. See CSS Flexbox flex-direction. Possible values: {  ‘vertical’  }. Also accepts responsive values @breakpoint:  vertical@breakpoint--md’

| name | type   | default |
|:-----|:-------|:--------|
| wrap | String | none    |

Enables row wrapping. Change only if overriding `nowrap`. See CSS Flexbox flex-wrap

| name   | type   | default |
|:-------|:-------|:--------|
| nowrap | String | none    |

Disables row wrapping and enables overflow scrolling. See CSS Flexbox flex-wrap. Possible values: {  ‘nowrap’  }. Also accepts responsive values with @breakpoint: ‘nowrap@breakpoint--md’

| name | type   | default |
|:-----|:-------|:--------|
| type | String | none    |

Sets grid to use <ul> and <li> or <div>. Possible values: {  ‘normal’, ‘list’  }

### CdrCol

| name | type   | default |
|:-----|:-------|:--------|
| span | String | none    |

Number of columns (out of 12) the column will span. Functions like bootstrap col-* classes. Overrides widths set by ‘cols’ prop on CdrRow. Possible values: {  ‘1’  through   ‘12’  }. Also accepts responsive values with @breakpoint: ‘12 8@breakpoint--lg’

| name       | type   | default |
|:-----------|:-------|:--------|
| offsetLeft | String | none    |

Adds up to 12 columns of empty space to left of an individual column. Possible values: {  ‘1’  through  ‘12’  }. Also accepts responsive values with @breakpoint: ‘12 8@breakpoint--lg’

| name        | type   | default |
|:------------|:-------|:--------|
| offsetRight | String | none    |

Adds up to 12 columns of empty space to right of an individual column. Possible values: {  ‘1’  through  ‘12’  }. Also accepts responsive values with @breakpoint: ‘12 8@breakpoint--lg’

| name      | type   | default |
|:----------|:-------|:--------|
| alignSelf | String | none    |

Aligns individual column by overriding CdrRow alignment. See CSS Flexbox align-self. Possible values: {  ‘top’, ‘middle’, ‘bottom’, ‘stretch’  }. Also accepts responsive values with @breakpoint: ‘middle@breakpoint--sm’

| name  | type    | default |
|:------|:--------|:--------|
| isRow | Boolean | false   |

Makes the column act as a CdrRow. Setting this value to true will expose all props of CdrRow in addition to CdrCol props

## Slots

### CdrRow

| Name    |
|:--------|
| default |

Sets the innerHTML for cdr-row content. This includes text and html markup

### CdrCol

| Name    |
|:--------|
| default |

Sets the innerHTML for cdr-col content. This includes text and html markup

## Installation

Resources are available within the [CdrGrid package](https://www.npmjs.com/package/@rei/cdr-grid):

| **Name**        | **Type**            | **Description**                        |
|:----------------|:--------------------|:---------------------------------------|
| `@rei/cdr-grid` | Node module package | Import the component into your project |
| `cdr-grid.css`  | Style sheet         | Component specific styles              |

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the `CdrGrid` package using **npm** in your terminal:

_Terminal_

```terminal
npm i -s @rei/cdr-grid
```

### 2. Import Dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-grid/dist/cdr-grid.css";
```

### 3. Add component to a template

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

### Cdr-col content width

Immediate children of `cdr-col` are flexed due to a flex height display bug in some versions of Safari. This causes immediate children to be full-width and display stacked horizontally. Wrapping child elements in a single `<div>` element will fix these problems (if undesired).

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
