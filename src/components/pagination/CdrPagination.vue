<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <nav aria-label="Pagination Navigation">
    <ul :class="$style['cdr-pagination']">
      <li
        v-if="localCurrent > pageNumbers[0]"
      >
        <a
          :class="[
            $style['cdr-pagination__link'],
            $style['cdr-pagination__prev'],
          ]"
          :href="pages[prevPage]"
          :aria-label="`Go to previous Page`"
          @click="$emit('change', prevPage, $event)"
        ><icon-caret-left
          :class="$style['cdr-pagination__caret--prev']"
          modifier="sm" />Previous
        </a>
      </li>
      <li
        v-for="n in pagination(localCurrent, totalPages)"
        :key="`${n}-${guid()}`"
        :class="$style['cdr-pagination__li']"
      >
        <a
          v-if="n !== '&hellip;'"
          :class="[
            $style['cdr-pagination__link'],
            {'current': n === localCurrent}
          ]"
          :href="pages[n]"
          :aria-label=" n === localCurrent ? `Current page, page ${n}` : `Go to page ${n}`"
          :aria-current="n === localCurrent"
          @click="$emit('change', n, $event)"
        >{{ n }}</a>
        <span
          v-else
          :class="$style['cdr-pagination__ellipse']"
          v-html="n"
        />
      </li>
      <li
        v-if="localCurrent < pageNumbers[totalPages - 1]"
      >
        <a
          :class="[
            $style['cdr-pagination__link'],
            $style['cdr-pagination__next'],
          ]"
          :href="pages[nextPage]"
          :aria-label="`Go to next page`"
          @click="$emit('change', nextPage, $event)"
        >Next<icon-caret-right
          :class="$style['cdr-pagination__caret--next']"
          modifier="sm" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { IconCaretLeft, IconCaretRight } from '@rei/cdr-icon';

export default {
  name: 'CdrPagination',
  components: {
    IconCaretLeft,
    IconCaretRight,
  },
  model: {
    prop: 'currentPage',
    event: 'change',
  },
  props: {
    /**
     * Object of page numbers/urls. key=number, value=url.
     * {"1": "url1", "2": "url2"}
     */
    pages: {
      type: Object,
      required: true,
    },
    /** @ignore used for binding v-model */
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
    /**
     * Returns array from pages. {"1": "url1", "2": "url2"} --> ['1', '2']
     */
    pageNumbers() {
      return Object.keys(this.pages);
    },
    totalPages() {
      return this.pageNumbers.length;
    },
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
    /**
     * Creates an array of the pages that should be shown as links with logic for truncation.
     *
     * If total = 20 ([num] indicates current page)
     * [1] 2 3 4 5 ... 20
     * 1 2 3 [4] 5 ... 20
     * 1 ... 4 [5] 6 ... 20
     * 1 ... 15 [16] 17 ... 20
     * 1 ... 16 [17] 18 19 20
     *
     * If total 5 (or anything <= 7)
     * [1] 2 3 4 5
     * 1 2 [3] 4 5
     * 1 2 3 4 [5]
     *
     * Degrades for prev/next only scenario
     * urls = {"4": "url4", "5": "url5", "6": "url6"} (assuming current page is 5)
     * 4 [5] 6
     */
    pagination(current, total) {
      const delta = 1;
      let range = [];
      let over5 = true;
      let over5remain = true;

      if (total <= 7) {
        // all pages
        return Object.keys(this.pages).map(i => parseInt(i, 10));
      }

      if (current < 5) {
      // if first 5 pages
        over5 = false;
        // [2-5]
        range = Array(5).fill().map((_, i) => i + 1).slice(1);
      } else if (total - current < 4) {
      // if last 5 pages
        over5remain = false;
        range = Array(4).fill().map((_, i) => total - (i + 1)).reverse();
      } else {
      // else in between
        for (
          let i = Math.max(2, current - delta);
          i <= Math.min(total - 1, current + delta);
          i += 1
        ) {
          range.push(i);
        }
      }

      if ((current - delta > 2) && over5) {
        range.unshift('&hellip;');
      }
      if ((current + delta < total - 1) && over5remain) {
        range.push('&hellip;');
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

<style>
  @import '@rei/cdr-icon/dist/cdr-icon.css';
</style>
