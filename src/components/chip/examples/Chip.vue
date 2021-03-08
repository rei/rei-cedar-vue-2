<template>
  <div>
    <h2>chips</h2>
    <cdr-chip>Default</cdr-chip>
    <cdr-chip
    >
      <icon-heart-stroke
        slot="icon-left"
        inherit-color
        size="small"
      />Hey
    </cdr-chip>
    <cdr-chip
    >
      <icon-heart-stroke
        slot="icon-right"
        inherit-color
        size="small"
      />Hey
    </cdr-chip>
    <cdr-chip
    >Hey
    </cdr-chip>
    <hr>

    <h3>Toggle Chip</h3>
    <cdr-chip
      @click="toggled1 = !toggled1"
      :aria-pressed="toggled1 ? 'true' : 'false'"
    >
      <icon-heart-stroke
        slot="icon-left"
        inherit-color
        size="small"
        v-if="!toggled1"
      />
      <icon-heart-fill
        slot="icon-left"
        inherit-color
        size="small"
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
        v-for="filter in filters"
        :key="filter"
        @click="clearFilter"
        aria-controls="tents"
      >
        {{ filter }} <icon-x-lg
          size="small"
          slot="icon-right"
          inherit-color
        />
      </cdr-chip>
    </div>
    <hr>
    <h3>chip group</h3>
    <h4>Radio Chip single selection</h4>
    <cdr-chip-group label="Pick One Month">
      <cdr-chip
        v-for="(month, i) in months"
        :key="month"
        @click="selectMonth(month)"
        :disabled="i == 4"
        :aria-checked="selectedMonth === month"
        role="radio"
        :tabindex="selectedMonth === month ? '0' : '-1'"
      >
        {{ month }}
      </cdr-chip>
    </cdr-chip-group>

    <h4>Checkbox Chip multi selection</h4>
    <cdr-chip-group label="Pick As Many Months As You Like">
      <cdr-chip
        v-for="(month, i) in months"
        :key="month"
        @click="selectMonths(month)"
        :disabled="i == 3"
        :aria-checked="selectedMonths.includes(month)"
        role="checkbox"
      >
        {{ month }}
      </cdr-chip>
    </cdr-chip-group>

    <hr>

    <h2>disabled chip</h2>
    <cdr-chip disabled>
      Default
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
      toggled1: false,
      toggled2: false,
      tents: true,

      backpacks: true,
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      selectedMonth: 'January',
      selectedMonths: ['February', 'March'],
    };
  },
  methods: {
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
    selectMonths(month) {
      const i = this.selectedMonths.indexOf(month);
      if (i !== -1) {
        this.selectedMonths.splice(i, 1);
      } else {
        this.selectedMonths.push(month);
      }
    },
  },
};
</script>

<style>
</style>
