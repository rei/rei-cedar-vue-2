# CdrBreadcrumb

For the most up-to-date information, see [REI Cedar documentation](https://rei.github.io/rei-cedar-docs/components/breadcrumb/).

## Properties

| name                                                                              | type   | Default |
| :-------------------------------------------------------------------------------- | :----- | :------ |
| items                                                                             | array  | N/A     |
| An array of breadcrumb objects that each contain a "url" and "name" property  |

| name                                                                              | type    | Default |
| :-------------------------------------------------------------------------------- | :-----  | :------ |
| truncationEnabled                                                                 | boolean | true    |
| Controls the ability to truncate. If a user sets this to false, truncation will no longer occur  |

| name                                                                              | type   | Default |
| :-------------------------------------------------------------------------------- | :----- | :------ |
| truncationThreshold                                                               | number | 0.8     |
| This property respresents the ratio between breadcrumb width vs container width that truncation will occur |

| name                                                                               | type   | Default |
| :--------------------------------------------------------------------------------- | :----- | :------ |
| truncationXSThreshold                                                              | number | 1       |
| This property respresents the ratio between breadcrumb width vs container width that truncation will occur on the XS breakpoint |

## Installation

- Component: `@rei/cdr-breadcrumb`
- Component styles: `cdr-breadcrumb.css`

To incorporate the required assets for a component, use the following steps:

### #1. Install using NPM

Install the `cdr-breadcrumb` package using `npm` in your terminal:

_Terminal_

```terminal
    npm i -s @rei/cdr-breadcrumb
```

### #2. Import Dependencies

_main.js_

```javascript
// import your required css.
import "@rei/cdr-breadcrumb/dist/cdr-breadcrumb.css";
```

### #3. Add component to a template

_local.vue_

```vue
<template>
  <cdr-breadcrumb :items="breadcrumbItems"/>
</template>

<script>
import { CdrBreadcrumb } from '@rei/cdr-breadcrumb';
export default {

  components: {
     CdrBreadcrumb
  },
  data () {
    breadcrumbItems: [
      {
        item: {
          name: ‘Great GrandParent Page’,
          url: “<UrlBreadcrumb1>”
        }
      },
      {
        item: {
          name: “Grandparent Page”,
          url: “<UrlBreadcrumb2>”
        }
      }
      {
        item: {
          name: “Parent Page”,
          url: “<UrlBreadcrumb3>”
        }
      }
    ]
  }
}
</script>
```

## Usage

The ```items``` property requires an array of objects, in the format shown above. Notable values include:

- ```item.url (optional)``` string where the breadcrumb item segment links when clicked or tapped
- ```item.name (required)```  string for the breadcrumb text item segment

The array must be ordered appropriately from low index rendered on the left, to high index on the right.

The below example shows alternatively setting ```items``` using an array literal.
```vue
<cdr-breadcrumb :items="[{item:{url:'', name: 1}},{item:{url:'', name: 2}},{item:{url:'', name: 3}}]"/>
```

Use ```truncationEnabled``` to disable the truncation functionality.  Below shows truncation being disabled.

```vue
<cdr-breadcrumb :truncation-enabled="false" :items="[{url:'', name: 1},{url:'', name: 2},{url:'', name: 3}]"/>
```

Use the ```truncationThreshold``` prop to alter when truncation occurs:

- value must be a number between 0 and 1
- Truncation occurs when (breadcrumb width)/(container width) exceeds the ```truncationThreshold``` value

The default value is 0.80 ( 80% ).

Below shows using ```truncationThreshold``` to set truncation to occur at 50%.

<cdr-img alt="Breadcrumb with truncation threshold at 50% and 80%" :src="$withBase(`/breadcrumb/Spec_API___Breadcrumb_Truncated_Threshold_50to80_16-4.png`)" />

```vue
<cdr-breadcrumb :truncation-threshold="0.50" :items="breadcrumbItems"/>
```
Use the ```truncationXSThreshold``` prop to alter when truncation occurs:

- value must be a number between 0 and 1
- Truncation occurs when (breadcrumb width)/(container width) exceeds the ```truncationXSThreshold``` value on XS screen sizes

The default value is 1 ( 100% ).

Below shows using ```truncationXSThreshold``` to set truncation to occur at 70%.

<cdr-img alt="Breadcrumb with truncation XS  threshold at 70%" :src="$withBase(`/breadcrumb/Spec_API___Breadcrumb_Truncated_XSThreshold_70to100_16-4.png`)" />

```vue
<cdr-breadcrumb :truncation-x-s-threshold=“0.70” :items="breadcrumbItems"/>
```

## Accessibility

Web browsers, plug-ins, and assistive technologies use headings to provide in-page navigation. To ensure that usage of this component complies with accessibility guidelines, do the following:

- Indicate the current page location within a hierarchy using breadcrumbs
- Do not include the current page in breadcrumb path

This component has compliance with following WebAIM’s accessibility guidelines:
  - [WCAG SC 1.4.3: Contrast (Minimum)](https://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast): Only when displayed on light backgrounds, Cedar Design System text color uses a Level AA contrast ratio of 4.5:1 contrast between the text color and the background
  - [WCAG SC 2.4.8:Location](https://www.w3.org/TR/WCAG20/#navigation-mechanisms-location): Cedar Design System breadcrumb component provides this functionality
    - The attribute aria-label=”Breadcrumb” in the ```<nav>``` element identifies the structure of  ```cdr-breadcrumb as a breadcrumb``` trail for screen readers
    - The final breadcrumb link element must not link to the current page because the ```aria-current``` attribute is not defined for the last item
    - The ellipsis button contains the ```aria-expanded="false"``` attribute when the user has the ability to expand the breadcrumb

</cdr-doc-table-of-contents-shell>
</template>

<template slot="History">

## 1.0.0

- Displays as an inline list with links to previous sections
- Truncates when entire breadcrumb string gets too long
- Enables customization of whitespace threshold to the right, by default and in narrow viewports
- Incorporates accessibility and SEO compliant features

Git commit reference [08b883c](https://github.com/rei/rei-cedar/commit/08b883c)

