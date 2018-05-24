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

## Component Infrastructure

### Props

#### items

  Items are the array that the breadcrumb component interates over to create the breadcrumb.  The items collection should be ordered and will render from index 0 from the left to index n to the right.  The array must contain javacript object with a "url" string property and a "displayText" string property.

####  truncationEnabled

  This property controls the ability to truncate.  If a user sets this to false, truncation will no longer occur.

#### truncationThreshold

  This property respresents the ratio between breadcrumb width vs container width that truncation will occur.  The default is 0.8 which means that truncation will occur when the breadcrumb width reaches 80% of the container width.  A user can change this if they want the breadcrumb to truncate at a lesser or greater breadcrumb width.

