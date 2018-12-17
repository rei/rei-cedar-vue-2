# CdrText

For the most up-to-date information, see [headings](https://rei.github.io/rei-cedar-docs/components/headings/) and [paragraphs](https://rei.github.io/rei-cedar-docs/components/paragraphs/) in REI Cedar Docs.

## Properties

| tag  | string | 'p'     |
|:-----|:-------|:--------|
| name | type   | default |

Sets valid HTML element tag

| modifier                                                                                                                                                                                                                                        | string | N/A     |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|:--------|
| name                                                                                                                                                                                                                                            | type   | default |

Modifies the style variant for this component. Possible values: { ‘body’  | ‘display’ | ‘display-static’ | ‘heading-large’ | ‘heading-large-static’ | ‘heading-medium’ | ‘heading-medium-static’ | ‘heading-small’ | ‘heading-small-static’ | ‘subheading' }

## Slots

| default                                         |
|:------------------------------------------------|
| name                                            |
| Set the innerHTML for cdr-text. This includes text and html markup. |



## Installation

Resources are available within the [cdr-text package](https://www.npmjs.com/package/@rei/cdr-text):

# 
| Name          | Type                | Description                            |
|:--------------|:--------------------|:---------------------------------------|
| @rei/cdr-text | Node module package | Import the component into your project |


To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the `cdrText` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-text
```

### 2. Import dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-assets/dist/cdr-core.css";
import "@rei/cdr-assets/dist/cdr-fonts.css";
```

### 3. Add component to a template

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

## Heading Usage

The CdrText component allows for styling any html element with available text styles. Visual style and semantic meaning are managed independently by providing:

- Element to the `tag` prop
- Style to the `modifier` prop

This method decouples the semantic meaning of a heading level from the visual representation.

With this decoupling, you can style other markup to look like a heading that semantically isn’t a heading. For example, you can style an `<a>` tag in a multi-level navigation as a heading.

```vue
  <cdr-text
    tag="a"
    modifier="heading-small"
    href="http://www.rei.com">
      Heading-large linked
  </cdr-text>
```

This will result in the following HTML:

```html
  <cdr-text modifier="body">
   <a class=”heading-small” href=”http://www.rei.com”>Heading-small linked</a>
  </cdr-text>
```

CdrText modifiers can be nested within semantic headings. The below modifier for subheading is nested in the `<h2>` tag.

```vue
  <cdr-text
    tag="h2"
    modifier="heading-large">
    I'm a heading
    <cdr-text
      tag="span"
      modifier="subheading"
    >
      And I'm a visual subheading
    </cdr-text>
  </cdr-text>
```

This will result in the following HTML:

```html
  <h2>
    I’m a heading
      <span class=”subheading”>
          And I’m a visual subheading
      </span>
  </h2>
```

### Responsive headings

- Heading modifiers (without the “-static” ending) are responsive
- To disable resizing at breakpoints use static variants (ending with “-static”)

```vue
  <cdr-text
    tag="em"
    modifier="heading-medium-static">
    I should not change size at breakpoint
  </cdr-text>
```

## Heading levels

When using actual heading elements via the tag property, nest headings by their level:

- Most important heading has the level 1 (`<h1>`) and the least important heading level 6 (`<h6>`)
- Headings with an equal or higher level start a new section
- Headings with a lower level start new subsections that are part of the higher level section

Skipping heading levels can be confusing and should be avoided where possible:

- Avoid following an `<h2>` tag by an `<h4>` tag
- If an `<h4>` tag closes a previous section, follow with a `<h2>` tag to open the next section

### Exception for fixed page sections

In fixed sections of the page (e.g. sidebars), heading levels **should not** change depending on the heading levels in other areas of the page. Consistency across pages is required throughout the REI digital properties as explained on the [Navigation Design Principles Confluence page](https://confluence.rei.com/display/NAV/Navigation+Design+Principles).

## Paragraph Usage

By default the cdrText component renders as a paragraph, this default paragraph is intended for most standard use cases.

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

Define custom tags by applying a specific `cdr-text` style with modifiers to it.

```vue
  <cdr-text
    tag="span"
    modifier="body">
    This span now renders as a long form copy paragraph that displays inline.
  </cdr-text>
```
