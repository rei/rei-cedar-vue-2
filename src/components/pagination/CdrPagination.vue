<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <nav aria-label="Pagination Navigation">
    <ul :class="$style['cdr-pagination']">
      <li
        v-if="value > pages[0].page"
      >
        <a
          :class="[
            $style['cdr-pagination__link'],
            $style['cdr-pagination__prev'],
          ]"
          :href="pages[prevPageIdx].url"
          :aria-label="`Go to previous Page`"
          @click="navigate(pages[prevPageIdx].page, $event)"
          ref="prev-link"
        ><icon-caret-left
          :class="$style['cdr-pagination__caret--prev']"
          size="small"
        />Prev</a>
      </li>
      <!-- Desktop -->
      <li
        v-for="n in paginationData"
        :key="`${n}-${guid()}`"
        :class="$style['cdr-pagination__li--links']"
      >
        <a
          v-if="n !== '&hellip;'"
          :class="[
            $style['cdr-pagination__link'],
            {'current': n.page === value}
          ]"
          :href="n.url"
          :aria-label=" n.page === value ? `Current page, page ${n.page}` : `Go to page ${n.page}`"
          :aria-current="n.page === value"
          @click="navigate(n.page, $event)"
        >{{ n.page }}</a>
        <!-- eslint-disable vue/no-v-html -->
        <span
          v-else
          :class="$style['cdr-pagination__ellipse']"
          v-html="n"
        />
      </li>
      <!-- Mobile -->
      <li :class="$style['cdr-pagination__li--select']">
        <cdr-select
          v-model="currentUrl"
          label="Navigate to page"
          hide-label
          @change="select(currentUrl, ...arguments)"
          :class="$style['cdr-pagination__select']"
          ref="select"
        >
          <!-- eslint-disable vue/no-use-v-if-with-v-for -->
          <option
            v-for="n in paginationData"
            :key="`${n}-${guid()}`"
            :value="n.url"
            v-if="n !== '&hellip;'"
          >Page {{ n.page }}{{ totalPages === null ? `` : ` of ${totalPages}` }}</option>
        </cdr-select>
      </li>
      <li
        v-if="value < pages[totalPageData - 1].page"
      >
        <a
          :class="[
            $style['cdr-pagination__link'],
            $style['cdr-pagination__next'],
          ]"
          :href="pages[nextPageIdx].url"
          :aria-label="`Go to next page`"
          @click="navigate(pages[nextPageIdx].page, $event)"
          ref="next-link"
        >Next<icon-caret-right
          :class="$style['cdr-pagination__caret--next']"
          size="small"
        />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { IconCaretLeft, IconCaretRight } from 'componentsdir/icon/build/main';
import CdrSelect from 'componentsdir/select/CdrSelect';

export default {
  name: 'CdrPagination',
  components: {
    IconCaretLeft,
    IconCaretRight,
    CdrSelect,
  },
  props: {
    /**
     * Total number of pages. Sometimes the total number of pages is different than total page data
     * and this prop allows for that.
     */
    totalPages: {
      type: Number,
      default: null,
    },
    /**
     * Array of objects. Objects have structure of { page: Number, url: String }
     */
    pages: {
      type: Array,
      required: true,
      validator: /* istanbul ignore next */ (value) => {
        const result = value.every((obj) => {
          if (!Object.prototype.hasOwnProperty.call(obj, 'page')
          || typeof obj.page !== 'number') {
            console.error('Property "page" is missing or is not a number', obj); // eslint-disable-line
            return false;
          } if (!Object.prototype.hasOwnProperty.call(obj, 'url')
          || typeof obj.url !== 'string') {
            console.error('Property "url" is missing or is not a string', obj); // eslint-disable-line
            return false;
          }
          return true;
        });
        return result;
      },
    },
    /** @ignore used for binding v-model, represents the current page */
    value: {
      type: Number,
    },
  },
  data() {
    return {
      currentUrl: '',
    };
  },
  computed: {
    totalPageData() {
      return this.pages.length;
    },
    prevPageIdx() {
      return this.currentIdx - 1;
    },
    nextPageIdx() {
      return this.currentIdx + 1;
    },
    currentIdx() {
      return this.pages.map(x => x.page).indexOf(this.value);
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
      const total = this.totalPageData;
      const current = this.value;
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
    value(v) {
      this.currentUrl = this.pages[this.currentIdx].url;
    },
  },
  mounted() {
    this.currentUrl = this.pages[this.currentIdx].url;
  },
  methods: {
    navigate(num, e) {
      this.$emit('change', num, e);
      this.$emit('input', num, e);
    },
    select(url, url2, e) {
      const idx = this.pages.map(x => x.url).indexOf(url);
      const n = this.pages[idx].page;
      this.$emit('select-change', url, e);
      this.navigate(n, e);
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

<style lang="scss" module>
  @import './styles/CdrPagination.scss';
</style>
