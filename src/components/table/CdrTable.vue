<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div :class="$style['cdr-table__wrapper']">
    <div :class="$style['cdr-table__scrollable']">
      <table :class="[modifierClass]">
        <!-- @slot table head and/or body placed into data table component -->
        <slot />
      </table>
    </div>
  </div>
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
  // Determine whenther or not table shoud be scrollable
  mounted() {
    const cdrTableScrollable =
      this.$el.getElementsByClassName(this.$style['cdr-table__scrollable'])[0];
    const cdrTableBody = this.$el.getElementsByTagName('tbody')[0];
    const numberOfCells = cdrTableBody.getElementsByTagName('tr')[0].cells.length;
    console.log(`number of columns:${numberOfCells}\n`); //eslint-disable-line

    if (numberOfCells > 2) {
      cdrTableScrollable.classList.add(this.$style['scrolling']); //eslint-disable-line
    }
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/vars/CdrTable.vars.pcss';
  @import './styles/CdrTable.pcss';
</style>
