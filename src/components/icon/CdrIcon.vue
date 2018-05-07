<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :class="[modifierClass]"
    role="presentation"
  >
    <!-- @slot any valid svg xml -->
    <slot />
    <use
      v-if="use"
      :href="`${use}`"
      :xlink:href="`${use}`"
    />
  </svg>
</template>

<script>
/**
 * Cedar 2 component for icons
 * This component is lower level. Each icon can also be consumed individually via their own component. See sticker sheet for icon names.
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */

import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrIcon',
  mixins: [modifier],
  props: {
    /**
    * The href attribute passed to the use element. Will be prefixed with # automatically
    */
    use: String,
  },
  computed: {
    baseClass() {
      return 'cdr-icon';
    },
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrIcon.pcss';
</style>
