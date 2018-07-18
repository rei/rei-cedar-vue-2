<template>
  <a
    :class="[modifierClass, ctaClass, fullWidthClass]"
    :target="target"
    :rel="computedRel"
    :href="href"
  >
    <!-- @slot innerHTML on the inside of the cta component -->
    <slot />
    <icon-caret-right :class="$style[`cdr-cta__icon`]" />
  </a>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import { IconCaretRight } from '@rei/cdr-icon';
import '@rei/cdr-icon/dist/cdr-icon.css';

export default {
  name: 'CdrCta',
  components: {
    IconCaretRight,
  },
  mixins: [modifier],
  props: {
    /**
      * Change the color of the cdr-cta button match different themes.
      */
    ctaStyle: {
      type: String,
      default: 'brand',
      validator: value => (['brand', 'dark', 'light', 'sale'].indexOf(value) >= 0) || false,
    },
    /**
     * Sets width to be 100%.
    */
    fullWidth: {
      type: Boolean,
      default: false,
      validator: value => typeof value === 'boolean',
    },
    href: {
      type: String,
      default: '#',
    },
    /** @ignore */
    target: String,
    /** @ignore */
    rel: String,
  },
  computed: {
    baseClass() {
      return 'cdr-cta';
    },
    ctaClass() {
      return this.modifyClassName(this.baseClass, this.ctaStyle);
    },
    fullWidthClass() {
      return this.fullWidth && !this.iconOnly ?
        this.modifyClassName(this.baseClass, 'full-width') : null;
    },
    computedRel() {
      if (this.target === '_blank') {
        return this.rel || 'noopener noreferrer';
      }
      return this.rel;
    },
  },
};
</script>

<style module>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrCta.pcss';
</style>
