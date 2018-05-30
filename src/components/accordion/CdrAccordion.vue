<template>
  <div
    :class="[modifierClass]"
  >
    <div
      role="group"
      :aria-labelledby="`${id}-label`"
    >

      <button
        class="cdr-accordion__button"
        :id="id"
        @click="toggle"
        :aria-expanded="`${show}`"
        :aria-controls="`${id}-collapsible`"
        v-bind="$attrs"
        modifier="link"
      >
        <label
          class="cdr-accordion__label"
          :id="`${id}-label`">
          <!-- <span class="sr-only">
            {{ a11yPrefix }}
          </span> -->
          {{ label }}
        </label>

        <icon-caret-down class="cdr-accordion__icon" />
      </button>

    </div>

    <div
      class="cdr-accordion__content"
      :show="show"
      :aria-hidden="`${!show}`"
      :id="`${id}-collapsible`"
    >
      <slot/>
    </div>

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
    initShow: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    show: true,
  }),
  computed: {
    baseClass() {
      return 'cdr-accordion';
    },
    a11yPrefix() {
      console.log('allyPrefix');
      return this.show ? 'Hide' : 'Show';
    },
    init() {
      console.log('init function');
      return false;
    },
  },
  beforeMount: () => {
    console.log('beforeMount initShow val', this.initShow);
  },
  mounted: () => {
    console.log('mounted', this.initShow);
  },
  methods: {
    toggle() {
      console.log('hello');
      console.log('toggle init show', this.initShow);
      this.show = !this.show;
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrAccordion.pcss';
</style>
