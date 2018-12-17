# CdrRating

For the most up-to-date information, see [REI Cedar documentation](https://rei.github.io/rei-cedar-docs/components/rating/).

## Props

| name                                                                    | type   | default |
|:------------------------------------------------------------------------|:-------|:--------|
| rating                                                                  | number | 0       |
| Sets the rating values between 0 and 5. Required.                       |        |         |

| name                                                                    | type   | default |
|:------------------------------------------------------------------------|:-------|:--------|
| count                                                                   | number | 0       |
| Displays the total number of reviews.                                   |        |         |

| name                                                                    | type   | default |
|:------------------------------------------------------------------------|:-------|:--------|
| compact                                                                 | boolean | false       |
| Hides the word 'Reviews' if true.                                       |        |         |

| name                                                                    | type   | default |
|:------------------------------------------------------------------------|:-------|:--------|
| href                                                                    | string | n/a     |
| Sets the rating component (icons and text) to display inline and wraps them in an anchor tag. |        |         |

| name                                                                    | type   | default |
|:------------------------------------------------------------------------|:-------|:--------|
| size                                                                    | string | 'medium' |
| Modifies the style variant for this component. Possible values: {  ‘small’  |  ‘medium’  |  ‘large’  } |        |         |

## Installation

Resources are available within the [CdrRating package:](https://www.npmjs.com/package/@rei/cdr-rating)

- Component: `@rei/cdr-rating`
- Component styles: `cdr-rating.css`

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the **CdrRating** package using `npm` in your terminal:

_Terminal_

```bash
npm i @rei/cdr-rating
```

### 2. Import dependencies

_main.js_

```javascript
// import your required CSS.
import "@rei/cdr-rating/dist/cdr-rating.css";
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  ...
     <cdr-rating rating="4.2" count="77" />
  ...
</template>

<script>
import { CdrRating } from '@rei/cdr-rating;
export default {
  ...
  components: {
     CdrRating  
  }
}
</script>
```

## Usage
By default the **CdrRating** component renders the icons in medium size (24px) with the total number of reviews. 

### Rating Values
- The count for reviews will always be visible
- Ratings are rounded to the nearest .25 because icons are represented in 25% increments
- Screen reader text is provided which reads, “Rated [ rounded ] out of 5 with [ count ] reviews”
