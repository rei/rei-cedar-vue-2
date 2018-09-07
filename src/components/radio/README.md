## Props

| Name       | Type   | Default |
|:-----------|:-------|:--------|
| labelClass | string | n/a     |

Adds CSS class to the label for custom styles

| Name       | Type   | Default |
|:-----------|:-------|:--------|
| inputClass | string | n/a     |

Adds CSS class to the input for custom styles

| Name         | Type   | Default |
|:-------------|:-------|:--------|
| contentClass | string | n/a     |

Adds CSS class to the slot wrapper for custom styles

| Name      | Type   | Default |
|:----------|:-------|:--------|
| name | string | n/a     |

Sets the name of the radio button. Required.

| Name  | Type                                                     | n/a   |
|:------|:---------------------------------------------------------|:------|
| value | string, number, boolean, object, array, symbol, function | false |

Sets the value of the radio button. Required

| Name     | Type   | n/a |
|:---------|:-------|:----|
| modifier | string | n/a |

Modifies the style variants for this component. Possible values: {  ‘compact’  |  'hide-figure'  }

## Slots

| Name    |
|:--------|
| default |

Sets the innerHTML for cdr-radio. This is the readable text for the <label> element

## Events

| Name   | Arguments |
|:-------|:-------|
| change | value |

$emit event fired on radio selection

## Installation

Resources are available within the [CdrRadio package](https://www.npmjs.com/package/@rei/cdr-radio):

- Component: `@rei/cdr-radio`
- Component styles: `cdr-radio.css`

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the `CdrRadio` package using `npm` in your terminal:

_Terminal_

```bash
npm i -s @rei/cdr-radio
```

### 2. Import Dependencies

_main.js_

```javascript
// import your required CSS.
import "@rei/cdr-radio/dist/cdr-radio.css";
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-radio
    v-model="model"
    name="ship-pref"
    value="ship"
  >
    Ship to address
  </cdr-radio>
  <cdr-radio
    v-model="model"
    name="ship-pref"
    value="pickup"
  >
    Pick up in store
  </cdr-radio>
</template>

<script>
import { CdrRadio} from '@rei/cdr-radio';
export default {
  ...
  components: {
     CdrRadio
  }
}
</script>
```

## Usage

The CdrRadio component requires `v-model` to track the value of selected radios.
Use the `hide-figure` modifier to hide the radio button itself, which leaves text label as the clickable element. Add appropriate custom styles to convey selected and unselected states.

### Modifiers

Following variants are available to the `cdr-radio` modifier attribute: 
| Value         | Description                               |
|:--------------|:------------------------------------------|
| 'compact'     | Sets the spacing for smaller screen sizes |
| 'hide-figure' | Hides the radio button icon               |

```vue
<template>
  <cdr-radio
    v-model="model"
    name="model"
    value="model"
    modifier="hide-figure"
    input-class="no-box"
    content-class="no-box__content"
  >
    Add to cart
  </cdr-radio>
</template>
<style>
.no-box:checked ~ .no-box__content {
   color: green;

   &::after {
     content: '(checked)';
   }
 }
</style>
```
