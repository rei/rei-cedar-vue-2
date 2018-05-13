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
          id: 1,
          textValue: 'Kris1',
          url: 'http://google.com',
        },
        {
          id: 2,
          textValue: 'Kris2',
          url: 'http://google.com',
        },
        {
          id: 3,
          textValue: 'Kris3',
          url: 'http://google.com',
        },
      ],
    };
  },
};
</script>
