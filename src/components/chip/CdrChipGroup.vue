<template>
  <div :class="[$style[baseClass], $style[typeClass]]">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import propValidator from '../../utils/propValidator';
import { buildClass } from '../../utils/buildClass';

export default defineComponent({
  name: 'CdrChipGroup',
  props: {
    label: {
      type: String,
      required: true,
    },
    hideLabel: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const baseClass = 'cdr-chip-group';
    const typeClass = computed(() => props.type && buildClass(baseClass, props.type));
    return {
      baseClass,
      typeClass,
    };
  },
});
</script>

<style lang="scss" module src="./styles/CdrAlert.scss">
</style>

import style from './styles/CdrChipGroup.scss';

export default {
  name: 'CdrChipGroup',
  props: {
  },
  data() {
    return {
      style,
      chips: [],
      currentIdx: 0,
    };
  },
  computed: {
    nextIdx() {
      const idx = this.currentIdx + 1;
      return idx >= this.chips.length ? 0 : idx; // if at last, go to first
    },
    prevIdx() {
      const idx = this.currentIdx - 1;
      return idx <= -1 ? (this.chips.length - 1) : idx; // if at first, go to last
    },
    legendClass() {
      return this.hideLabel
        ? this.style['cdr-chip-group__legend--hidden']
        : this.style['cdr-chip-group__legend'];
    },
  },
  mounted() {
    // get all of the chips in the group
    this.chips = Array.prototype.filter.call(this.$refs.chips.children,
      (chip) => !(chip.getAttribute('disabled') || chip.getAttribute('aria-disabled')));
    this.currentIdx = Array.prototype.findIndex.call(this.chips,
      (chip) => chip.getAttribute('aria-checked') === 'true');
  },
  methods: {
    handleKeyDown(e) {
      // something besides the button is focused
      if (this.currentIdx === -1) return;

      const { key } = e;
      switch (key) {
        case 'Home':
          e.preventDefault();
          this.chips[0].focus();
          break;
        case 'End':
          e.preventDefault();
          this.chips[this.chips.length - 1].focus();
          break;
        case 'ArrowDown':
        case 'Down':
          e.preventDefault();
          this.chips[this.nextIdx].focus();
          break;
        case 'ArrowUp':
        case 'Up':
          e.preventDefault();
          this.chips[this.prevIdx].focus();
          break;
        default: break;
      }
    },
    focusin(e) {
      // find out which, if any, button is focused
      this.currentIdx = Array.prototype.indexOf.call(this.chips, e.target);
    },
  },
  render() {
    return (<fieldset
      class={this.style['cdr-chip-group']}
      onFocusin={this.focusin}
      onKeydown={this.handleKeyDown}
    >
      <legend class={this.legendClass}>
        {this.$slots.label || this.label}
      </legend>
      <div ref="chips" class={this.style['cdr-chip-group__content']}>
        { this.$slots.default }
      </div>
    </fieldset>);
  },
};
