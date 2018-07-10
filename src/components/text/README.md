## Installation

Resources are available within the [cdr-text package](https://www.npmjs.com/package/@rei/cdr-text):

- Component: `@rei/cdr-text`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-text` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-text
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-assets/dist/cdr-core.css";
import "@rei/cdr-assets/dist/cdr-fonts.css";
```

### #3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-text
    modifier="body"
  >
    For long-form content like expert advice articles or co-op journal entries.
  </cdr-text>
</template>

<script>
import { CdrText } from '@rei/cdr-text';
export default {
  ...
  components: {
     CdrText  
  }
}
</script>
```

## Usage

The **cdrText** component allows for styling any html element with available text styles. Visual style and semantic meaning are managed independently by providing: 

* Element to the `tag` prop 
* Style to the `modifier` prop

By default the **cdrText** component renders as a paragraph, this default paragraph is intended for most standard use cases.

```vue
  <cdr-text>
    This is a standard paragraph, intended for non long form copy usage.
  </cdr-text>
```

When rendering long form copy add the `body` modifier.

```vue
  <cdr-text modifier="body">
    This paragraph is intended for long form copy usage.  
  </cdr-text>
```

Define custom tags by applying a specific **cdr-text** style with modifiers to it.

```vue
  <cdr-text
    tag="span"
    modifier="body">
    This span now renders as a long form copy paragraph that displays inline.
  </cdr-text>
```
