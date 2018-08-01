## Props

| Name       | Type   | Default |
|:-----------|:-------|:--------|
| labelClass | string | n/a     |

Class that is added to the label for custom styles.

| Name       | Type   | Default |
|:-----------|:-------|:--------|
| inputClass | string | n/a     |

Class that is added to the input for custom styles.

| Name         | Type   | Default |
|:-------------|:-------|:--------|
| contentClass | string | n/a     |

Class that is added to the slot wrapper for custom styles.

| Name      | Type   | Default |
|:----------|:-------|:--------|
| trueValue | string | n/a     |

Sets the name of the radio button. Required.

| Name  | Type                                                     | n/a   |
|:------|:---------------------------------------------------------|:------|
| value | string, number, boolean, object, array, symbol, function | false |

Sets the value of the radio button. Required

| Name     | Type   | n/a |
|:---------|:-------|:----|
| modifier | string | n/a |

Allows style variants to be defined

## Slots

| Name    |
|:--------|
| default |

innerHTML inside of radio button component. This is the readable text inside the `<label>` element

## Events

| Name   |
|:-------|
| change |

$emit event fired on radio selection

## Modifiers

Following are modifiers for `cdrRadio` component:

- compact
- hide-figure


## Installation

Resources are available within the [cdr-radio package](https://www.npmjs.com/package/@rei/cdr-radio):

- Component: `@rei/cdr-radio`
- Component styles: `cdr-radio.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-radio` package using `npm` in your terminal:

_Terminal_

```terminal
npm i -s @rei/cdr-radio
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-radio/dist/cdr-radio.css";
```

### #3. Add component to a template

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

Cdr-radio requires `v-model` to track the value of selected radios.
Use the `hide-figure` modifier to hide the radio button itself, which leaves text label as the clickable element. Add appropriate custom styles to convey selected and unselected states.

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
## Accessibility

- The input is wrapped in a label element, so label is automatically associated as per these guidelines [WCAG 2.0, 3.3.2 Labels and Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)
To ensure that usage of this component complies with accessibility guidelines, do the following:
- Each radio button must be focusable and keyboard accessible:
  - When radio button has focus, the `space` key changes the selection
  - `tab` key moves to next element in list
- Fieldsets should be:
  - Used when associating group of radio buttons
  - Identified or described as a group using a `<legend>` tag
  - Avoid nested fieldsets

For more information, review techniques and failures for:
  - [WCAG 2.0,  1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
  - [WCAG 2.0,  3.3.2 Labels and Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)