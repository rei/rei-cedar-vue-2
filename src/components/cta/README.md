# CdrCTA

## Properties
| name | type | Default |
| :--- | :--- | :--- |
| ctaStyle | string | dark |
Set Call to Action color by changing ctaStyle to match different themes. Possible values: {brand, dark, light, sale}

| name | type | Default |
| :--- | :--- | :--- |
| fullWidth | boolean | false |
Set Call to Action width to 100%. Setting it to true will set the width to 100% of the parent container

| name | type | Default |
| :--- | :--- | :--- |
| compact | boolean | false |
Set the link using the page url

## Slots
| name                                            |
| :---------------------------------------------- |
| Default                                         |
This is for the readable text of cdr-cta.

## Modifiers

- elevated

## Installation

Resources are available with the [cdr-cta package](https://www.npmjs.com/package/@rei/cdr-cta):

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-cta`
- Component styles: `cdr-cta.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-cta` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-link
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css
import "@rei/cdr-cta/dist/cdr-cta.css";

// CTA uses a 
import "@rei/cdr-link/dist/cdr-icon.css";
```

### #3. Add component to a template

_local.vue_

```vue
<template>
...
  <cdr-cta href="rei.com"></cdr-cta>
...
</template>

<script>
import { CdrCta } from '@rei/cdr-cta';
export default {
  ...
  components: {
    CdrCta
  }
}
</script>
```

## Usage

This example code renders a full width `cdr-cta`, with the `elevated` modifier and the `sale` theme.

```vue
<template>
  <cdr-cta 
    href="https://rei.com" 
    :full-width="true" 
    cta-style="sale" 
    modifier"elevated"
  >
    See our new gear!
  </cdr-cta>
</template>
```

The `cdr-cta` component looks like a button; however it's actually an anchor:
- Do not use when a button is preferable such as triggering an action
- Do not assign the role of button
- For basic links, use [cdr-link](/components/link/)

## Accessibility

- Ensure cdr-cta can be accessed via the keyboard. Don't manipulate the default tab index
- Ensure assistive technologies can find all cdr-cta links on a page by:
  - Using labels that are descriptive. Do not use "Click here" or "start here"
  - Describing the cdr-cta link's destination when clicked
  - Always providing an href attribute. Empty href attributes are not considered true links.
  - Use hidden text that can be read by screen readers, if screen space for text is minimal
  - Use an inline element for hidden text using the cdr-sr-only class
  ```vue
  <cdr-cta>
    Start here <span class="cdr-sr-only">for help finding the proper sleeping bag</span>
  </cdr-cta>
  ```