# CdrInput

## Properties

| Name                                                                                                                  | Type   | Default           |
|-----------------------------------------------------------------------------------------------------------------------|--------|-------------------|
| id                                                                                                                    | string | auto-generated    |
| Requires unique ID that is mapped to the label `for` attribute.  If this value is not set, it will be auto-generated. |        |                   |

<br />

| Name                                                                                                                                                                                                                                                  | Type          | Default |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------|
| type                                                                                                                                                                                                                                            | string | 'text'   |
| Supports HTML5 `<input>` types for text, email, number, password, search, and URL. For more information, view [WebAIM’s Future Web Accessibility: New input Types in HTML5](https://webaim.org/blog/future-web-accessibility-new-input-types-in-html5/). |               |         |

<br />

| Name                                                                                                                                                                                                                                      | Type          | Default |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|---------|
| label                                                                                                                                                                                                                                | string | N/A   |
| Sets the text value for the input label.  Required for a11y compliance.  Use `hideLabel` if the label display is not desired. |               |         |

<br />

| Name                                                         | Type  | Default |
|--------------------------------------------------------------|-------|---------|
| hideLabel                                                      | boolean | false      |
| Hides the label element and sets the input `aria-label` to the `label` value for a11y compliance. |       |         |

<br />

| Name                                           | Type  | Default |
|------------------------------------------------|-------|---------|
| rows                                       | number | null      |
| Sets the number of rows for the input field and converts input field to textarea if the rows value is greater than 1. |       |         |

<br />

| Name                                | Type   | Default |
|-------------------------------------|--------|---------|
| disabled                             | string | N/A     |
| Sets disabled input field and label styling and restricts user input. |        |         |

<br />

| Name                                | Type   | Default |
|-------------------------------------|--------|---------|
| required                             | boolean | false     |
| Sets the field to required and displays the text “Required” next to the input label. |        |         |

<br />

| Name                                | Type   | Default |
|-------------------------------------|--------|---------|
| size                             | string | 'medium'     |
| Sets the input field size. Possible values: { 'medium', 'large' } |        |         |


## Slots

| Name  | Notes |
|:-----|:-------|
| info | Location for information link or icon markup to the right above the input field. |
| pre-icon | Location for icon markup to the left inside the input field.  |
| post-icon | Location for icon markup to the right inside the input field. |
| helper-text | Location for helper or information text to the left below the input field. |

## Events

| Name | Arguments | Notes |
|:-----|:----------|:------|
| change | newValue, event | Event is emitted on input losing focus (onBlur) if the value has changed |

## Installation

Resources are available within the [CdrInput package:](https://www.npmjs.com/search?q=cdr-input)

- Component: `@rei/cdr-input`
- Component styles: `cdr-input.css`

<br />

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the CdrInput package using `npm` in your terminal:

_Terminal_

```bash
npm i -S @rei/cdr-input
```

### 2. Import dependencies

_main.js_

```javascript
// import your required CSS.
import "@rei/cdr-input/dist/cdr-input.css";
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  ...
     <cdr-input 
       v-model=”inputModel”
       label=”Input Label Text”
       placeholder=”Input Placeholder Text”
     />
  ...
</template>

<script>
import { CdrInput } from '@rei/cdr-input';
export default {
  ...
  components: {
     CdrInput  
  },
  data() {
    inputModel: ‘Default Value’
  }
}
</script>
```

## Usage

The CdrInput component requires `v-model` to bind the input value to your data model. See above template example with 'inputModel' variable.

Input inherits the `placeholder` attribute for the placeholder text. See above template example with placeholder=”Input Placeholder Text”.