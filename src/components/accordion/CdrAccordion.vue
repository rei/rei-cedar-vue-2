<template>
  <div
    :class="[modifierClass, compactClass]"
  >
    <div
      role="group"
      :aria-labelledby="`${id}-label`"
    >
      <button
        class="cdr-accordion__button"
        :id="id"
        @click="toggle"
        :aria-expanded="`${isOpen}`"
        :aria-controls="`${id}-collapsible`"
        v-bind="$attrs"
      >
        <label
          class="cdr-accordion__label"
          :id="`${id}-label`">
          <!-- <span class="sr-only">
            {{ a11yPrefix }}
          </span> -->
          {{ label }}
        </label>
        <icon-caret-down
          class="cdr-accordion__icon"
          :class="isOpen ? 'open' : null"
          :modifier="compact ? 'sm' : null" />
      </button>
    </div>
    <transition name="reveal">
      <div
        class="cdr-accordion__content"
        :aria-hidden="`${!isOpen}`"
        :id="`${id}-collapsible`"
      >
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
import { IconCaretDown } from '@rei/cdr-icon';
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrAccordion',
  components: {
    IconCaretDown,
  },
  mixins: [modifier],
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    /** Sets Facet Initial Display State  */
    show: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      isOpen: this.show,
    }
  },
  computed: {
    baseClass() {
      return 'cdr-accordion';
    },
    compactClass() {
      return this.compact ? this.modifyClassName(this.baseClass, 'compact') : null;
    },
    a11yPrefix() {
      return this.isOpen ? 'Hide' : 'Show';
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrAccordion.pcss';
</style>
