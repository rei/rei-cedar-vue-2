<template>
  <div>
    <h2>Tables</h2>
    <auto-table />
    <manual-table />
  </div>
</template>

<script>
import AutoTable from './demo/Auto';
import ManualTable from './demo/Manual';

export default {
  name: 'Tables',
  components: {
    AutoTable,
    ManualTable,
  },
};
</script>
