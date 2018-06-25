<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable vue/require-v-for-key -->

  <nav
    ref="container"
    :class="modifierClass"
    aria-label="Breadcrumb">
    <ol
      ref="cdrBreadcrumbList"
      :class="$style['cdr-breadcrumb__list']">
      <li
        v-if="truncate"
        @click="shouldTruncate = false"
        :class="$style['cdr-breadcrumb__item']">
        <cdr-icon-only-button
          aria-expanded="false"
          aria-label="ellipsis"
          :class="[$style['cdr-breadcrumb__link'], $style['cdr-breadcrumb__ellipses']]">
          <!-- <cdr-icon :class="$style['cdr-breadcrumb__ellipses-icon']">
            <path d=""/>
          </cdr-icon> -->
          <svg
            :class="$style['cdr-breadcrumb__ellipses-icon']"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <title>
              ellipsis
            </title>
            <path d="M17.5 22a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM12 22a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
          </svg>
        </cdr-icon-only-button>
        <span
          :class="$style['cdr-breadcrumb__delimiter']"
          aria-hidden="true">
          /
        </span>
      </li>
      <li
        :class="$style['cdr-breadcrumb__item']"
        v-for="(breadcrumb, index) in items"
        v-show="!truncate || (index >= items.length - 2)"
      >
        <a
          :class="$style['cdr-breadcrumb__link']"
          :href="breadcrumb.item.url">
          {{ breadcrumb.item.name }}
        </a>
        <span
          :class="$style['cdr-breadcrumb__delimiter']"
          aria-hidden="true"
          v-if="index < items.length - 1">
          /
        </span>
      </li>
    </ol>
  </nav>
</template>

<script>
/**
 * Cedar 2 component for breadcrumb
 *
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */

import modifier from 'mixinsdir/modifier';
import breakpoints from 'mixinsdir/breakpoints';
// import CdrIcon from 'componentsdir/icon/CdrIcon';
import CdrIconOnlyButton from 'componentsdir/iconOnlyButton/CdrIconOnlyButton';
import debounce from 'lodash/debounce';

export default {
  name: 'CdrBreadcrumb',
  components: {
    CdrIconOnlyButton,
    // CdrIcon,
  },
  mixins: [modifier, breakpoints],
  props: {
    /**
     * Required. List of source breadcrumb property objects
     *
     * {
     *   displayText: Breadcrumb Display Text
     *   url: location breadcrumb should navigate on click
     * }
     */
    items: {
      type: Array,
      default: () => [],
      validator: (value) => {
        if (value.length && value.length > 0) {
          for (let i = 0; i < value.length; i += 1) {
            if (!(typeof value[i].item === 'object')) {
              console.error('Breadcrumb items array missing item key at index ', i); // eslint-disable-line no-console
              return false;
            }
            if (!Object.hasOwnProperty.call(value[i].item, 'name')) {
              console.error('Breadcrumb items array is missing item.name value at index ', i); // eslint-disable-line no-console
              return false;
            }
          }
        }
        return true;
      },
    },
    /**
     * Flag to track container width threshold exceeded
     */
    truncationEnabled: {
      type: Boolean,
      default: true,
    },
    /**
     * Value for max breadcrumb width to container width
     * ratio before truncation is performed
     */
    truncationThreshold: {
      type: Number,
      default: 0.8,
    },
    /**
     * Value for max breadcrumb width to container width
     * ratio before truncation is performed on XS breakpoint
     */
    truncationXSThreshold: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      thresholdExceeded: false,
      shouldTruncate: this.truncationEnabled,
      breadcrumbWidth: 0,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-breadcrumb';
    },
    truncate() {
      return this.shouldTruncate && this.thresholdExceeded;
    },
  },
  mounted() {
    this.breadcrumbWidth = this.getBreadcrumbWidth();
    this.thresholdExceeded = this.calculateTruncation();
    window.addEventListener('resize', debounce(() => {
      this.thresholdExceeded = this.calculateTruncation();
    }, 250));
  },
  methods: {
    getBreadcrumbWidth() {
      const breadcrumbsElements = Array.from(this.$refs.cdrBreadcrumbList.children);
      let totalWidth = 0;
      breadcrumbsElements.forEach((element) => {
        totalWidth += element.offsetWidth || 0;
      });
      return totalWidth;
    },
    calculateTruncation() {
      const containerWidth = this.$refs.container.offsetWidth || 0;
      const ratio = this.breadcrumbWidth / containerWidth || 0;
      if (this.isXS()) {
        return (ratio > this.truncationXSThreshold);
      }
      return (ratio > this.truncationThreshold);
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrBreadcrumb.pcss';
</style>
