<template>
  <svg class="cdr-icon" aria-hidden="true">
    <use :xlink:href="url"></use>
  </svg>
</template>


<script>
export default {
  name: 'cdr-icon',
  props: {
    /**
     * URL to the svg sprite and icon name. /path/to/svg.svg#icon-name
     */
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

