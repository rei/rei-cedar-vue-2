<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <ul>
    <li
      v-if="localCurrent > 1"
      @click="prevNext(-1)"
    >Previous</li>
    <!-- <li>1</li> -->
    <li
      v-for="n in pagination(localCurrent, totalPages)"
      :key="n"
    >
      <span v-if="n === localCurrent">{{ n }} &lt;</span>
      <span v-else>{{ n }}</span>
    </li>
    <li
      v-if="localCurrent < totalPages"
      @click="prevNext(1)"
    >Next</li>
  </ul>
</template>

<script>
export default {
  name: 'CdrPagination',
  model: {
    prop: 'currentPage',
    event: 'change',
  },
  props: {
    currentPage: {
      type: Number,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    range: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      localCurrent: this.currentPage,
    };
  },
  watch: {
    currentPage(v) {
      this.localCurrent = v;
    },
    localCurrent(v) {
      this.$emit('change', v);
    },
  },
  methods: {
    prevNext(n) {
      this.localCurrent = this.localCurrent + n;
    },
    pagination(current, total) {
      const delta = this.range;
      const range = [];

      for (
        let i = Math.max(2, current - delta);
        i <= Math.min(total - 1, current + delta);
        i += 1
      ) {
        range.push(i);
      }

      if (current - delta > 2) {
        range.unshift('...');
      }
      if (current + delta < total - 1) {
        range.push('...');
      }

      range.unshift(1);
      range.push(total);

      return range;
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrPagination.pcss';
</style>
