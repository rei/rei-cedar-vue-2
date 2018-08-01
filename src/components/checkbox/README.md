## Props

| Name | Type   | Default |
|:-----|:-------|:--------|
| labelClass | string | n/a |

Class that is added to the label for custom styles.

| Name | Type   | Default |
|:-----|:-------|:--------|
| inputClass | string | n/a   |

Class that is added to the input for custom styles.

| Name | Type   | Default |
|:-----|:-------|:--------|
| contentClass | string | n/a   |

Class that is added to the slot wrapper for custom styles.

| Name | Type   | Default |
|:-----|:-------|:--------|
| indeterminate | boolean | false |

Show checkbox in indeterminate state. This is a visual-only state and there is no logic for when to show it.

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

Allows style variants to be defined


## Slots

| Name    |
|:--------|
| default |

innerHTML inside of checkbox component. This is the readable text inside the `<label>` element.

## Events

| Name   |
|:-------|
| change |

$emit event fired on check/uncheck

## Modifiers

Following are modifiers for `cdrCheckbox` component:

- compact
- hide-figure


## Installation

Resources are available within the [cdr-checkbox package:](https://www.npmjs.com/search?q=cdr-checkbox)


- Component: `@rei/cdr-checkbox`
- Component styles: `cdr-checkbox.css`

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the `cdr-checkbox` package using `npm` in your terminal:

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

Cdr-checkbox requires  `v-model`  to track  `:checked`  values.

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

## Accessibility

- The input is wrapped in a label element, so label is automatically associated as per these guidelines [WCAG 2.0,  3.3.2 Labels and Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)
- Custom checkboxes maintain accessibility requirements. The checkbox icon is only visually hidden and replaced with custom style

To ensure that usage of this component complies with accessibility guidelines:

- Each checkbox must be focusable and keyboard accessible:
  - When the checkbox has focus, the `Space` key changes the selection
  - `Tab` key moves to next element in list
- Fieldsets (or grouped checkboxes) should be:
  - Used when associating group of checkboxes
  - Identified or described as a group using a `<legend>` tag
- Avoid nested fieldsets
- Single checkboxes:
  - May be interchangeable with a toggle
  - Write labels to be self-explanatory

For more information, review techniques and failures for:

- [WCAG 2.0,  1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [WCAG 2.0,  3.3.2 Labels and Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)