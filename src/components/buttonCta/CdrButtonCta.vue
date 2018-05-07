<template>
  <component
    :is="tag"
    :class="[baseClass, ctaClass]"
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
import IconCaretRight from '../icon/comps/caret-right';

/**
 * Cedar 2 component for button
 *
 * CdrButton will render either a button, or a anchor that looks like a button.
 * As such, the decision to use CdrButton vs CdrAnchor should be made based on what
 * you need the rendered element to look like.
 *
 * @version 0.1.0
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrButtonCta',
  components: {
    IconCaretRight,
  },
  mixins: [buttonBase],
  props: {
    /**
     * Sets width to be 100%. Can be combined with staticSize.
    */
    fullWidth: {
      type: Boolean,
      default: false,
      validator: value => typeof value === 'boolean',
    },
    /**
     * Sets CTA Button style. {brand, dark, light, sale}
     */
    ctaStyle: {
      type: String,
      default: 'brand',
      validator: value => (['brand', 'dark', 'light', 'sale'].indexOf(value) >= 0) || false,
    },
  },
  computed: {
    ctaClass() {
      return `${this.baseClass}--cta-${this.ctaStyle}`;
    },
  },
};
</script>

<style>
  @import 'cssdir/settings/_index.pcss';
  @import '../button/styles/CdrButton.pcss';
</style>
