# CdrCheckbox

For the most up-to-date information, see [REI Cedar documentation](https://rei.github.io/rei-cedar-docs/components/checkboxes/).

## Props

| Name | Type   | Default |
|:-----|:-------|:--------|
| labelClass | string | n/a |

Add CSS class to the label for custom styles.

| Name | Type   | Default |
|:-----|:-------|:--------|
| inputClass | string | n/a   |

Add CSS class to the input for custom styles.

| Name | Type   | Default |
|:-----|:-------|:--------|
| contentClass | string | n/a   |

Add CSS class to the slot wrapper for custom styles.

| Name | Type   | Default |
|:-----|:-------|:--------|
| indeterminate | boolean | false |

Shows checkbox in indeterminate state. This is a visual-only state with no logic for when to show it.

| Name | Type   | Default |
|:-----|:-------|:--------|
| trueValue  | string, number, boolean, object, array, symbol, function | true |

The value when checked.

| Name | Type   | Default |
|:-----|:-------|:--------|
| falseValue | string, number, boolean, object, array, symbol, function | false |

The value when unchecked.

| Name | Type   | Default |
|:-----|:-------|:--------|
| customValue | string, number, boolean, object, array, symbol, function | false |

The value when used in a checkbox group. Replaces `trueValue` and `falseValue`.

| Name     | Type   | n/a |
|:---------|:-------|:----|
| modifier | string | n/a |

Modifies the style variant for this component.  Possible values: { ‘compact’  |  ‘hide-figure’ }


## Slots

| Name    |
|:--------|
| default |

Sets the innerHTML for cdr-checkbox. This is the readable text for the <label> element

## Events

| Name   | Arguments   |
|:-------|:-------|
| change | newValue, event |

$emit event fired on check/uncheck

## Installation

Resources are available within the [CdrCheckbox package:](https://www.npmjs.com/search?q=cdr-checkbox)

- Component: `@rei/cdr-checkbox`
- Component styles: `cdr-checkbox.css`

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the `CdrCheckbox` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-checkbox
```

### 2. Import dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-link/dist/cdr-checkbox.css";
```

### 3. Add component to a template

In this example we’ll create a medium-sized primary button, which is the default.

_local.vue_

```vue
<template>
  <cdr-checkbox
    v-model="model"
  >
    True
  </cdr-checkbox>
</template>

<script>
import { CdrCheckbox } from '@rei/cdr-checkbox;
export default {
  ...
  components: {
     CdrCheckbox,
  }
}
</script>
```

## Usage

`CdrCheckbox` requires  `v-model`  to track  `:checked`  values.

This example uses  `true-value`  and  `false-value`  props to change what’s saved to the model.

```vue
<template>
  <cdr-checkbox
    v-model="model"
    true-value="checked"
    false-value="unchecked"
  >
    Option 1
  </cdr-checkbox>
</template>
```

Use  `custom-value`  with a shared model to create a checkbox group that will track multiple checkbox values.

```vue
<template>
  <cdr-checkbox
    v-model="groupModel"
    :custom-value="{ value: ‘D’ }"
  >
    Option 1
  </cdr-checkbox>
  <cdr-checkbox
    v-model="groupModel"
    :custom-value="[ 9, 10 ]"
  >
    Option 2
  </cdr-checkbox>
</template>
```

If both values are checked the model would be `[  { value: ‘D’ }, [ 9, 10 ]  ]`. Unchecking either checkbox would remove its value from the model array.

Default checkbox to checked/unchecked state by setting the model in Javascript.

```vue
<template>
  <cdr-checkbox
    v-model="groupModel"
    :custom-value="{ value: ‘D’ }"
  >
    Option 1
  </cdr-checkbox>
  ...
</template>
<script>
  ...
  data() {
    return {
      groupModel: [ { value: ‘D’ } ],
    };
  },
}
</script>
```

Set the indeterminate prop to true to generate an indeterminate checkbox, which looks different than the default. This is a visual styling only; it does not include any of the functional aspects of an indeterminate checkbox.

```vue
<template>
  <cdr-checkbox
    v-model="groupModel"
    :indeterminate="true"
  >
    Option 1
  </cdr-checkbox>
  ...
</template>
```

### Modifiers

Following variants are available to the `cdr-checkbox` modifier attribute: 
| Value         | Description                               |
|:--------------|:------------------------------------------|
| 'compact'     | Sets the spacing for smaller screen sizes |
| 'hide-figure' | Hides the checkbox icon                   |



Use the `hide-figure` modifier to hide the checkbox itself, which leaves the text label as the clickable element. Add appropriate custom styles to convey selected and unselected states.

```vue
<template>
  <cdr-checkbox
    v-model="model"
    name="model"
    value="model"
    modifier="hide-figure"
    input-class="no-box"
    content-class="no-box__content"
  >
    Add to cart
  </cdr-checkbox>
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
