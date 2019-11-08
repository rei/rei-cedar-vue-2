import clsx from 'clsx';
import IconCaretLeft from '../icon/comps/caret-left';
import IconCaretRight from '../icon/comps/caret-right';
import CdrSelect from '../select/CdrSelect';
import style from './styles/CdrPagination.scss';

const hasWindowSupport = typeof window !== 'undefined';
const w = hasWindowSupport ? window : {};
const requestAF = w.requestAnimationFrame
  || w.webkitRequestAnimationFrame
  || w.mozRequestAnimationFrame
  || w.msRequestAnimationFrame
  || w.oRequestAnimationFrame
  // Fallback, but not a true polyfill
  // Only needed for Opera Mini
  /* istanbul ignore next */
  || (cb => setTimeout(cb, 16));

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
      validator: (value) => {
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
      style,
      componentID: Math.random().toString(36).substr(2, 9),
    };
  },
  computed: {
    // track value internally (for use with select vmodel) and update external value when internal changes
    innerValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
    currentUrl() {
      return this.pages[this.currentIdx].url;
    },
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
      return this.pages.map(x => x.page).indexOf(this.innerValue);
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
      const current = this.innerValue;
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
    prevElAttrs() {
      return {
        // things that we want to be able to easily bulk bind to scoped slot (for a11y, styling, etc.)
        attrs: {
          class: clsx(this.style['cdr-pagination__link'], this.style['cdr-pagination__prev']),
          'aria-label': 'Go to previous Page',
          ref: `prev-link-${this.componentID}`,
        },
        // The rest of this is available for binding if needed by user (i.e. optional with vue-router)
        href: this.pages[this.prevPageIdx].url,
        page: this.pages[this.prevPageIdx].page,
        content: 'Prev',
        iconClass: this.style['cdr-pagination__caret--prev'],
        iconComponent: 'icon-caret-left',
        iconPath: '#caret-left',
        click: e => this.navigate(this.pages[this.prevPageIdx].page, e),
      };
    },
    prevEl() {
      return this.innerValue > this.pages[0].page ? (
        <li>
          {this.$scopedSlots.prevLink
            ? this.$scopedSlots.prevLink(this.prevElAttrs)
            : (<a
              {... { attrs: this.prevElAttrs.attrs }}
              href={this.prevElAttrs.href}
              ref={this.prevElAttrs.attrs.ref}
              onClick={this.prevElAttrs.click}
            >
              <this.prevElAttrs.iconComponent
                class={this.prevElAttrs.iconClass}
              />
              {this.prevElAttrs.content}
            </a>)
          }
        </li>
      ) : '';
    },
    nextElAttrs() {
      return {
        // things that we want to be able to easily bulk bind to scoped slot (for a11y, styling, etc.)
        attrs: {
          class: clsx(this.style['cdr-pagination__link'], this.style['cdr-pagination__next']),
          'aria-label': 'Go to next page',
          ref: `next-link-${this.componentID}`,
        },
        // The rest of this is available for binding if needed by user (i.e. optional with vue-router)
        href: this.pages[this.nextPageIdx].url,
        page: this.pages[this.nextPageIdx].page,
        content: 'Next',
        iconClass: this.style['cdr-pagination__caret--next'],
        iconComponent: 'icon-caret-right',
        iconPath: '#caret-right',
        click: e => this.navigate(this.pages[this.nextPageIdx].page, e),
      };
    },
    nextEl() {
      return this.innerValue < this.pages[this.totalPageData - 1].page ? (
        <li>
          {this.$scopedSlots.nextLink
            ? this.$scopedSlots.nextLink(this.nextElAttrs)
            : (<a
              {... { attrs: this.nextElAttrs.attrs }}
              href={this.nextElAttrs.href}
              ref={this.nextElAttrs.attrs.ref}
              onClick={this.nextElAttrs.click}
            >
              {this.nextElAttrs.content}
              <this.nextElAttrs.iconComponent
                class={this.nextElAttrs.iconClass}
              />
            </a>)
          }

        </li>
      ) : '';
    },
    desktopEl() {
      return this.paginationData.map(n => (
          <li
            key={`${n}-${this.guid()}`}
            class={this.style['cdr-pagination__li--links']}
          >
            {n === '&hellip;'
              && <span
                class={this.style['cdr-pagination__ellipse']}
                domPropsInnerHTML={n}
              />
            }
            {n !== '&hellip;' && this.renderLinkEl(n) }
          </li>
      ));
    },
    mobileEl() {
      return (
        <li class={this.style['cdr-pagination__li--select']}>
          <cdr-select
            vModel_number={this.innerValue}
            label="Navigate to page"
            hide-label
            onChange={this.select}
            class={this.style['cdr-pagination__select']}
            ref={`select-${this.componentID}`}
          >
            {this.paginationData.map(n => n !== '&hellip;'
              && (<option
                key={`${n}-${this.guid()}`}
                value={n.page}
              >
                Page { n.page }{ this.totalPages === null ? '' : ` of ${this.totalPages}` }
              </option>))}
          </cdr-select>
        </li>
      );
    },
  },
  methods: {
    navigate(pageNum, e) {
      // Dont do anything if clicking the current active page
      if (pageNum === this.innerValue) {
        return;
      }
      requestAF(() => {
        // Update the v-model
        // Done in in requestAF() to allow browser to complete the
        // native browser click handling of a link
        this.innerValue = pageNum;
        this.$emit('navigate', pageNum, this.currentUrl, e);
      });
      this.$nextTick(() => {
        // Done in a nextTick() to ensure rendering complete
        try {
          // Emulate native link click page reloading behaviour by blurring the
          // paginator and returning focus to the document
          const target = e.currentTarget || e.target;
          target.blur();
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      });
    },
    select(page, e) {
      e.preventDefault();
      if (this.$scopedSlots.link) {
        const ref = this.$scopedSlots.link()[0].context.$refs[`page-link-${page}-${this.componentID}`];
        if (ref.$el) { // it's a component (like vue-router)
          ref.$el.click();
        } else { // it's standard markup
          ref.click();
        }
      } else {
        this.$refs[`page-link-${page}-${this.componentID}`].click();
      }
    },
    guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
    },
    renderLinkEl(n) {
      const linkData = {
        // things that we want to be able to easily bulk bind to scoped slot (for a11y, styling, etc.)
        attrs: {
          class: clsx(this.style['cdr-pagination__link'], { current: n.page === this.innerValue }),
          'aria-label': n.page === this.innerValue
            ? `Current page, page ${n.page}`
            : `Go to page ${n.page}`,
          'aria-current': n.page === this.innerValue ? 'page' : null,
          ref: `page-link-${n.page}-${this.componentID}`,
        },
        // The rest of this is available for binding if needed by user (i.e. optional with vue-router)
        href: n.url,
        click: e => this.navigate(n.page, e),
        page: n.page,
        content: n.page,
      };

      return (this.$scopedSlots.link ? this.$scopedSlots.link(linkData)
        : <a
          {... { attrs: linkData.attrs } }
          href={linkData.href}
          onClick={linkData.click}
          ref={linkData.attrs.ref}
        >{ linkData.content }</a>
      );
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
