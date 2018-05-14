<template>
  <div>
    <h2>breadcrumb</h2>
    <cdr-breadcrumb
      :items="breadcrumbItems"
    />
  </div>
</template>

<script>
import Components from 'componentsdir/_index';

export default {
  name: 'Breadcrumb',
  components: Components,
  data() {
    return {
      breadcrumbItems: [
        {
          url: 'http://google.com',
          displayText: 'Step 1 ',
        },
        {
          url: 'http://rei.com',
          displayText: 'Step 2 ',
        },
        {
          url: 'http://yahoo.com',
          displayText: 'Step 3 ',
        },
        {
          url: 'http://bing.com',
          displayText: 'Step 4 ',
        },
      ],
    };
  },
};
</script>
