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
import CdrTokens from '@rei/cdr-tokens';

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
  // Determine whether or not table shoud be scrollable
  mounted() {
    const mq = window.matchMedia(`(min-width: ${CdrTokens.breakpointMd})`);

    mq.addListener(this.screenResize);

    this.screenResize(mq);
  },
  methods: {
    screenResize(mediaQuery) {
      const cdrTableScrollable =
        this.$el.getElementsByClassName(this.$style['cdr-table__scrollable'])[0];
      const cdrTable = this.$el.getElementsByTagName('table')[0];
      const cdrTableBody = this.$el.getElementsByTagName('tbody')[0];
      const numberOfCells = cdrTableBody.getElementsByTagName('tr')[0].cells.length;

      // For screens medium and larger
      if (mediaQuery.matches) {
        if (numberOfCells > 7) { // more than 7 cells means scrollable
          cdrTableScrollable.classList.add(this.$style['scrolling']); //eslint-disable-line
        } else { // 7 cells or less means non-scrollable
          cdrTableScrollable.classList.remove(this.$style['scrolling']); //eslint-disable-line
        }
      // For xs and sm screens
      } else if (window.matchMedia(`(max-width: ${CdrTokens.breakpointMd}`).matches) {
        // more than 2 cells means scrollable
        if (numberOfCells > 2) {
          cdrTableScrollable.classList.add(this.$style['scrolling']); //eslint-disable-line
          cdrTable.classList.remove(this.$style['single-column']);
        } else { // 2 cells or less means non-scrollable
          cdrTableScrollable.classList.remove(this.$style['scrolling']); //eslint-disable-line
          cdrTable.classList.add(this.$style['single-column']);
        }
      }
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/vars/CdrTable.vars.pcss';
  @import './styles/CdrTable.pcss';
</style>
