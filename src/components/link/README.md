# CdrLink

For the most up-to-date information, see [REI Cedar documentation](https://rei.github.io/rei-cedar-docs/components/links/).

## Properties

| tag  | string | 'a'     |
|:-----|:-------|:--------|
| name | type   | default |

Sets valid HTML element tag. Possible values: { ‘a’ | ‘button’ }

| modifier                                                                                        | string | N/A     |
|:------------------------------------------------------------------------------------------------|:-------|:--------|
| name                                                                                            | type   | default |

Modifies the style variant for this component. Possible values: { ‘standalone’ }

| href | string | "#”     |
|:-----|:-------|:--------|
| name | type   | default |

Sets URL to cdr-link href property. The tag prop requires value of `<a>`

## Slots
| default                                         |
|:------------------------------------------------|
| name                                            |
| Sets the innerHTML for cdr-link. This includes text and html markup |

## Installation

Resources are available within the cdrLink package:

- Component: `@rei/cdr-link`
- Component styles: `cdr-link.css`

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the `cdrLink` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-link
```

### 2. Import dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-link/dist/cdr-link.css";

// If your link will display an icon ensure you also include the icon’s css file.
import "@rei/cdr-link/dist/cdr-icon.css";
```

### 3. Add component to a template

_local.vue_

```vue
<template>
...
    <cdr-link href="rei.com">Ten Essentials.</cdr-link>
...
</template>

<script>
import { CdrLink } from '@rei/cdr-link';
export default {
  ...
  components: {
     CdrLink  
  }
}
</script>
```

## Usage

By default, the component renders using an anchor element and requires an `href` attribute or tag to render a valid accessible link.

```vue
  <cdr-link href="http://rei.com">
    Visit REI
  </cdr-link>
```

Use the tag prop to render the link as a `<button>` element that presents a link appearance without an `href` attribute.

```vue
  <cdr-link tag="button">
    Show Details
  </cdr-link>
```

## Style Modifiers

To effect the visual presentation pass the following variants to the modifier attribute of the cdrLink component.

- `Standalone`: Include as an independent call to action to expand content, remove filters, or provide additional information
