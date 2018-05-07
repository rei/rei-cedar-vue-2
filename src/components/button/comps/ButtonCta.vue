<template>
  <!-- eslint-disable -->
  <cdr-button v-bind="$props">
    <slot />
    Darin
    <icon-caret-right />
  </cdr-button>
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
  computed: {
    ctaClass() {
      return `${this.baseClass}--cta-${this.ctaStyle}`;
    },
  },
};
</script>

<style>
  @import 'cssdir/settings/_index.pcss';
  @import '../styles/CdrButton.pcss';
</style>
