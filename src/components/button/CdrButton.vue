<template>
  <component
    :is="tag"
    :class="[modifierClass, sizeClass, fullWidthClass, responsiveClass]"
    :type="tag === 'button' ? type : null"
    @click="onClick"
  >
    <!-- @slot innerHTML on the inside of the button component -->
    <slot/>
  </component>
</template>

<script>
import buttonBase from 'mixinsdir/buttonBase';
import modifier from 'mixinsdir/modifier';

/**
 * Cedar 2 component for button
 *
 * CdrButton will render either a button, or an anchor that looks like a button.
 * As such, the decision to use CdrButton vs CdrAnchor should be made based on what
 * you need the rendered element to look like.
 *
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrButton',
  mixins: [buttonBase, modifier],
  props: {
    /**
     * Sets a static size for the button, which scales padding and text size. {small, medium, large}
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => (['small', 'medium', 'large'].indexOf(value) >= 0) || false,
    },
    /**
     * Render a specific button size at a specific breakpoint. Takes precedence over size and fullWidth.
     * Format is size@breakpoint (ex: large@sm).
     */
    responsiveSize: {
      type: Array,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-button';
    },
    sizeClass() {
      return this.modifyClassName(this.baseClass, this.size);
    },
    responsiveClass() {
      const responsiveClass = [];

      if (this.responsiveSize) {
        this.responsiveSize.forEach((val) => {
          responsiveClass.push(this.modifyClassName(this.baseClass, val));
        });
      }

      return responsiveClass.join(' ');
    },
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrButton.pcss';
</style>
