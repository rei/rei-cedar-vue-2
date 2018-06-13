<template>
  <component
    :is="tag"
    :class="[modifierClass, ctaClass, fullWidthClass]"
    :type="tag === 'button' ? type : null"
    :tabindex="tag === 'button' ? null: 0"
    @click="onClick">
    <slot />
    <icon-caret-right :class="$style[`cdr-cta__icon`]" />
  </component>
</template>

<script>
import buttonBase from 'mixinsdir/buttonBase';
import modifier from 'mixinsdir/modifier';
import { IconCaretRight } from '@rei/cdr-icon';

export default {
  name: 'CdrCta',
  components: {
    IconCaretRight,
  },
  mixins: [buttonBase, modifier],
  props: {
    tag: {
      type: String,
      default: 'a',
      validator: value => (['button', 'a'].indexOf(value) >= 0) || false,
    },
    ctaStyle: {
      /**
       * Changes the color of the cdr-cta button match different themes.
       */
      type: String,
      default: 'brand',
      validator: value => (['brand', 'dark', 'light', 'sale'].indexOf(value) >= 0) || false,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-cta';
    },
    ctaClass() {
      return this.modifyClassName(this.baseClass, this.ctaStyle);
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrCta.pcss';
</style>
