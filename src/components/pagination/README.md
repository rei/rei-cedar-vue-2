# CdrPagination

For the most up-to-date information, see [REI Cedar documentation](https://rei.github.io/rei-cedar-docs/components/pagination/).

## Props

| name | type | default |
| :--- | :--- | :--- |
| pages | array | N/A |

Array of objects containing pagination data. Objects have structure of { page: number, url: string }. Required.

| name | type | default |
| :--- | :--- | :--- |
| totalPages | number | null |

Sets the total number of pages for displaying "Page x of &lt;totalPages&gt;". Sometimes the total number of pages is different than total page data objects in the pages array. For example, if only the next and previous pages are provided.

## Events

| name | arguments | 
| :--- | :--- |
| change | pageNumber, event |

$emit event fired when page changes based on user interaction by clicking a link or selecting an option from the select on mobile.

| name | arguments | 
| :--- | :--- |
| select-change | pageUrl, event |

$emit event fired on select change with the URL value of the selected option. Also triggers the 'change' event (above) with the selected page number.

## Installation

Resources are available with the [CdrPagination package](https://www.npmjs.com/package/@rei/cdr-pagination):

- Component: `@rei/cdr-pagination`
- Component styles: `cdr-pagination.css`

<br />

To incorporate the required assets for a component, use the following steps:

### 1. Install using NPM

Install the **CdrPagination** package using `npm` in your terminal:

_Terminal_

```bash
npm i -s @rei/cdr-pagination
```

### 2. Import Dependencies

_main.js_

```javascript
// import your required CSS
import "@rei/cdr-pagination/dist/cdr-pagination.css";
```

### 3. Add component to a template

_local.vue_

```vue
<template>
  ...
    <cdr-pagination
      :pages="pageData"
      :total-pages="pageData.length"
      v-model="ex1Page"
    />
  ...
</template>

<script>
import { CdrPagination } from '@rei/cdr-pagination;
export default {
  ...
  components: {
     CdrPagination  
  },
  data() {
    return {
      ex1Page: 1,
      pageData: [
        { page: 1, url: 'https://www.rei.com/search?page=1' },
        { page: 2, url: 'https://www.rei.com/search?page=2' },
        { page: 3, url: 'https://www.rei.com/search?page=3' }
      ]
    };
  },
}
</script>
```

## Usage

The **CdrPagination** component provides a current page number control and renders a list of links. The current page value should be bound via `v-model` in your app.

You will need to enable navigation manually for pagination to work at mobile widths (see below).

The **CdrPagination** component does not make data calls, render or track paginated data, or handle routing beyond simple anchor links. However, it does emit events if you need to customize routing or need to add additional application logic. See section below, "Usage with Vue Router".

### Responsive behavior and navigation

The responsive behavior for the **CdrPagination** component automatically converts to **CdrSelect** component rather than a list of links. Values for the **CdrSelect** compnent are the provided page URL.

If not using Vue Router (see "Usage with Vue Router" below) you will need to manually update window location by using the `select-change` event.

```vue
<template>
  ...
     <cdr-pagination
       :pages="pageData"
       :total-pages="pageData.length"
       v-model="ex1Page"
       @select-change="selectNavigate"      
     />
  ...
</template>

<script>
import { CdrPagination } from '@rei/cdr-pagination;
export default {
  ...
  components: {
     CdrPagination  
  },
  data() {
    Return {
      ex1Page: 1,
      pageData: [
        { page: 1, url: 'https://www.rei.com/search?page=1' },
        { page: 2, url: 'https://www.rei.com/search?page=2' },
        { page: 3, url: 'https://www.rei.com/search?page=3' }
      ]
    };
  },
  methods: {
    selectNavigate(url, e) {
      window.location = url;
    },
  },
}
</script>
```

### Usage with Vue Router

Page URLs still need to be provided for SEO purposes, but the events emitted by the component can be used for routing using Vue Router by modifying $route in a method.

```vue
<template>
  ...
     <cdr-pagination
       :pages="pageData"
       :total-pages="pageData.length"
       v-model="ex1Page"
       @change="vueNavigate"      
     />
  ...
</template>

<script>
import { CdrPagination } from '@rei/cdr-pagination;
export default {
  ...
  components: {
     CdrPagination  
  },
  data() {
    Return {
      ex1Page: 1,
      pageData: [
        { page: 1, url: 'https://www.rei.com/search?page=1' },
        { page: 2, url: 'https://www.rei.com/search?page=2' },
        { page: 3, url: 'https://www.rei.com/search?page=3' }
      ]
    };
  },
  methods: {
    vueNavigate(num, e) {
           e.preventDefault();
           this.$router.replace({ query: Object.assign({}, this.$route.query, { 'router-query’: num }) });
       },
  },
}
</script>
```
