<template>
  <component
    :is="tag"
    :class="[blockClass, ctaClass, fullWidthClass]"
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
    ctaStyle: {
      type: String,
      default: 'brand',
      validator: value => (['brand', 'dark', 'light', 'sale'].indexOf(value) >= 0) || false,
    },
  },
  computed: {
    ctaClass() {
      return this.modifierClass(`cta-${this.ctaStyle}`);
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrCta.pcss';
</style>
