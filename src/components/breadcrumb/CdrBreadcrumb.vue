<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div>
    <div
      :for="{ item, index } in breadcrumbItems"
      :key="index"
    >
      <a href="item.url">{{item.textValue}}</a>
      TEST KRIS
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
    items: [],
    /**
     * Flag to track expand toggle
     */
    isExpanded: false,
  }
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrBreadcrumb.pcss';
</style>
