## Properties

| summary | string | N/A |
|:-----|:-------|:--------|
| name | type   | Default |

Enables user to set appropriate HTML element tag. {a, button}


| credit | string | N/A   |
|:-----|:-------|:--------|
| name | type   | Default |

Sets the string content for attribution. Not required



- Component: `@rei/cdr-caption`
- Component styles: `cdr-caption.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-caption` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-text
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-caption/dist/cdr-caption.css";

```

### #3. Add component to a template

_local.vue_

```vue
<template>
...
    <cdr-caption summary="Lorem ipsum dolor sit amet elit." credit="Lorem ipsum dolor sit"/>
...
</template>

<script>
import { CdrCaption } from '@rei/cdr-caption';
export default {
  ...
  components: {
     CdrCaption  
  }
}
</script>
```

## Usage

The CdrCaption component is developed to work within a composition with other components; however composition-type components have not been developed yet.

The below example demonstrates how to extend this component for use within a figure.

```vue
    <figure>
    <cdr-img src="http://via.placeholder.com/350x150" />
    <figcaption>
        <cdr-caption
        summary="Testing and validating the final fit of the 2018/2019 Tecnica ski boot collection during the September 2017 focus group in Park City, Utah"
        credit="Image Credit: Blizzard Tecnica”
        />
    </figcaption>
    </figure>
```


## Accessibility

To ensure that usage of this component complies with accessibility guidelines, do the following:

- Use captions sparingly and only with accompanied media
- Do not use caption text styles for body copy; it is smaller than the recommended size for text readability

This component has compliance with WCAG guidelines by:

- Using text color with a Level AA contrast ratio of 4.5:1 contrast between the text color and the background but only when displayed on light backgrounds