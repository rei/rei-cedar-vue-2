<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <ul :class="$style['cdr-pagination']">
    <li
      v-if="localCurrent > 1"
    >
      <a
        :class="$style['cdr-pagination__link']"
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
        :class="[
          $style['cdr-pagination__link'],
          {'current': n === localCurrent}
        ]"
        :href="`?page=${n}`"
        @click="$emit('change', n, $event)"
      >{{ n }}</a>
      <span
        v-else
        :class="$style['cdr-pagination__ellipse']"
      >{{ n }}</span>
    </li>
    <li
      v-if="localCurrent < totalPages"
    >
      <a
        :class="$style['cdr-pagination__link']"
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
      const delta = 1;
      let range = [];
      let over5 = true;
      let over5remain = true;

      if (total <= 7) {
        // [1-7]
        return Array(total).fill().map((_, i) => i + 1);
      }

      if (current < 5) {
      // first 5 pages
        over5 = false;
        // [2-5]
        range = Array(5).fill().map((_, i) => i + 1).slice(1);
      } else if (total - current < 4) {
      // last 5 pages
        over5remain = false;
        range = Array(4).fill().map((_, i) => total - (i + 1)).reverse();
      } else {
      // in between
        for (
          let i = Math.max(2, current - delta);
          i <= Math.min(total - 1, current + delta);
          i += 1
        ) {
          range.push(i);
        }
      }

      if ((current - delta > 2) && over5) {
        range.unshift('...');
      }
      if ((current + delta < total - 1) && over5remain) {
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

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrPagination.pcss';
</style>
