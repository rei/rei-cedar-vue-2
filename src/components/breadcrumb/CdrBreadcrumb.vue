<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable vue/require-v-for-key -->

  <div
    ref="container"
    :class="modifierClass">
    <div class="cdr-breadcrumb-container">
      <span
        v-if="truncate"
      >
        <span :class="$style['cdr-breadcrumb__item']"><button
          :class="[$style['cdr-breadcrumb__link'], $style['cdr-breadcrumb__ellipses']]"
          @click="shouldTruncate = false">...</button><span :class="$style['cdr-breadcrumb__delimiter']">/</span></span><span :class="$style['cdr-breadcrumb__item']">
            <a
              :class="$style['cdr-breadcrumb__link']"
              :href="items[items.length - 2]">{{ items[items.length - 2].displayText }}</a>
        <span :class="$style['cdr-breadcrumb__delimiter']">/</span></span><span :class="$style['cdr-breadcrumb__item']">
          <a
            :class="$style['cdr-breadcrumb__link']"
            :href="items[items.length - 1]">{{ items[items.length - 1].displayText }}</a>
        </span>
      </span>
      <span
        v-else
        ref="fullBreadcrumb">
        <span
          :class="$style['cdr-breadcrumb__item']"
          v-for="(item, index) in items">
          <a
            :class="$style['cdr-breadcrumb__link']"
            :href="item.url">{{ item.displayText }}</a><span
              :class="$style['cdr-breadcrumb__delimiter']"
              v-if="index < items.length - 1">/</span>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
/**
 * Cedar 2 component for breadcrumb
 *
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */

import modifier from 'mixinsdir/modifier';
import debounce from 'lodash/debounce';

export default {
  name: 'CdrBreadcrumb',
  mixins: [modifier],
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
      const breadcrumbsElements = Array.from(this.$refs.fullBreadcrumb.children);
      let totalWidth = 0;
      breadcrumbsElements.forEach((element) => {
        totalWidth += element.offsetWidth || 0;
      });
      return totalWidth;
    },
    calculateTruncation() {
      const containerWidth = this.$refs.container.offsetWidth || 0;
      const ratio = this.breadcrumbWidth / containerWidth || 0;
      return (ratio > this.truncationThreshold);
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrBreadcrumb.pcss';

  .cdr-breadcrumb__ruler {
    visibility: hidden;
    white-space: nowrap;
    height: 1px;
  }
</style>
