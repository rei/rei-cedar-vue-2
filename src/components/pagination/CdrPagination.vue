<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <div>
    Pagination

    <slot v-bind="pageData" />

    <p>
      <a
        v-for="p in totalPages"
        :key="`page${p}`"
        :href="`?pagination=${p}`">{{ p }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CdrPagination',
  props: {
    pageData: {
      type: Array,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrPagination.pcss';
</style>
