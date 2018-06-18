<template>
  <div class="cdr-accordion-group">
    <!-- @slot default -->
    <slot />
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrAccordionGroup',
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
