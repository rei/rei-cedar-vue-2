<template>
  <component
    :is="tag"
    :class="[modifierClass, ctaClass, fullWidthClass]"
    :type="tag === 'button' ? type : null"
    :tabindex="tag === 'button' ? null: 0"
    @click="onClick"
  ><slot
  /><icon-caret-right
    class="cdr-button__icon"
  />
  </component>
</template>

<script>
import buttonBase from 'mixinsdir/buttonBase';
import modifier from 'mixinsdir/modifier';
import classNameModifier from 'srcdir/utils/classNameModifier';
import { IconCaretRight } from '@rei/cdr-icon';

export default {
  name: 'CdrCta',
  components: {
    IconCaretRight,
  },
  mixins: [buttonBase, modifier],
  props: {
    ctaStyle: {
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
      return classNameModifier(this.baseClass, this.ctaStyle);
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrCta.pcss';
</style>
