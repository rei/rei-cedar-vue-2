## Properties

| name  | type | default     |
|:-----|:-------|:--------|
| alt | string   | empty |

Sets the alternate text attribute for the image. Default value is empty

| name | type   | default |
|:-----|:-------|:--------|
| src  | string | empty   |

Sets image source URL

| name | type   | default |
|:-----|:-------|:--------|
| lazy  | bool | false   |

Setting this value to true will enable lazy loading for internal applications. Lazy loading is provided using the the FEDPACK rei-lazy-image-loader project

| name | type | default |
|:-----|:-----|:--------|
| lazyOpts | object | array   |

For internal projects. Provide an object of lazy options as defined on within the rei-lazy-image-loader API. This will output each option as a `data-` attribute on the root element.

| name     | type   | default |
|:---------|:-------|:--------|
| ratio | enum | n/a   |

Sets the aspect ratio and scales the image as large as possible without cropping or stretching the image (See CSS background-size: contain). Possible values: {  'auto'  |  'square'  |  '1-2'  |  '2-3'  |  '3-4'  |  '9-16'  |  '2-1'  |  '3-2'  |  '4-3'  |  '16-9'  }

| name  | type | default |
|:------|:-----|:--------|
| ratioSm | enum | n/a     |

Sets the aspect ratio at the small breakpoint. Possible values: {  'auto'  |  'square'  |  '1-2'  |  '2-3'  |  '3-4'  |  '9-16'  |  '2-1'  |  '3-2'  |  '4-3'  |  '16-9'  }

| name    | type | default |
|:--------|:-----|:--------|
| ratioMd | enum | n/a     |

Sets the aspect ratio at the medium breakpoint. Possible values: {  'auto'  |  'square'  |  '1-2'  |  '2-3'  |  '3-4'  |  '9-16'  |  '2-1'  |  '3-2'  |  '4-3'  |  '16-9'  }

| name    | type | default |
|:--------|:-----|:--------|
| ratioLg | enum | n/a     |

Sets the aspect ratio at the large breakpoint. Possible values: {  'auto'  |  'square'  |  '1-2'  |  '2-3'  |  '3-4'  |  '9-16'  |  '2-1'  |  '3-2'  |  '4-3'  |  '16-9'  }

| name    | type | default |
|:--------|:-----|:--------|
| crop | string | n/a     |

Requires ‘ratio’ to define the starting position for cropping image. Image will overflow and not be displayed. Possible values: {  ‘left’  |  ‘x-center’  |  ‘right’  |  ‘top’  «  ‘y-center’  |  ‘bottom’  }

| name | type   | default |
|:-----|:-------|:--------|
| cover | false | n/a     |

Requires ‘ratio’ to scale the image to be as large as possible to fill the entire background area. See CSS background-size: cover.

| name  | type  | default |
|:------|:------|:--------|
| radius | enum | n/a     |

Sets a border radius to the root element. Possible values: {  'circle'  |  ‘rounded’  }

| name   | type | default |
|:-------|:-----|:--------|
| modifier | string | n/a     |

Modifies the style variant for this component. Possible value: {  ‘responsive’  }

## Slots

| name                                         |
|:---------------------------------------------|
| default                                      |

Set the innerHTML for cdr-image. This includes text and html markup

## Installation

Resources are available within the [CdrImg package](https://www.npmjs.com/package/@rei/cdr-img):

- Component: `@rei/cdr-img`
- Component styles: `cdr-img.css`

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the `CdrImg` package using `npm` in your terminal:

_Terminal_

```bash
npm i -S @rei/cdr-img
```

### 2. Import Dependencies

_main.js_

```javascript
// import your required CSS.
import '@rei/cdr-img/dist/cdr-img.css';
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-img />
</template>

<script>
import { CdrImg } from '@rei/cdr-img';
export default {
  ...
  components: {
     CdrImg  
  }
}
</script>
```

## Usage

### Ratio

- Positions the original image asset off-screen and replaces it with a background image
- CSS background property value is set to `contain` which resizes the background image to make sure it is fully visible
- Shrinks the image and display additional padding to the requested ratio
- To manipulate background property and remove excess padding:
  - Use `cover` property
  - Use `crop` property
  - `cover` and `crop` properties can be used together

### Cover

- Resizes the background image to cover the entire container
  - Without stretching the image
  - Cropped either vertically or horizontally without empty space
- Requires the `ratio` property

### Crop

- Background image is displayed in its original size
- Requires the `ratio` property 
- Defines the starting point of the overflow position 
- Accepts a single x-axis and y-axis value (e.g. crop=”top left”):
  - Adjust the starting background-position on the x-axis of the image:
    - `left`: Orients the image to its horizontal left
    - `right`: Orients the image to its horizontal right
    - `x-center`: Orients the image to its horizontal center
  - Adjust the starting background-position on the y-axis of the image:
    - `top`: Orients the image to its top
    - `bottom`: Orients the image to its bottom
    - `y-center`: Orients the image to its vertical center

### Radius

- Variants for this property: `circle` or `rounded` (for rounded rectangle)
- Uses preset values provided in `cdr-core.css`

### Modifiers

Following variants are available to the `cdr-img` modifier attribute:

| Value        | Description                                    |
|:-------------|:-----------------------------------------------|
| 'responsive' | Sets the image to display block and 100% width |

## Performance

For internal applications with large images or images that would benefit from changes due to platform or breakpoint, use lazy load properties to integrate with the [rei-lazy-image-loader project](https://git.rei.com/projects/FEDPACK/repos/rei-lazy-image-loader/browse).
