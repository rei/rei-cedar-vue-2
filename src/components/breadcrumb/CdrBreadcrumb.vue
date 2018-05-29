<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <!-- eslint-disable vue/require-v-for-key -->
  <div
    ref="container"
    :class="[modifierClass]">
    <div class="cdr-breadcrumb__ruler">
      <span ref="ruler">
        <span v-for="(item, index) in items">
          <a
            :href="item.url"
            class="cdr-breadcrumb__link">{{ item.displayText }}</a>
          <span
            class="cdr_breadcrumb__delimiter"
            v-if="index < items.length - 1">
          /</span>
        </span>
      </span>
    </div>
    <div class="cdr-breadcrumb-container">
      <span
        v-if="truncate"
      >
        <span class="cdr-breadcrumb__item"><a
          class="cdr-breadcrumb__link"
          href="javascript:void(0)"
          @click="shouldTruncate = false">
        ...</a><span class="cdr-breadcrumb__delimiter">/</span></span><span class="cdr-breadcrumb__item">
          <a
            class="cdr-breadcrumb__link"
            :href="items[items.length - 2]">{{ items[items.length - 2].displayText }}</a>
        <span class="cdr-breadcrumb__delimiter">/</span></span><span class="cdr-breadcrumb__item">
          <a
            class="cdr-breadcrumb__link"
            :href="items[items.length - 1]">{{ items[items.length - 1].displayText }}</a>
        </span>
      </span>
      <span
        v-else
        class="cdr-breadcrumb__item"
        v-for="(item, index) in items">
        <a
          class="cdr-breadcrumb__link"
          :href="item.url">{{ item.displayText }}</a><span
            class="cdr-breadcrumb__delimiter"
            v-if="index < items.length - 1">/</span>
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
    this.thresholdExceeded = this.calculateTruncation();
    window.addEventListener('resize', debounce(() => {
      this.thresholdExceeded = this.calculateTruncation();
    }, 250));
  },
  methods: {
    calculateTruncation() {
      const containerWidth = this.$refs.container.offsetWidth || 0;
      const breadcrumbWidth = this.$refs.ruler.offsetWidth || 0;
      const ratio = breadcrumbWidth / containerWidth || 0;
      return (ratio > this.truncationThreshold);
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrBreadcrumb.pcss';

  .cdr-breadcrumb__ruler {
    visibility: hidden;
    white-space: nowrap;
    height: 1px;
  }
</style>
