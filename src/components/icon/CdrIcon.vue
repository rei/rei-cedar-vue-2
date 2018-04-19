<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :class="[modifierClass]"
    role="presentation"
  >
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

<style>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrIcon.pcss';
</style>
