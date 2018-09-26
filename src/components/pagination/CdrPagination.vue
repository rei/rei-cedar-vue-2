<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <ul>
    <li
      v-if="localCurrent > 1"
    >
      <a
        :href="`?page=${prevPage}`"
        @click="$emit('change', prevPage, $event)"
      >Previous</a>
    </li>
    <li
      v-for="n in pagination(localCurrent, totalPages)"
      :key="`${n}-${guid()}`"
    >
      <a
        v-if="n !== '...'"
        :href="`?page=${n}`"
        @click="$emit('change', n, $event)"
      >{{ n }}{{ n === localCurrent ? '&lt;' : '' }}</a>
      <span v-else>{{ n }}</span>
    </li>
    <li
      v-if="localCurrent < totalPages"
    >
      <a
        :href="`?page=${nextPage}`"
        @click="$emit('change', nextPage, $event)"
      >Next</a>
    </li>
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
    /**
     * Total number of pages
     */
    totalPages: {
      type: Number,
      required: true,
    },
    /**
     * Number of pages to show on either side of current page
     */
    range: {
      type: Number,
      default: 1,
    },
    // TODO: assign link hrefs based on user data
    urls: {
      type: Array,
    },
    /** @ignore */
    currentPage: {
      type: Number,
    },
  },
  data() {
    return {
      localCurrent: this.currentPage,
    };
  },
  computed: {
    prevPage() {
      return this.localCurrent - 1;
    },
    nextPage() {
      return this.localCurrent + 1;
    },
  },
  watch: {
    currentPage(v) {
      this.localCurrent = v;
    },
  },
  methods: {
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
    guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrPagination.pcss';
</style>
