## Properties

| Name  | Type | Default     |
|:-----|:-------|:--------|
| alt | string   | empty |

Sets alternate text for the image. Default value is empty.

| Name | Type   | Default |
|:-----|:-------|:--------|
| src  | string | empty   |

Sets image source URL.

| Name | Type   | Default |
|:-----|:-------|:--------|
| lazy  | bool | false   |

For internal applications. If true, this property will enable lazy loading. Lazy loading is provided using the FEDPACK rei-lazy-image-loader project

| Name | Type | Default |
|:-----|:-----|:--------|
| lazyOpts | object | array   |

For internal projects. Provide an object of lazy options as defined on within the rei-lazy-image-loader API. This will output each option as a `data-` attribute on the root element.

| Name     | Type   | Default |
|:---------|:-------|:--------|
| ratio | enum | n/a   |

Sets aspect ratio and scales the image as large as possible without cropping or stretching the image (See CSS background-size: contain). Possible values: 'auto' | 'square' | '1-2' | '2-3' | '3-4' | '9-16' | '2-1' | '3-2' | '4-3' | '16-9'

| Name  | Type | Default |
|:------|:-----|:--------|
| ratioSm | enum | n/a     |

Sets aspect ratio at the small breakpoint. Possible values: 'auto' | 'square' | '1-2' | '2-3' | '3-4' | '9-16' | '2-1' | '3-2' | '4-3' | '16-9'

| Name    | Type | Default |
|:--------|:-----|:--------|
| ratioMd | enum | n/a     |

Sets aspect ratio at the medium breakpoint. Possible values: 'auto' | 'square' | '1-2' | '2-3' | '3-4' | '9-16' | '2-1' | '3-2' | '4-3' | '16-9'

| Name    | Type | Default |
|:--------|:-----|:--------|
| ratioLg | enum | n/a     |

Sets aspect ratio at the large breakpoint. Possible values: 'auto' | 'square' | '1-2' | '2-3' | '3-4' | '9-16' | '2-1' | '3-2' | '4-3' | '16-9'

| Name    | Type | Default |
|:--------|:-----|:--------|
| crop | string | n/a     |

Requires ‘ratio’ to define the starting position for cropping image. Image will overflow and not be displayed. Possible values: ‘left’ | ‘x-center’ | ‘right’ | ‘top’ | ‘y-center’ | ‘bottom’

| Name | Type   | Default |
|:-----|:-------|:--------|
| cover | false | n/a     |

Requires ‘ratio’ to scale the image to be as large as possible to fill the entire background area. See CSS background-size: cover.

| Name  | Type  | Default |
|:------|:------|:--------|
| radius | enum | n/a     |

Sets a border radius to the root element. Possible values: 'circle' | ‘rounded’

| Name   | Type | Default |
|:-------|:-----|:--------|
| modifier | string | n/a     |

Modifier allows the user to pass a style variant to this component. Possible value: ‘responsive’

## Slots

| name                                         |
|:---------------------------------------------|
| default                                      |

innerHTML on the inside of the anchor component

## Installation

Resources are available within the [cdr-img package](https://www.npmjs.com/package/@rei/cdr-img):

| Name         | Type                | Description                            |
|:-------------|:--------------------|:---------------------------------------|
| @rei/cdr-img | Node module package | Import the component into your project |
| cdr-img.css  | Style sheet         | Component specific styles              |

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-img` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -S @rei/cdr-img
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import '@rei/cdr-img/dist/cdr-img.css';
```

### #3. Add component to a template

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
- CSS background property value is set to ‘contain’ which resizes the background image to make sure it is fully visible
- Shrinks the image and display additional padding to the requested ratio
- To manipulate background property and remove excess padding:
  - Use cover property
  - Use crop property
  - Cover and crop properties can be used together

### Cover

- Resizes the background image to cover the entire container
  - Without stretching the image
  - Cropped either vertically or horizontally without empty space
- Requires the ratio property

### Crop

- Background image is displayed in its original size
- Requires the ratio property 
- Defines the starting point of the overflow position 
- Accepts a single x-axis and y-axis value (e.g. crop=”top left”):
  - Adjust the starting background-position on the x-axis of the image:
    - Left: Orients the image to its horizontal left
    - Right: Orients the image to its horizontal right
    - X-center: Orients the image to its horizontal center
  - Adjust the starting background-position on the y-axis of the image:
    - Top: Orients the image to its top
    - Bottom: Orients the image to its bottom
    - Y-center: Orients the image to its vertical center

### Radius

- Variants for this property: circle or rounded (for rounded rectangle)
- Uses preset values provided in cdr-core.css

### Modifiers

Following variants are available to the cdrImg modifier attribute:

- Responsive: Sets the image to display block and 100% width

## Accessibility

Provide descriptive text for `<alt>` tag for:

- Informative images:
  - Conveys a simple concept or information
  - For more information, [Web Accessibility Tutorials: Informative Images](https://www.w3.org/WAI/tutorials/images/informative/)
- Functional images:
  - Initiates an action rather than to convey information such as a printer icon
  - Describe functionality of the link or button rather than the visual image
  - For more information, [Web Accessibility Tutorials: Functional Images](https://www.w3.org/WAI/tutorials/images/functional/)
- Images of Text:
  - Displays text that is intended to be read
  - Avoid text in images, unless the image is a logo
  - Text alternative should contain the same words that appear in the image
  - For more information, [Web Accessibility Tutorials: Images of Text](https://www.w3.org/WAI/tutorials/images/textual/#image-of-styled-text-with-decorative-effect)

This component has no specific WCAG compliance attributes built into the control except:

- Adds an empty alt attribute into the image element by default 
- An empty alt attribute is needed to meet accessibility requirements for decorative images

## Performance

For internal applications with large images or images that would benefit from changes due to platform or breakpoint use our lazy load properties to integrate with the rei-lazy-image-loader project.

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

### What's new

**cdrImg** component:

- Enforces WCAG A 1.1.1 criteria for decorative images by adding an empty alt attribute to all cdr-img’s
- Provides integration support for image best practices available using [rei-lazy-image-loader](https://git.rei.com/projects/FEDPACK/repos/rei-lazy-image-loader/browse)
- Enables the following aspect ratios at breakpoints with following variants: Auto, Square, 1-2, 2-3, 3-4, 9-16, 2-1, 3-2, 4-3, 16-9
- Enables user defined cropping and covering
- Provides image shapes using the radius property with the following variants: Circle, Rounded
- Enables users to set the image to be 100% width with a responsive modifier

[Complete component history](https://github.com/rei/rei-cedar/blob/master/src/components/image/CHANGELOG.md)
