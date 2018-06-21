<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <table class="cdr-table">
    <!-- @slot table placed into data table component -->
    <slot />
  </table>
</template>

<script>
import modifier from 'mixinsdir/modifier';

/**
 * Cedar 2 compfor for data table
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrTable',
  mixins: [modifier],
  computed: {
    baseClass() {
      return 'cdr-table';
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrTable.pcss';
</style>
