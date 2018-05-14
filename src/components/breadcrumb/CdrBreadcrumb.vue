<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div id="breadcrumb-container">
    <div id="expanded">
      <span
        v-for="(item, index) in items"
        :key="index">
        <a
        :href="item.url">{{ item.displayText }}</a>
        <span
          v-if="index < items.length - 1"
        > / </span>
      </span>
    </div>
    <!-- <div id="collapsed">
      <span
        v-for="(item, index) in items"
        :key="index">
        <a
        :href="item.url">{{ item.textValue }}</a>
        <span
          v-if="index < items.length - 1"
        > / </span>
      </span>
    </div> -->
  </div>
</template>

<script>
/**
 * Cedar 2 component for breadcrumb
 *
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrBreadcrumb',
  props: {
    /**
     * Required. List of source breadcrumb property objects
     *
     * {
     *   textValue: Breadcrumb Display Text
     *   url: /product/detailpage
     * }
     */
    items: {
      type: Array,
      default: () => [],
    },
    // items: {
    //   type: Array,
    //   default: () => [],
    // },
    /**
     * Flag to track expand toggle
     */
    isExpanded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // expandedWidth: () =>
    //   // Modify collection so that it does not span more than
    //   // 80% of the screen width.
    //   // console.log('REFS = ', this.$Refs);
    //   // return this.$refs.
    // ,
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrBreadcrumb.pcss';
</style>
