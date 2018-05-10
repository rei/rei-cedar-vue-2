<template>
  <!-- eslint-disable -->
  <component
    :is="tag"
    :class="[blockClass, fullWidthClass, ctaClass]"
    :type="tag === 'button' ? type : null"
    @click="onClick"
  >
    <slot />
    <icon-caret-right />
  </component>
</template>

<script>
import CdrButton from 'componentsdir/button/CdrButton';
import { IconCaretRight } from '@rei/cdr-icon';

export default {
  name: 'ButtonCta',
  components: {
    CdrButton,
    IconCaretRight,
  },
  extends: CdrButton,
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
  @import 'cssdir/settings/_index.pcss';
  @import '../styles/CdrButton.pcss';
</style>
