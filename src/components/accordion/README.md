# CdrAccordion

Accordions are built from two components, CdrAccordion and CdrAccordionItem, which are meant to be used together.

## Props

### CdrAccordion

| name | type | default |
| :--- | :--- | :--- |
| compact | boolean | false |

Sets the compact style of CdrAccordionItem child components

| name | type | default |
| :--- | :--- | :--- |
| borderAligned | boolean | false |

Sets the border-aligned style of CdrAccordionItem child components

| name | type | default |
| :--- | :--- | :--- |
| showAll | boolean | false |

Sets all child CdrAccordionItem components to display open by default

### CdrAccordionItem

| name | type | default |
| :--- | :--- | :--- |
| id | string | n/a |

Requires unique ID for each component reference

| name | type | Default |
| :--- | :--- | :--- |
| label | string | n/a |

Sets the readable text on the CdrAccordionItem button or trigger. Required |

| name | type | Default |
| :--- | :--- | :--- |
| show | boolean | false |

Sets a single CdrAccordionItem to display open by default. The 'showAll' prop takes precedence, when true |

## Slots

### CdrAccorion
| name                                            |
| :---------------------------------------------- |
| default                                         |

Slot for CdrAccordionItem(s)

### CdrAccordionItem
| name                                            |
| :---------------------------------------------- |
| default                                         |

Slot for CdrAccordionItem content

## Events

### CdrAccordionItem
| name                                            |
| :---------------------------------------------- |
| accordion-item-toggle

$emit event fired on CdrAccordionItem toggle

## Installation

Resources are available within the [CdrAccordion package](https://www.npmjs.com/package/@rei/cdr-accordion);

<cdr-doc-api type="installation" />

- Component: `@rei/cdr-accordion`
- Component styles: `cdr-accordion.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the CdrAccordion package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-accordion
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css
import "@rei/cdr-accordion/dist/cdr-accordion.css";
```

### #3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-accordion>
    <cdr-accordion-item
      id="default-example"
      label="This is the label text"
    >
      This is the accordion content.
    </cdr-accordion-item>
  </cdr-accordion>
</template>

<script>
  import { CdrAccordion, CdrAccordionItem } from "@rei/cdr-accordion";

  export default {
    ...
    components: {
      CdrAccordion,
      CdrAccordionItem
    }
  }
</script>
```

## Usage

### Style

Use `cdr-accordion` to pass styling options to `cdr-accordion-item`.

```vue
<template>
  <cdr-accordion
    :compact="true"
  >
    <cdr-accordion-item
      id="item-1"
      label="Label text"
    >
      Accordion content here
    </cdr-accordion-item>
  </cdr-accordion>
</template>
```

### Behavior

Set `show-all` to `true` on `cdr-accordion`, and each `cdr-accordion-item` will display in an open state.

```vue
<template>
  <cdr-accordion
    :show-all="true"
  >
    <cdr-accordion-item
      id="item-1"
      label="Label text"
    >
      Accordion content here
    ...
```

The CdrAccordionItem component can also be controlled individually. If `show-all` is `false` at the CdrAccordion level, set `show` to `true` to display an individual accordion item in an open state. Note that CdrAccordion settings will take precedence over CdrAccordionItem settings.

```vue
<template>
  <cdr-accordion>
    <cdr-accordion-item
      id="item-1"
      label="Label text"
      :show="true"
    >
      Accordion content here
    ...
```

Any options set at the `cdr-accordion` level can be set on any parent component of `cdr-accordion-item` by using Vue's provide/inject functionality. This is useful, for instance, if `cdr-accordion-item` ever needs to be used as a part of another group component.


```vue
<template>
  ...
  <cdr-accordion-item
    id="item-1"
    label="Label text"
  >
    Accordion content here
  </cdr-accordion-item>
  ...
</template>

<script>
  export default {
    ...
    provide() {
      return {
        borderAligned: true,
        showAll: true
      };
    }
  }
</script>
```

## Accessibility

To ensure that usage of this component complies with accessability guidelines:
  - Provide a descriptive label for accordion header

This component has compliance with WCAG accessibility guidelines:
  - Providing keyboard interactions to:
    - Expand and collapse accordion headers
    - Navigate and reverse navigate through the accordion headers
  - Generate ARIA tags for accessibility, speciically `aria-controls`, `aria-expanded`, and `aria-hidden`