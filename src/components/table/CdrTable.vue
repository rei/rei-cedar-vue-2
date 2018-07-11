<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div :class="$style['cdr-table__wrapper']">
    <div :class="$style['cdr-table__scrollable']">
      <table :class="[modifierClass]">
        <!-- @slot table head and/or body placed into data table component -->
        <slot v-if="records.length == 0"/>
        <template v-else>
          <thead v-if="headerCols.length > 0">
            <th
              v-for="header in headerCols"
              :key="header.id">{{ header.value }}
            </th>
          </thead>
          <tbody>
            <tr
              v-for="(recObj, index) in records"
              :key="index">
              <td
                v-for="header in headerCols"
                :key="header.id">
                {{ recObj[header.id] }}
              </td>
            </tr>
          </tbody>
        </template>
      </table>
    </div>
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import CdrTokens from '@rei/cdr-tokens';
import matchmedia from 'matchmedia-polyfill';
import matchMediaAddListener from 'matchmedia-polyfill/matchMedia.addListener';

/**
 * Cedar 2 compfor for data table
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrTable',
  mixins: [modifier],
  props: {
    records: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    headerCols: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
    headerRows: {
      type: Array,
      required: false,
      default() {
        return [];
      },
    },
  },
  computed: {
    baseClass() {
      return 'cdr-table';
    },
  },
  // Determine whether or not table shoud be scrollable
  mounted() {
    window.matchMedia = window.matchMedia || matchmedia;
    window.matchMedia.addListener = window.matchMedia.addListener || matchMediaAddListener;

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
      const numberOfCells = cdrTableBody ?
        cdrTableBody.getElementsByTagName('tr')[0].cells.length : 0;

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
