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
          <icon-more-functions :class="$style['cdr-breadcrumb__ellipses-icon']" />
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
import { IconMoreFunctions } from '@rei/cdr-icon';
import CdrIconOnlyButton from 'componentsdir/iconOnlyButton/CdrIconOnlyButton';
import debounce from 'lodash/debounce';

export default {
  name: 'CdrBreadcrumb',
  components: {
    CdrIconOnlyButton,
    IconMoreFunctions,
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
      console.log('KRIS cdrBreadcrumb = ', this.$refs.cdrBreadcrumbList);
      const breadcrumbsElements = Array.from(this.$refs.cdrBreadcrumbList.children);
      console.log('KRIS breadcrumbArray = ', breadcrumbsElements);
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
