<template>
  <div
    class="cdr-accordion"
  >
    <!-- @slot innerHTML on the inside of the accordion component -->
    <slot />
  </div>
</template>

<script>
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrAccordion',
  mixins: [modifier],
  props: {
    /**
     * Sets a compact style on children cdr-accordion-item components.
     */
    compact: {
      type: Boolean,
      default: false,
    },
    /**
     * Sets a border-aligned style on children cdr-accordion-item comoponents.
     */
    borderAligned: {
      type: Boolean,
      default: false,
    },
    /**
     * Sets the default isOpen state of all children cdr-accordion-item components.
     */
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
