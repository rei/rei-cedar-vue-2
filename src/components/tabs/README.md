## Props

| Name | Type   | Default |
|:-----|:-------|:--------|
| name | string | n/a     |

Sets code reference and tab display name. Required and must be unique for each tab

| Name     | Type   | n/a |
|:---------|:-------|:----|
| modifier | string | n/a |

Modifies the style variants for this component. Possible values: { 'compact' | 'full-width' | 'no-border' }

## Installation

Resources are available within the [cdr-tabs package](https://www.npmjs.com/package/@rei/cdr-tabs):

- Component: `@rei/cdr-tabs`
- Component styles: `cdr-tabs.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-tabs` package using `npm` in your terminal:

_Terminal_

```terminal
npm i -s @rei/cdr-tabs
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-tabs/dist/cdr-tabs.css";
```

### #3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-tabs>
    <cdr-tab name=”tab1”>TAB1 CONTENT GOES HERE</cdr-tab>
    <cdr-tab name=”tab2”>TAB2 CONTENT GOES HERE</cdr-tab>
    <cdr-tab name=”tab3”>TAB3 CONTENT GOES HERE</cdr-tab>
  </cdr-tabs>
</template>

<script>
import { CdrTabs, CdrTab } from '@rei/cdr-tabs’;
export default {
  ...
  components: {
     CdrTabs,
     CdrTab
  },
}
</script>

```

## Usage

The `cdr-tab name` property sets the tab display value and is used for reference

```vue
<cdr-tabs>
  <cdr-tab name="tab1">Tab 1 Content</cdr-tab>
</cdr-tabs>
```

## Modifiers

Set the visual presentation by passing the following variants to the modifier attribute of the CdrTabs component.

| Value        | Description   |
|:-------------|:-------|
| `compact`    | Sets the tabs styling for smaller screen sizes |
| `full-width` | Sets the tab header to display evenly across the entire width instead of left justified |
| `no-border`  | Removes the bottom border of the tabs header |
