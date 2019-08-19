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
import BuildClass from 'mixinsdir/buildClass';
import propValidator from 'srcdir/utils/propValidator';

export default {
  name: 'CdrCta',
  mixins: [modifier, space, BuildClass],
  props: {
    /**
      * Change the color of the cdr-cta button match different themes.
      */
    ctaStyle: {
      type: String,
      default: 'dark',
      validator: value => (['brand', 'dark', 'light', 'sale'].indexOf(value) >= 0) || false,
    },
    /**
     * Sets width to be 100%.
    */
    fullWidth: {
      type: [Boolean, String],
      default: false,
      validator: (value) => {
        if (typeof value === 'string') {
          return propValidator(
            value,
            ['fullWidth'],
          );
        }
        return typeof value === 'boolean';
      },
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
      if (typeof this.fullWidth === 'boolean') {
        return this.fullWidth && !this.iconOnly
          ? this.modifyClassName(this.baseClass, 'full-width') : null;
      }

      return this.buildClass('fullWidth');
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
