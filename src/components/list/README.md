# CdrList

For the most up-to-date information, see [REI Cedar documentation](https://rei.github.io/rei-cedar-docs/components/lists/).

## Properties

| name                                                                              | type   | default |
| :-------------------------------------------------------------------------------- | :----- | :------ |
| Tag                                                                               | string | 'ul'    |
| Sets valid HTML element tag for lists. Possible values: { ‘ul’ | ‘ol’ }|

| name                                                                                                                     | type   | default |
| :----------------------------------------------------------------------------------------------------------------------- | :----- | :------ |
| modifier                                                                                                                 | string | N/A     |
| Modifies the style variant for this component. Possible values: { ‘ordered’ | ‘unordered’ | ‘compact’ | ‘inline’ } |

## Slots

| name                                            |
| :---------------------------------------------- |
| default                                         |
| Sets the innerHTML for cdr-list. This includes text and html markup |

## Installation

Resources are available within the [CdrList package](https://www.npmjs.com/package/@rei/cdr-list):

- Component: `@rei/cdr-list`
- Component styles: `cdr-list.css`

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the `CdrList` package using `npm` in your terminal:

_Terminal_

```terminal
npm i -s @rei/cdr-list
```

### 2. Import dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-list/dist/cdr-list.css";
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-list>
    <li> item one </li>
    <li> item two </li>
  </cdr-list>
</template>

<script>
import { CdrList } from "@rei/cdr-list";
export default {
  components: {
    CdrList
  }
};
</script>
```

## Usage

Visual style and semantic meaning are managed independently by providing:

- Element to the `tag` prop
- Style to the `modifier` prop

By default the `CdrList` component renders as an unordered and undecorated "bare" list. To use an ordered list pass `<ol>` to the tag property.

```html
<cdr-list tag="ol">
  <li> item one </li>
  <li> item two </li>
</cdr-list>
```

The `CdrList` component has decoupled the semantic tags `<ul>` and `<ol>` from visual presentation. It is possible to render a semantic ordered list `<ol>` as a visually non styled or bulleted list using the `cdr-list` modifiers. With this decoupling, individual list items can contain a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists. Ensure that content is structured and follows design guidelines.

### Tag variants

Following are different types of lists:

- Unordered lists:
  - Used when the order of the items is not relevant
  - Consists of one `<ul>` element and multiple list item `<li>` elements
- Ordered lists:
  - Used for sequential information
  - Consists of one `<ol>` element and multiple list item `<li>` elements
- Nested lists:
  - Every `cdr-list` can be nested into another list
  - Assistive technology can easily inform users about the number of steps

```vue
<cdr-list>
   <li> Unordered list item text
     <cdr-list tag="ol">
       <li>Ordered list item text</li>
     </cdr-list>
   </li>
 </cdr-list>
```

- Bare or unstyled lists:
  - Can contain a variety of HTML elements, including paragraphs, headings, form elements, and other (nested) lists

### Modifier options

Note that the tag itself does not determine display, a modifier must be added for list styles. Add one of the following variants to the `modifier` attribute of the `cdr-list` tag to change the visual presentation:

| **Name**  | **Description**                                                                                                                                                                            | **Example**                               |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| unordered | The unordered modifier adds a bullet decorator to child list items and a ‘en-dash’ decorator to grandchild list items. This variant can be used on both `<ul>` or `<ol>` list types.       | `<cdr-list modifier="unordered" >`        |
| ordered   | The ordered modifier adds a numeric decorator to child list items and a ‘en-dash’ decorator to grandchild list items. This variant can be used on both `<ul>` or `<ol>` list types.        | `<cdr-list tag="ol" modifier="ordered" >` |
| compact   | The compact modifier reduces the vertical space between list items for non-inline list variants. For inline variants the compact modifier reduces the horizontal space between list items. | `<cdr-list modifier="compact">`           |
| inline    | The inline modifier is intended for bare or unordered list variants. In ether case this can be combined with compact to adjust the spacing of inline list variants.                        | `<cdr-list modifier=" inline">`           |

