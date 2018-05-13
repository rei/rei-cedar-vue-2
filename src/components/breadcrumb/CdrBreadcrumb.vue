<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <ul id="breadcrumb-container">
    <li
      :if="items.length > 0"
      v-for="(item, index) in items"
      :key="item.id">
      <a>Test</a>
      <span
        :if="index < items.length - 1"
      > / </span>
    </li>
  </ul>
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
  // computed: {
  //   filteredItems: () =>
  //     // Modify collection so that it does not span more than
  //     // 80% of the screen width.
  //     this.items
  //   ,
  // },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrBreadcrumb.pcss';
</style>
