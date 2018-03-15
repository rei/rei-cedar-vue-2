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
 * Cedar 2 component for icons
 * **NOTE:** Can only be used with an SVG symbol sprite.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
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
