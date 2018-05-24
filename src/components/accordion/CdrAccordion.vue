<template>
  <div>
    <div
      role="group"
      :aria-labelledby="`${id}-label`"
    >

      <button
        class="accordion"
        :id="id"
        :on-click="toggle"
        :aria-expanded="`${show}`"
        :aria-controls="`${id}-collapsible`"
        v-bind="$attrs"
        slot="preicon"
        modifier="link"
      >

        <label :id="`${id}-label`">
          <span class="sr-only">
            {{ a11yPrefix }}
          </span>
          {{ label }}
        </label>

        <icon-caret-down />

      </button>

    </div>

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
    show: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    accordionIcon() {
      return this.show ? this.iconOpen : this.iconClosed;
    },
    a11yPrefix() {
      return this.show ? 'Hide' : 'Show';
    },
  },
  methods: {
    toggle() {
      // this.show = !this.show;
      console.log('hello');
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrAccordion.pcss';
</style>
