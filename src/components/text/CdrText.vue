<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <component
    :is="tag"
    :class="[modifierClass]"
  >
    <slot/>
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrText',
  mixins: [modifier],
  props: {
    /** Any valid HTML tag */
    tag: {
      type: String,
      default: 'p',
    },
  },
  computed: {
    baseClass() {
      return 'cdr-text';
    },
  },
};
</script>
