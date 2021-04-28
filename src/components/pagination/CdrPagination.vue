<template>
  <nav :ariaLabel="ariaLabel">
    <ol :class="$style['cdr-pagination']">
      const LinkTag = linkTag;
      return innerValue > pages[0].page ? (
        <li>
          {$scopedSlots.prevLink
            ? $scopedSlots.prevLink(prevElAttrs)
            : (<LinkTag
              {... { attrs: prevElAttrs.attrs }}
              href={LinkTag === 'a' && prevElAttrs.href}
              ref={prevElAttrs.attrs.ref}
              onClick={prevElAttrs.click}
            >
              <prevElAttrs.iconComponent
                class={prevElAttrs.iconClass}
              />
              {prevElAttrs.content}
            </LinkTag>)
          }
        </li>
      ) : (
        <li aria-hidden="true">
          <span
            aria-disabled="true"
            class={[
              prevElAttrs.attrs.class,
              style['cdr-pagination__link--disabled'],
            ]}
          >
            <prevElAttrs.iconComponent
              class={prevElAttrs.iconClass}
              inherit-color
            />
            {prevElAttrs.content}
          </span>
        </li>
      );


      <li
        v-for="n in paginationData"
        :key={`${n}-${guid()}`}
        :class={style['cdr-pagination__li--links']}
      >
        {n === '&hellip;'
          && <span
            class={style['cdr-pagination__ellipse']}
            domPropsInnerHTML={n}
          />
        }
        {n !== '&hellip;' && renderLinkEl(n) }
      </li>

      <li class={style['cdr-pagination__li--select']}>
        <cdr-select
          vModel={innerValue}
          label="Navigate to page"
          hide-label
          onChange={select}
          ref={`select-${componentID}`}
          id={`select-${componentID}`}
        >
          {paginationData.map((n) => n !== '&hellip;'
            && (<option
              key={`${n}-${guid()}`}
              value={n.page}
            >
              Page { n.page }{ totalPages === null ? '' : ` of ${totalPages}` }
            </option>))}
        </cdr-select>
      </li>

      const LinkTag = linkTag;
      return innerValue < pages[pages.length - 1].page ? (
        <li>
          {$scopedSlots.nextLink
            ? $scopedSlots.nextLink(nextElAttrs)
            : (<LinkTag
              {... { attrs: nextElAttrs.attrs }}
              href={LinkTag === 'a' && nextElAttrs.href}
              ref={nextElAttrs.attrs.ref}
              onClick={nextElAttrs.click}
            >
              {nextElAttrs.content}
              <nextElAttrs.iconComponent
                class={nextElAttrs.iconClass}
              />
            </LinkTag>)
          }

        </li>
      ) : (
        <li aria-hidden="true">
          <span
            aria-disabled="true"
            class={[
              nextElAttrs.attrs.class,
              style['cdr-pagination__link--disabled'],
            ]}
            >
            {nextElAttrs.content}
            <nextElAttrs.iconComponent
              class={nextElAttrs.iconClass}
              inherit-color
            />
          </span>
        </li>
      );
    </ol>
  </nav>
</template>

<script>
import { defineComponent, computed, ref, watchEffect, nextTick } from 'vue';
import propValidator from '../../utils/propValidator';
import { buildClass } from '../../utils/buildClass';

import IconCaretLeft from '../icon/comps/caret-left';
import IconCaretRight from '../icon/comps/caret-right';
import CdrSelect from '../select/CdrSelect';
import propValidator from '../../utils/propValidator';
import style from './styles/CdrPagination.scss';

