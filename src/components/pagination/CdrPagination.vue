<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <nav aria-label="Pagination Navigation">
    <ul :class="$style['cdr-pagination']">
      <li
        v-if="localCurrent > pages[0].page"
      >
        <a
          :class="[
            $style['cdr-pagination__link'],
            $style['cdr-pagination__prev'],
          ]"
          :href="pages[prevPageIdx].url"
          :aria-label="`Go to previous Page`"
          @click="$emit('change', pages[prevPageIdx].page, $event)"
        ><icon-caret-left
          :class="$style['cdr-pagination__caret--prev']"
          modifier="sm" />Previous
        </a>
      </li>
      <li
        v-for="n in paginationData"
        :key="`${n}-${guid()}`"
        :class="$style['cdr-pagination__li']"
      >
        <a
          v-if="n !== '&hellip;'"
          :class="[
            $style['cdr-pagination__link'],
            {'current': n.page === localCurrent}
          ]"
          :href="n.url"
          :aria-label=" n.page === localCurrent ? `Current page, page ${n}` : `Go to page ${n}`"
          :aria-current="n.page === localCurrent"
          @click="$emit('change', n.page, $event)"
        >{{ n.page }}</a>
        <span
          v-else
          :class="$style['cdr-pagination__ellipse']"
          v-html="n"
        />
      </li>
      <li
        v-if="localCurrent < pages[totalPages - 1].page"
      >
        <a
          :class="[
            $style['cdr-pagination__link'],
            $style['cdr-pagination__next'],
          ]"
          :href="pages[nextPageIdx].url"
          :aria-label="`Go to next page`"
          @click="$emit('change', pages[nextPageIdx].page, $event)"
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
     * Array of objects. Objects have structure of { page: Number, url: String }
     */
    pages: {
      type: Array,
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
    totalPages() {
      return this.pages.length;
    },
    prevPageIdx() {
      return this.currentIdx - 1;
    },
    nextPageIdx() {
      return this.currentIdx + 1;
    },
    currentIdx() {
      return this.pages.map(x => x.page).indexOf(this.localCurrent);
    },
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
    paginationData() {
      const total = this.totalPages;
      const current = this.localCurrent;
      const delta = 1;
      let range = [];
      let over5 = true;
      let over5remain = true;

      if (total <= 7) {
        // all pages
        return this.pages;
      }

      if (current < 5) {
      // if first 5 pages
        over5 = false;
        // [2-5]
        range = this.pages.slice(1, 5);
      } else if (total - current < 4) {
      // if last 5 pages
        over5remain = false;
        range = this.pages.slice(-5, -1);
      } else {
      // else in between
        for (
          let i = Math.max(2, current - delta);
          i <= Math.min(total - 1, current + delta);
          i += 1
        ) {
          range.push(this.pages[i - 1]);
        }
      }

      if ((current - delta > 2) && over5) {
        range.unshift('&hellip;');
      }
      if ((current + delta < total - 1) && over5remain) {
        range.push('&hellip;');
      }

      range.unshift(this.pages[0]);
      range.push(this.pages[total - 1]);

      return range;
    },
  },
  watch: {
    currentPage(v) {
      this.localCurrent = v;
    },
  },
  methods: {
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
