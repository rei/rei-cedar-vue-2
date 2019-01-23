<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-small"
    >
      Tables
    </cdr-text>
    <!-- <auto-table /> -->
    <manual-table />
  </div>
</template>

<script>
import Components from 'componentsdir/_index';
import ManualTable from './demo/Manual';

export default {
  name: 'Tables',
  components: {
    ...Components,
    ManualTable,
  },
};
</script>
