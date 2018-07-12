## Properties

| tag  | string | "a”     |
|:-----|:-------|:--------|
| name | type   | Default |

Enables user to set appropriate HTML element tag. {a, button}

| modifier                                                                                        | string | N/A     |
|:------------------------------------------------------------------------------------------------|:-------|:--------|
| name                                                                                            | type   | Default |

Modifier allows the user to pass a style variant to this component. Possible values: standalone

| href | string | "#”     |
|:-----|:-------|:--------|
| name | type   | Default |

Requires tag to be set to “a”. Sets URL to cdr-link href property

## Slots
| default                                         |
|:------------------------------------------------|
| name                                            |
| innerHTML on the inside of the anchor component |



- Component: `@rei/cdr-link`
- Component styles: `cdr-link.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-link` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-link
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-link/dist/cdr-link.css";

// If your link will display an icon ensure you also include the icon’s css file.
import "@rei/cdr-link/dist/cdr-icon.css";
```

### #3. Add component to a template

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

By default, the component renders using an anchor element and requires an href attribute or tag to render a valid accessible link.

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

To effect the visual presentation pass the following variants to the modifier attribute of the cdr-link component.

- **Standalone**: Include as an independent call to action to expand content, remove filters, or provide additional information.

## Accessibility

To ensure that usage of this component complies with accessibility guidelines, do the following:

- Always use a `<button>` element via the `tag` prop when there is no href attribute that can be applied to the link. Examples are:
  - Toggling a display to full screen
  - Opening a modal window
  - Triggering a popup menu
  - Playing media content
- Always use the default `<a>` element for a link when the link will navigate the user to the location specified by the href attribute
- Ensure links can be accessed via the keyboard. Don’t manipulate the default tab index
- Ensure assistive technology can find all links on a page by:
  - Using link labels that are descriptive. Do not use “click here” or “start here”
  - Describing the link’s destination when clicked
  - Always providing a href attribute. Empty href attributes are not considered true links

This component has compliance with following WebAIM’s accessibility guidelines:

- [WCAG SC 1.4.3: Contrast (Minimum)](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast): Cedar Design System text color uses a Level AA contrast ratio of 4.5:1 contrast between the text color and the background, only when using the text color pairings