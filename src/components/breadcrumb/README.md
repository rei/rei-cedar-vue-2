# <span class="display-name">CdrBreadcrumb</span>

## How to use CdrBreadcrumb

`cdr-breadcrumb` takes a collection of breadcrumb objects that each has a `url` and `displayText` property.

### url property

This property is bound to the `href` attribute of the breadcrumb anchor element and will navigate to it's value upon the click event.

### displayText property

This property is the string that is displayed upon rendering the breadcrumb element.

### Example:

```
// Base view template (assuming .vue and vue-router)
<template>
  <div id="main">
    <cdr-breadcrumb
      :items="breadcrumbItems"
    />

    <router-view></router-view> // rest of app
  </div>
</template>

<script>
  export default {
    data() {
        return {
          breadcrumbItems: [
            {
              url: 'http://google.com',
              displayText: 'Breadcrumb Step 1',
            },
            {
              url: 'http://rei.com',
              displayText: 'Long Breadcrumb Step 2',
            },
            {
              url: 'http://yahoo.com',
              displayText: 'Breadcrumb Step 3',
            },
            {
              url: 'http://bing.com',
              displayText: 'Last Step',
            },
          ],
        }
    }
  }
</script>
```
