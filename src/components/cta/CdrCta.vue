<template>
  <a
    :class="[
      modifierClass,
      ctaClass,
      fullWidthClass,
      space
    ]"
    :target="target"
    :rel="computedRel"
    :href="href"
  >
    <!-- @slot innerHTML on the inside of the cta component -->
    <slot />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="presentation"
      :class="$style['cdr-cta__icon']"
    >
      <!-- eslint-disable-next-line -->
      <path d="M16 12a.997.997 0 0 0-.288-.702l-5.005-5.005a1 1 0 0 0-1.414 1.414L13.585 12 9.29 16.295a1 1 0 0 0 1.417 1.412l4.98-4.98A.997.997 0 0 0 16 12z" />
    </svg>
  </a>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import space from 'mixinsdir/space';
import fullWidth from 'mixinsdir/fullWidth';

export default {
  name: 'CdrCta',
  mixins: [modifier, space, fullWidth],
  props: {
    /**
      * Change the color of the cdr-cta button match different themes.
      */
    ctaStyle: {
      type: String,
      default: 'dark',
      validator: value => (['brand', 'dark', 'light', 'sale'].indexOf(value) >= 0) || false,
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
    computedRel() {
      if (this.target === '_blank') {
        return this.rel || 'noopener noreferrer';
      }
      return this.rel;
    },
  },
};
</script>

<style lang="scss" module>
  @import './styles/vars/CdrCta.vars.scss';
  @import './styles/CdrCta.scss';
</style>
