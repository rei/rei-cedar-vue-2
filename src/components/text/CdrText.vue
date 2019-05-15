<template>
  <!-- disable lint errors on line length in template -->
  <!-- eslint-disable max-len -->
  <component
    :is="tag"
    :class="[modifierClass, space]"
  >
    <slot />
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import space from 'mixinsdir/space';

/**
 * Cedar 2 component for text styles
 * Accepts typography modifiers.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrText',
  mixins: [modifier, space],
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
