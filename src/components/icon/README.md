# CdrIcon

For the most up-to-date information, see [REI Cedar documentation](https://rei.github.io/rei-cedar-docs/components/icon/)

## Props

| name                                                                   | type   | default |
|:-----------------------------------------------------------------------|:-------|:--------|
| use                                                                    | string | none    |
| Sets the href attribute for use with SVG symbol sprite (CdrIconSprite). |        |         |


| name                                                                   | type   | default |
|:-----------------------------------------------------------------------|:-------|:--------|
| size                                                                    | string | medium    |
| Modifies the icon size; values can target responsive breakpoints. Breakpoint values are: xs, sm, md, and lg. Examples: { 'small' | 'medium' | 'large' | 'large@sm' }  |        |         |


| name                                                                      | type   | default            |
|:--------------------------------------------------------------------------|:-------|:-------------------|
| modifier                                                                  | string | N/A                |
| Modifies the style variant fot this component. Possible values: { 'inherit-color' }                   |        |                    |

## Slots

CdrIcon and all Icon* (IconArrowUp, IconCalendar, etc.) components have a default slot.

| name    | notes                                                                                         |
|:--------|:----------------------------------------------------------------------------------------------|
| default | Sets the innerHTML of SVG element. This includes &lt;title&gt;, &lt;desc&gt;, or any other valid SVG xml. |

## Installation

Resources are available within the [CdrIcon package](https://www.npmjs.com/package/@rei/cdr-icon):

- Component: `@rei/cdr-accordion`
- Component styles: `cdr-accordion.css`

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the CdrIcon package using `npm` in your terminal:

_Terminal_

```bash
npm i -S @rei/cdr-icon
```

### 2. Import dependencies

_main.js_

```bash
// import your required css.
import '@rei/cdr-icon/dist/cdr-icon.css';
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  ...
    <icon-arrow-down />
  ...
</template>

<script>
import { IconArrowDown } from '@rei/cdr-icon';
export default {
  ...
  components: {
     IconArrowDown
  }
}
</script>
```

## Usage

The **CdrIcon** package contains many different components:

1. **CdrIcon**  -- This is a basic SVG wrapper. This component allows for using Non-Cedar SVGs. Use this component in conjunction with the CdrIconSprite package
2. **CdrIconSprite** -- A symbol definition sprite with all Cedar icons
3. Individual icons -- For available icons, view [Cedar Icon Library](https://rei.github.io/rei-cedar-docs/components/icon/?active-tab=design-guidelines&active-link=icon-library) on Design Guidelines tab

There are 3 different options to display SVG icons on your page using the `CdrIcon` package.

### 1. SVG Sprite

#### Option A: Inline symbol sprite

Requires:
- Icon sprite inline on page

The sprite needs to be available on any page where the icons are being used, so add the sprite component at the base layout or index:

_App.vue (base template)_

```vue
<template>
  <div id="main">
    <cdr-icon-sprite />

    <router-view></router-view> // rest of app
  </div>
</template>

<script>
import { CdrIconSprite } from '@rei/cdr-icon';

...
components: {
  CdrIconSprite
}
...
</script>
```

_Child.vue (any descendant component of App.vue above)_

```vue
<template>
  <div>
    <cdr-icon use="#caret-right" />
  </div>
</template>

<script>
import { CdrIcon } from '@rei/cdr-icon';

...
components: {
  CdrIcon
}
...
</script>
```

#### Option B: External symbol defs

Requires:
- `@rei/cdr-icon/sprite/cdr-icon-sprite.svg`
- A webpack loader to handle the asset. This example assumes the file-loader package
- A polyfill for external SVG resource. Possible packages are: svgxuse or svg4everybody

Within an individual component (there may be a better way to scale this if the code calls it in many places):

```vue
<template>
  ...
  <cdr-icon :use="`${iconUrl}#caret-right`" />
  ...
</template>

<script>
// import the sprite so file-loader will do its magic
@import iconUrl from '@rei/cdr-assets/dist/cdr-icons.svg`;

export default {
  ...
  data() {
    return {
      iconUrl
    };
  }
}

</script>
```

### 2. Individual icon components

This may be the easiest way to use an icon on a page however use this method carefully. This method will increase HTML file size and slow down performance if using a lot of icons.

Requires:
- Install  `@rei/cdr-icon`

```vue
<template>
  ...
    <icon-caret-right />
    <icon-clock />
  ...
</template>

<script>
import { IconCaretRight, IconClock } from '@rei/cdr-icon';

...
  components: {
    IconCaretRight,
    IconClock
  }
...

</script>
```

### 3. Non-Cedar SVG

The CdrIcon package is simply an SVG with default attributes set for accessibility and styling.

- Any SVG markup can be used
- Any attributes added will override the defaults
- This method will increase HTML file size and slow down performance if using a lot of icons.

Requires:
- None

Use any valid SVG markup in the CdrIcon slot.

```vue
<template>
  ...
  <cdr-icon viewBox="0 0 30 30">
    <title>My icon</title>
    <path d="M12 12c1.9329966 0 3.5-1.5670034 3.5-3.5C15.5 6.56700338 13.9329966 5 12 5S8.5 6.56700338 8.5 8.5c0 1.9329966 1.5670034 3.5 3.5 3.5zm6.7621385 7c-.8850139-2.8946791-3.5777143-5-6.7621387-5-3.1844245 0-5.87712493 2.1053209-6.76213876 5H18.7621385zM4 21c-.55228475 0-1-.4477153-1-1h-.00754862a9.07963802 9.07963802 0 0 1 .01314502-.1064258c.00185549-.0175393.0041644-.0349433.00691478-.0522001.43595408-3.2192393 2.56090871-5.9021068 5.45328094-7.1270196C7.26398091 11.7054407 6.5 10.191939 6.5 8.5 6.5 5.46243388 8.96243388 3 12 3c3.0375661 0 5.5 2.46243388 5.5 5.5 0 1.6919391-.763981 3.2054409-1.9657923 4.2143547 2.8923661 1.2249103 5.0173178 3.9077692 5.4532779 7.1269995.0027529.0172699.0050636.0346873.0069201.0522401A9.07834213 9.07834213 0 0 1 21.0075481 20H21c0 .5522847-.4477153 1-1 1H4z"/>
  </cdr-icon>
  ...
</template>

<script>
@import { CdrIcon } from '@rei/cdr-icon';

...
  components: {
    CdrIcon
  }
...

</script>
```

## Modifiers

Following variants are available to the `cdr-icon` modifier attribute:
| Value | Description            |
|:------|:-----------------------|
| 'small'  | Sets icon size to 16px |
| 'medium'  | Sets icon size to 24px |
| 'large'  | Sets icon size to 32px |