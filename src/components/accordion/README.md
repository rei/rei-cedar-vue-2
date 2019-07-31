# CdrAccordion

For the most up-to-date information, see [REI Cedar documentation](https://rei.github.io/rei-cedar-docs/components/accordion/).

## Props


| name | type | default |
| :--- | :--- | :--- |
| compact | boolean | false |

Sets the compact style

| name | type | default |
| :--- | :--- | :--- |
| borderAligned | boolean | false |

Sets the border-aligned style

| name | type | default |
| :--- | :--- | :--- |
| id | string | n/a |

Unique id required. 

| name | type | Default |
| :--- | :--- | :--- |
| label | string | n/a |

Sets the readable text on the CdrAccordion button. Deprecated. Use `label` slot instead.

| name | type | Default |
| :--- | :--- | :--- |
| opened | boolean | false |

Toggle to open/close CdrAccordion. |

## Slots

| name                                            |
| :---------------------------------------------- |
| default                                         |

Slot for CdrAccordion content.

| name                                            |
| :---------------------------------------------- |
| label                                           |

Slot for readable text on button.

## Events

| name                                            |
| :---------------------------------------------- |
| accordion-toggle

$emit event fired on CdrAccordion toggle

## Usage

CdrAccordion emits an event when its button is clicked. Use an event listener to toggle the value of the opened prop to open/close the accordion. 

```vue
<template>
  <cdr-accordion
    id="item"
    :compact="true"
    :opened="opened"
    @accordion-toggle="opened = !opened"
  >
    <template name="label">
      Click me to show content!
    </template>
      This content is revealed the accordion is opened. 
  </cdr-accordion>
</template>

<script>
export default {
  ...
  data() {
    return {
      opened: false
    }
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