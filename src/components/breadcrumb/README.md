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


## Usage

_local.vue_

```vue
<template>
  <cdr-breadcrumb :items="breadcrumbItems"/>
</template>

<script>
import { CdrBreadcrumb } from '@rei/cedar';
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
