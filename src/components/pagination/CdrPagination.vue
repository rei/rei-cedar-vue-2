<template>
  <nav :aria-label="ariaLabel">
    <ol :class="$style['cdr-pagination']">
      <li v-if="innerValue > pages[0].page">
        <component 
          :is="linkTag"
          aria-label="Go to previous page"
          :href="(linkTag === 'a' && prevPageData && prevPageData.url) || undefined"
          :class="mapClasses($style, 'cdr-pagination__link', 'cdr-pagination__prev')"
          @click="(e) => navigate(prevPageData.page, e)"
        >
          <icon-caret-left :class="$style['cdr-pagination_caret--prev']" />
        </component>
      </li>
      <li v-else aria-hidden="true">
        <span
          aria-disabled="true"
          :class="mapClasses($style, 'cdr-pagination__link', 'cdr-pagination__prev', 'cdr-pagination__link--disabled')"
        >
          <icon-caret-left
            :class="$style['cdr-pagination_caret--prev']"
            inherit-color
          />
        </span>
      </li>


      <li
        v-for="n in paginationData"
        :key="`pagination-${id}-li-${n.page}`"
        :class="$style['cdr-pagination__li--links']"
      >
       
        <component 
          v-if="n.page"
          :is="linkTag"
          :class="mapClasses($style, 'cdr-pagination__link', n.page === innerValue && 'cdr-pagination__link--current')"
          :aria-label="n.page === innerValue ? `Current page, page ${n.page}` : `Go to page ${n.page}`"
          :aria-current="n.page === innerValue ? 'page' : null"
          :href="(linkTag === 'a' && n.url) || undefined"
          @click="(e) => navigate(n.page, e)"
        >
          {{ n.page }}
        </component>
        <span v-else :class="$style['cdr-pagination__ellipse']">
          &hellip;
        </span>
      </li>

      <li :class="$style['cdr-pagination__li--select']">
        <cdr-select
          :id="`pagination-select-${id}`"
          v-model="innerValue"
          label="Navigate to page"
          hide-label
          @change="select"
        >
          <option
            v-for="page in paginationData.filter(n => n.page)"
            :key="`pagination-${id}-select-${page.page}`"
            :value="page.page"
          >
            Page {{ page.page }}{{ totalPages === null ? '' : ` of ${totalPages}` }}
          </option> 
        </cdr-select>
      </li>


      <li v-if="innerValue < pages[pages.length - 1].page">
        <component 
          :is="linkTag"
          aria-label="Go to next page"
          :href="(linkTag === 'a' && nextPageData && nextPageData.url) || undefined"
          :class="mapClasses($style, 'cdr-pagination__link', 'cdr-pagination__next')"
          @click="(e) => navigate(nextPageData.page, e)"
        >
          <icon-caret-right :class="$style['cdr-pagination_caret--next']"/>
        </component>
      </li>
      <li v-else aria-hidden="true">
        <span
          aria-disabled="true"
          :class="mapClasses($style, 'cdr-pagination__link', 'cdr-pagination__next', 'cdr-pagination__link--disabled')"
        >
          <icon-caret-right
            :class="$style['cdr-pagination_caret--next']"
            inherit-color
          />
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
import { defineComponent, computed, ref, watch, nextTick, onMounted } from 'vue';
import mapClasses from '../../utils/mapClasses';
import propValidator from '../../utils/propValidator';

import IconCaretLeft from '../icon/comps/caret-left';
import IconCaretRight from '../icon/comps/caret-right';
import CdrSelect from '../select/CdrSelect';

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
  setup(props, ctx) {
    const currentIdx = ref(0);

    const innerValue = computed({
      get: () => props.modelValue,
      set: val => {
        setCurrentIdx(val);
        ctx.emit('update:modelValue', val);
      }
    });

    const setCurrentIdx = (page) => {
      currentIdx.value = props.pages.map((x) => x.page).indexOf(page);
    }

    const navigate = (pageNum, e) => {
      // TODO: provide option to just emit without navigating to support vue-router?
      // Dont do anything if clicking the current active page
      if (pageNum === innerValue.value) {
        e.preventDefault();
        return;
      }
      innerValue.value = pageNum;
      ctx.emit('navigate', pageNum, currentUrl.value, e);

      // TODO: is this still necessary?
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
      console.log('IMPLEMENT ME!', page)
      // TODO: add page links to refs array? better way to do this???
      // $refs[`page-link-${page}-${componentID}`].click();
    }

    const currentUrl = computed(() => props.pages[currentIdx.value].url);
    const ariaLabel = computed(() => props.forLabel || 'Pagination');

    const prevPageData = computed(() => props.pages[currentIdx.value - 1]);
    const nextPageData = computed(() => props.pages[currentIdx.value + 1]);


    const paginationData = computed(() => {
      const total = props.pages.length;
      const current = innerValue.value;
      const delta = 1;
      let range = [];
      let over5 = true;
      let over5remain = true;

      if (total <= 7) {
        // all pages
        return props.pages;
      }

      if (current < 5) {
      // if first 5 pages
        over5 = false;
        // [2-5]
        range = props.pages.slice(1, 5);
      } else if (total - current < 4) {
      // if last 5 pages
        over5remain = false;
        range = props.pages.slice(-5, -1);
      } else {
      // else in between
        for (
          let i = Math.max(2, current - delta);
          i <= Math.min(total - 1, current + delta);
          i += 1
        ) {
          range.push(props.pages[i - 1]);
        }
      }

      if ((current - delta > 2) && over5) {
        range.unshift('&hellip;');
      }
      if ((current + delta < total - 1) && over5remain) {
        range.push('&hellip;');
      }

      range.unshift(props.pages[0]);
      range.push(props.pages[total - 1]);

      return range;
    });

    onMounted(() => setCurrentIdx(innerValue.value));

    watch(() => props.pages, () => setCurrentIdx(innerValue.value))

    return {
      innerValue,
      currentIdx,
      ariaLabel,
      prevPageData,
      nextPageData,
      paginationData,
      select,
      navigate,
      mapClasses,
    };
  },
});

</script>

<style lang="scss" module src="./styles/CdrPagination.scss">
</style>
