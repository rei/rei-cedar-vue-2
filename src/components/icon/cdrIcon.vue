<template>
  <svg
    class="cdr-icon"
    aria-hidden="true"
  >
    <use :xlink:href="url"/>
  </svg>
</template>


<script>
/**
 * **NOTE:** Can only be used with an SVG symbol sprite.
 */
export default {
  name: 'CdrIcon',
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

<style>
  @import 'Css/settings/_index.pcss';
  @import './styles/vars/cdrIcon.vars.pcss';
  @import './styles/cdrIcon.pcss';
</style>
