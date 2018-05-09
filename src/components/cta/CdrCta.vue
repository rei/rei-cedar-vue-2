<template>
  <component
    :is="tag"
    :class="[blockClass, ctaClass]"
    :type="tag === 'button' ? type : null"
    @click="onClick"
  >
    <!-- @slot innerHTML on the inside of the button component -->
    <slot/>
    <icon-caret-right />
  </component>
</template>

<script>
import buttonBase from 'mixinsdir/buttonBase';
import classModifier from 'mixinsdir/classModifier';
import { IconCaretRight } from '@rei/cdr-icon';

export default {
  name: 'CdrCta',
  components: {
    IconCaretRight,
  },
  mixins: [buttonBase, classModifier],
  props: {
    /**
     * Sets width to be 100%. Can be combined with staticSize.
    */
    fullWidth: {
      type: Boolean,
      default: false,
      validator: value => typeof value === 'boolean',
    },
    ctaStyle: {
      type: String,
      default: 'brand',
      validator: value => (['brand', 'dark', 'light', 'sale'].indexOf(value) >= 0) || false,
    },
  },
  computed: {
    ctaClass() {
      // return this.styleModifiers ? this.modifierClass(this.styleModifiers) : null;
      // return `${this.baseClass}--cta-${this.ctaStyle}`;
      return this.modifierClass(`cta-${this.ctaStyle}`);
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrCta.pcss';
</style>
