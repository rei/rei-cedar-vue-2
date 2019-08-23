import { IconCaretLeft, IconCaretRight } from '../icon/build/main';
import { CdrSelect } from '../select/CdrSelect'; // TODO:: is this shakeable?
import clsx from 'clsx';
import style from './styles/CdrPagination.scss';

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
      style,
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
    prevEl() {
      return this.value > this.pages[0].page ? (
        <li>
          <a
            class={clsx(
              this.style['cdr-pagination__link'],
              this.style['cdr-pagination__prev'],
            )}
            href={this.pages[this.prevPageIdx].url}
            aria-label="Go to previous Page"
            onClick={e => this.navigate(this.pages[this.prevPageIdx].page, e)}
            ref="prev-link"
          >
            <icon-caret-left
              class={this.style['cdr-pagination__caret--prev']}
            />
            Prev
          </a>
        </li>
      ) : '';
    },
    nextEl() {
      return this.value < this.pages[this.totalPageData - 1].page ? (
        <li>
          <a
            class={clsx(
              this.style['cdr-pagination__link'],
              this.style['cdr-pagination__next'],
            )}
            href={this.pages[this.nextPageIdx].url}
            aria-label="Go to next page"
            onClick={e => this.navigate(this.pages[this.nextPageIdx].page, e)}
            ref="next-link"
          >
            Next
            <icon-caret-right
              class={this.style['cdr-pagination__caret--next']}
            />
          </a>
        </li>
      ) : '';
    },
    desktopEl() {
      return this.paginationData.map(n => (
          <li
            key={`${n}-${this.guid()}`}
            class={this.style['cdr-pagination__li--links']}
          >
            {n !== '&hellip;'
              ? <a
                class={clsx(
                  this.style['cdr-pagination__link'],
                  { current: n.page === this.value },
                )}
                href={n.url}
                aria-label={
                  n.page === this.value
                    ? `Current page, page ${n.page}`
                    : `Go to page ${n.page}`
                }
                aria-current={n.page === this.value}
                onClick={e => this.navigate(n.page, e)}
              >{ n.page }</a>
              : <span
                class={this.style['cdr-pagination__ellipse']}
                domPropsInnerHTML={n}
              />
            }
          </li>
      )); // ??.join('');
    },
    mobileEl() {
      return (
        <li class={this.style['cdr-pagination__li--select']}>
          <cdr-select
            vModel={this.currentUrl}
            label="Navigate to page"
            hide-label
            onChange={this.select}
            class={this.style['cdr-pagination__select']}
            ref="select"
          >
            {this.paginationData.map(n => n !== '&hellip;'
              && (<option
                key={`${n}-${this.guid()}`}
                value={n.url}
              >
                Page { n.page }{ this.totalPages === null ? '' : ` of ${this.totalPages}` }
              </option>))}
          </cdr-select>
        </li>
      );
    },
  },
  watch: {
    value() {
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
    select(url, e) {
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
  render() {
    return (
      <nav aria-label="Pagination Navigation">
        <ul class={this.style['cdr-pagination']}>
          {this.prevEl}
          {this.desktopEl}
          {this.mobileEl}
          {this.nextEl}
        </ul>
      </nav>
    );
  },
};
