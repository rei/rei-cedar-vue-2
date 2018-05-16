<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div
    ref="container"
    :class="[modifierClass]">
    <div class="ruler">
      <span ref="ruler">
        <span
          v-for="(item, index) in items"
          :key="index">
          <a :href="item.url">{{ item.displayText }}</a>
          <span v-if="index < items.length - 1"> / </span>
        </span>
      </span>
    </div>
    <div>
      <span
        v-if="(!isExpanded) && shouldTruncate"
        class="breadcrumb-container"
      >
        <span
          class="delimiter"
          @click="isExpanded = true">
          ... /
        </span>
        <span class="breadcrumb-item">
          <a :href="items[items.length - 2]">{{ items[items.length - 2].displayText }}</a>
        </span>
        <span class="delimiter"> / </span>
        <span class="breadcrumb-item">
          <a :href="items[items.length - 1]">{{ items[items.length - 1].displayText }}</a>
        </span>
      </span>
      <span
        v-else
        class="breadcrumb-item"
        v-for="(item, index) in items"
        :key="index">
        <a :href="item.url">{{ item.displayText }}</a>
        <span v-if="index < items.length - 1"> / </span>
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
/* eslint-disable */

import modifier from 'mixinsdir/modifier';

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
     * Flag to track expand toggle
     */
    isExpanded: {
      type: Boolean,
      default: false,
    },
    /**
     * Flag to track container width threshold exceeded
     */
    shouldTruncate: {
      type: Boolean,
      default: false,
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
  computed: {
    baseClass() {
      return 'cdr-breadcrumb'
    }
  },
  mounted() {
    this.shouldTruncate = this.calculateTruncation(this.$refs, this.truncationThreshold);
    window.addEventListener('resize', () => {
      this.shouldTruncate = this.calculateTruncation(this.$refs, this.truncationThreshold)
    });
  },
  updated() {
  },
  methods: {
    calculateTruncation: (refs, threshold) => {
      let shouldTruncate = false;
      let containerWidth = refs.container.offsetWidth || 0;
      let breadcrumbWidth = refs.ruler.offsetWidth || 0;
      if(breadcrumbWidth/containerWidth > threshold) {
        shouldTruncate = true;
      }
      return shouldTruncate;
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrBreadcrumb.pcss';

  .ruler {
    visibility: hidden;
    white-space: nowrap;
    height: 1px;
  }
</style>
