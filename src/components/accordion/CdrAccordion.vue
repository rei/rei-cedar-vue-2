<template>
  <div>
    <div
      role="group"
      :aria-labelledby="`${id}-label`"
    >

      <button
        class="accordion"
        :id="id"
        @click="toggle"
        :aria-expanded="`${show}`"
        :aria-controls="`${id}-collapsible`"
        v-bind="$attrs"
        modifier="link"
      >

        <label :id="`${id}-label`">
          <span>
            {{ a11yPrefix }}
          </span>
          {{ label }}
        </label>

        <icon-caret-down />

      </button>

    </div>

    {{ initShow }}

    <div
      v-show="show"
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

export default {
  name: 'CdrAccordion',
  components: {
    IconCaretDown,
  },
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
    show: this.initShow,
  }),
  computed: {
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
