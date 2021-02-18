<template>
  <div>
    <h2>chips</h2>
    <cdr-chip>Default</cdr-chip>
    <cdr-chip modifier="emphasis">
      Emphasis
    </cdr-chip>

    <hr>

    <h3>Toggle Chip</h3>
    <cdr-chip
      modifier="default"
      @click="toggle"
      role="switch"
      :aria-checked="toggled"
    >
      <icon-heart-stroke
        slot="icon-left"
        inherit-color
        v-if="!toggled"
      />
      <icon-heart-fill
        slot="icon-left"
        inherit-color
        v-else
      />
      Toggle
    </cdr-chip>

    <hr>
    <h3>filter chip</h3>
    <div style="height: 100px;">
      <cdr-checkbox
        v-model="tents"
        id="tents"
        @change="updateFilters"
      >tents</cdr-checkbox>

      <cdr-chip
        modifier="default"
        v-for="filter in filters"
        :key="filter"
        @click="clearFilter"
        aria-controls="tents"
      >
        {{ filter }} <icon-x-sm
          slot="icon-right"
          inherit-color
        />
      </cdr-chip>
    </div>

    <hr>
    <h3>chip group</h3>
    <!-- TODO: chip group wrapper for keydown/tabindex?? -->
    <div role="radiogroup">
      <cdr-chip
        modifier="default"
        v-for="month in months"
        :key="month"
        @click="selectMonth(month)"
        :aria-checked="selectedMonth === month"
        role="radio"
      >
        {{ month }}
      </cdr-chip>
    </div>

    <hr>

    <h2>disabled chip</h2>
    <cdr-chip disabled>
      Default
    </cdr-chip>
    <cdr-chip
      modifier="emphasis"
      disabled
    >
      Emphasis
    </cdr-chip>

  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Chip',
  components: {
    ...Components,
  },
  data() {
    return {
      filters: ['Tents'],
      toggled: false,
      tents: true,
      months: ['January', 'February', 'March', 'April'],
      selectedMonth: 'January',
    };
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled;
    },
    clearFilter() {
      // bad example
      this.filters.pop();
      this.tents = false;
    },
    updateFilters(yes) {
      // bad example
      return yes ? this.filters.push('Tents') : this.filters.pop();
    },
    selectMonth(month) {
      this.selectedMonth = month;
    },
  },
};
</script>

<style>
</style>