export default defineComponent({
  name: 'CdrPagination',
  components: {
    IconCaretLeft,
    IconCaretRight,
    CdrSelect,
  },
  props: {
    // NOTE pagination now requires an ID
    id: {
      type: String,
      required: true,
    },
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
    linkTag: {
      type: String,
      default: 'a',
      validator: (value) => propValidator(
        value,
        ['a', 'button'],
      ),
    },
    forLabel: {
      type: String,
      default: '',
    },
    /** @ignore used for binding v-model, represents the current page */
    modelValue: {
      type: Number,
    },
  },
  // methods: {

  //   renderLinkEl(n) {
  //     const linkData = {
  //       // things that we want to be able to easily bulk bind to scoped slot (for a11y, styling, etc.)
  //       attrs: {
  //         class: clsx(style['cdr-pagination__link'], { current: n.page === innerValue }),
  //         'aria-label': n.page === innerValue
  //           ? `Current page, page ${n.page}`
  //           : `Go to page ${n.page}`,
  //         'aria-current': n.page === innerValue ? 'page' : null,
  //         ref: `page-link-${n.page}-${componentID}`,
  //       },
  //       // The rest of this is available for binding if needed by user (i.e. optional with vue-router)
  //       href: n.url,
  //       click: (e) => navigate(n.page, e),
  //       page: n.page,
  //       content: n.page,
  //     };
  //
  //     const LinkTag = linkTag;
  //     return ($scopedSlots.link ? $scopedSlots.link(linkData)
  //       : <LinkTag
  //         {... { attrs: linkData.attrs } }
  //         href={LinkTag === 'a' && linkData.href}
  //         onClick={linkData.click}
  //         ref={linkData.attrs.ref}
  //       >{ linkData.content }</LinkTag>
  //     );
  //   },
  // },
  setup() {

    const baseClass = 'cdr-pagination';
    const componentID = ref(Math.random().toString(36).substr(2, 9));
    const currentIdx = ref(0);

    const setCurrentIdx = (page) => {
      currentIdx = pages.map((x) => x.page).indexOf(page);
    }
    const navigate = (pageNum, e) => {
      // Dont do anything if clicking the current active page
      if (pageNum === innerValue) {
        e.preventDefault();
        return;
      }
      innerValue = pageNum;
      ctx.emit('navigate', pageNum, currentUrl, e);

      nextTick(() => {
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
    }
    const select = (page, e) => {
      e.preventDefault();
      // TODO: how to tell if slot is scoped or not??????????
      // how is this code so weird :( why did we do this :|
      // can we just drop support for this mess o_o
      if ($scopedSlots.link) {
        const ref = $scopedSlots.link()[0].context.$refs[`page-link-${page}-${componentID}`]; // eslint-disable-line max-len
        if (ref.$el) { // it's a component (like vue-router)
          ref.$el.click();
        } else { // it's standard markup
          ref.click();
        }
      } else {
        $refs[`page-link-${page}-${componentID}`].click();
      }
    }

    const innerValue = computed({
      get: () => modelValue,
      set: val => {
        setCurrentIdx(val);
        ctx.emit('update:modelValue', val);
      }
    });

    const currentUrl = computed(() => pages[currentIdx].url);
    const prevPageIdx = computed(() => currentIdx - 1);
    const nextPageIdx = computed(() => currentIdx + 1);
    const ariaLabel = computed(() => forLabel || 'Pagination');
    const prevElAttrs = computed(() => {
      const prevPageData = pages[prevPageIdx];
      return {
        // things that we want to be able to easily bulk bind to scoped slot (for a11y, styling, etc.)
        attrs: {
          // TODO: how to pass mappedClasses to scoped slot????
          class: ['cdr-pagination__link', 'cdr-pagination__prev'],
          'aria-label': 'Go to previous Page',
          ref: `prev-link-${componentID}`,
        },
        // The rest of this is available for binding if needed by user (i.e. optional with vue-router)
        href: prevPageData === undefined ? null : prevPageData.url,
        page: prevPageData === undefined ? null : prevPageData.page,
        content: 'Prev',
        iconClass: 'cdr-pagination__caret--prev',
        iconComponent: 'icon-caret-left',
        iconPath: '#caret-left',
        click: (e) => navigate(prevPageData.page, e),
      };
    });
    const nextElAttrs = computed(() => {
      const nextPageData = pages[nextPageIdx];
      return {
        // things that we want to be able to easily bulk bind to scoped slot (for a11y, styling, etc.)
        attrs: {
          class: ['cdr-pagination__link', 'cdr-pagination__next'],
          'aria-label': 'Go to next page',
          ref: `next-link-${componentID}`,
        },
        // The rest of this is available for binding if needed by user (i.e. optional with vue-router)
        href: nextPageData === undefined ? null : nextPageData.url,
        page: nextPageData === undefined ? null : nextPageData.page,
        content: 'Next',
        iconClass: 'cdr-pagination__caret--next',
        iconComponent: 'icon-caret-right',
        iconPath: '#caret-right',
        click: (e) => navigate(nextPageData.page, e),
      };
    });

    const paginationData = computed(() => {
      const total = pages.length;
      const current = innerValue;
      const delta = 1;
      let range = [];
      let over5 = true;
      let over5remain = true;

      if (total <= 7) {
        // all pages
        return pages;
      }

      if (current < 5) {
      // if first 5 pages
        over5 = false;
        // [2-5]
        range = pages.slice(1, 5);
      } else if (total - current < 4) {
      // if last 5 pages
        over5remain = false;
        range = pages.slice(-5, -1);
      } else {
      // else in between
        for (
          let i = Math.max(2, current - delta);
          i <= Math.min(total - 1, current + delta);
          i += 1
        ) {
          range.push(pages[i - 1]);
        }
      }

      if ((current - delta > 2) && over5) {
        range.unshift('&hellip;');
      }
      if ((current + delta < total - 1) && over5remain) {
        range.push('&hellip;');
      }

      range.unshift(pages[0]);
      range.push(pages[total - 1]);

      return range;
    });

    setCurrentIdx(innerValue);

    watchEffect((pages) => setCurrentIdx(innerValue))

    return {
      baseClass,
      componentID,
      currentIdx,
    };
  },
});

</script>

<style lang="scss" module src="./styles/CdrPagination.scss">
</style>
