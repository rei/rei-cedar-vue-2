<template>
  <div
    class="cdr-accordion"
  >
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
    showAll: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      compact: this.compact,
      borderAligned: this.borderAligned,
      showAll: this.showAll,
    };
  },
};
</script>
