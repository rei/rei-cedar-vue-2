<template>
  <component
    :is="tag"
    :class="[blockClass, ctaClass, fullWidthClass]"
    :type="tag === 'button' ? type : null"
    :tabindex="tag === 'button' ? null: 0"
    @click="onClick"
  ><slot
  /><icon-caret-right
  />
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
    ctaStyle: {
      type: String,
      default: 'brand',
      validator: value => (['brand', 'dark', 'light', 'sale'].indexOf(value) >= 0) || false,
    },
  },
  computed: {
    blockClass() {
      return 'cdr-cta';
    },
    ctaClass() {
      return this.modifierClass(`${this.ctaStyle}`);
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrCta.pcss';
</style>
