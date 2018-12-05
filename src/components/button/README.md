# CdrButton

For the most up-to-date information, see [REI Cedar documentation](https://rei.github.io/rei-cedar-docs/components/buttons/).

## Properties

| Name  | Type | Default     |
|:-----|:-------|:--------|
| tag | string   | button |
| Renders CdrButton as a &lt;button&gt; or &lt;a&gt; element. When using the value of &lt;a&gt;, this element renders as an achor link. Possible values: { 'button' | 'a' } |

| Name  | Type | Default     |
|:-----|:-------|:--------|
| type| string   | button |
| Sets the button type. Possible values: { 'button' | 'submit' | 'reset' } |

| Name  | Type | Default     |
|:-----|:-------|:--------|
| onClick | function   | return null |
| Adds custom click actions. |

| Name  | Type | Default     |
|:-----|:-------|:--------|
| fullWidth | boolean | false |
| Sets button width to 100%. Setting it to true will set the button width to 100% of the parent container. Use the full-width prop with the size prop to control top and bottom padding. |

| Name  | Type | Default     |
|:-----|:-------|:--------|
| size | string | medium |
| Sets the button size; values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }

| Name  | Type | Default     |
|:-----|:-------|:--------|
| iconOnly | boolean | false |
| Renders an icon-only button. When this value is true, it will override the size and responsiveSize props |

| Name  | Type | Default     |
|:-----|:-------|:--------|
| onDark | boolean | false |
| Renders an icon-only button with a light fill color for use on dark backgrounds. The 'iconOnly' prop must be true. |

| Name  | Type | Default     |
|:-----|:-------|:--------|
| modifier | string | n/a |
| Modifies the style variant for this component. Possible values: { 'secondary' } |

## Slots

All CdrButton components have two slots.

| Name  | Notes |
|:-----|:-------|
| Default | Slot for button text. Leave empty if icon-only |
| icon | Slot for the icon |

## Installation

Resources are available within the [CdrButton package:](https://www.npmjs.com/search?q=cdr-button)

| Name  | Type | Description     |
|:-----|:-------|:--------|
| `@rei/cdr-button` | Node module package | Import the component into your project |
| `cdr-button.css` | Style sheet | Component specific styles |

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the CdrButton package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-button
```

### 2. Import dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-link/dist/cdr-button.css";
```

### 3. Add component to a template

In this example we’ll create a medium-sized primary button, which is the default.

_local.vue_

```vue
<template>
  <cdr-button
    type="button"
  >
    Add to cart
  </cdr-button>
</template>

<script>
import { CdrButton } from '@rei/cdr-button';
export default {
  ...
  components: {
     CdrButton  
  }
}
</script>
```

## Usage

### Size prop

The below example uses the `size` prop to set default and responsive size. This button’s size is small, but it will become a large button at the `xs` and `sm` breakpoints.

```vue
<template>
  <cdr-button
    size="small large@xs large@sm"
  >
    Add to cart
  </cdr-button>
</template>
```

### Modifiers

Following variants are available to the `cdr-button` modifier attribute:

| Value       | Description                                      |
|:----------- |:------------------------------------------------ |
| `secondary` | Sets the secondary style for the button          |

### Click Actions

Use the `on-click` prop to attach custom actions and event handling.

```vue
<template>
  <cdr-button
    :on-click="greet"
  >
    Greet
  </cdr-button>
</template>

<script>
export default {
  ...
  methods: {
    greet() {
      console.log(‘Hello there’);
    }
  }
}
</script>
```

## Composing with icons

CdrButton can be used with the icon component from the CdrIcon package.

### Text and Icon

To scale Cedar icons appropriately, include the `cdr-button__icon` class with any icon component. The `size` prop scales both the icon and button.

In the below example, a _Download_ button is rendered as a button with icon and text using `cdr-icon` and the icon sprite.

```vue
<template>
  <cdr-button>
    <cdr-icon
      slot="icon"
      class="cdr-button__icon"
      use="#download"
    />
    Download
  </cdr-button>
</template>

<script>
import { CdrButton } from '@rei/cdr-button';
import { CdrIcon } from '@rei/cdr-icon';
export default {
  ...
  components: {
     CdrButton,
     CdrIcon,  
  }
}
</script>
```

### Icon Only

Use the following props to modify `cdr-button`:

- Default slot must be empty. If text is present in default slot, the text will render  
- `size` prop is disable when `icon-only` prop is true
- For the SVG files:
  - If the `fill` color is dark, assign true to the `on-dark` prop
  - `on-dark` prop only works if `icon-only` prop is also true
- Add `aria-label` text to describe the button’s action when clicked or tapped

```vue
<template>
  <cdr-button
    :icon-only="true"
    :on-dark="true"
    aria-label="Complete this step"
  >
    <icon-check-lg
      slot="icon"
      class="cdr-button__icon" />
  </cdr-button>
</template>
```

### CdrCloseButton & CdrPlayButton

The CdrButton package includes two specific icon-only variants. CdrCloseButton and CdrPlayButton include their respective icons and `aria-label` text for accessibility.

```vue
<template>
  <cdr-close-button />
</template>

<script>
import { CdrCloseButton } from '@rei/cdr-button';

export default {
  ...
  components: {
     CdrCloseButton  
  }
}
</script>
```

## Accessibility

- Cdr-button renders as a button or anchor:
  - Select the semantically correct element, which will ensure that screen readers have correct instructions for how to interact with the component
  - Use cdr-link to make a button that looks like a link
  - Do not use div or input elements
- Do not add role=”button” to cdr-button
- Icon-only buttons require aria-label text since only the icon is visible