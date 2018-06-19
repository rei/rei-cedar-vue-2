<template>
  <div class="cdr-accordion">
    <!-- @slot default -->
    <slot />
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrAccordion',
  mixins: [modifier],
  props: {
    compact: {
      type: Boolean,
      default: false,
    },
    borderAligned: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
