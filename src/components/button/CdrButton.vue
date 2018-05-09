<template>
  <component
    :is="tag"
    :class="[blockClass, sizeClass, fullWidthClass, responsiveClass, styleModifiersClass]"
    :type="tag === 'button' ? type : null"
    @click="onClick"
  >
    <!-- @slot innerHTML on the inside of the button component -->
    <slot/>
  </component>
</template>

<script>
import classModifier from 'mixinsdir/classModifier';
import buttonBase from 'mixinsdir/buttonBase';

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
  name: 'CdrButton',
  mixins: [buttonBase, classModifier],
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
     * Sets width to be 100%. Can be combined with staticSize.
    */
    fullWidth: {
      type: Boolean,
      default: false,
      validator: value => typeof value === 'boolean',
    },
    /**
     * Render a specific button size at a specific breakpoint. Takes precedence over staticSize and fullWidth.
     * Default function returns an empty array.
     */
    responsiveSize: {
      type: Array,
    },
    /**
     * Additional style modifiers. Default function returns an empty array.
     * {`secondary`}
     */
    styleModifiers: {
      type: String,
      validator: value => value === 'secondary',
    },
  },
  computed: {
    blockClass() {
      return 'cdr-button';
    },
    sizeClass() {
      return this.modifierClass(this.size);
    },
    fullWidthClass() {
      return this.fullWidth ? this.modifierClass('full-width') : null;
    },
    responsiveClass() {
      const responsiveClass = [];

      if (this.responsiveSize) {
        this.responsiveSize.forEach((val) => {
          responsiveClass.push(this.modifierClass(val));
        });
      }

      return responsiveClass.join(' ');
    },
    styleModifiersClass() {
      return this.styleModifiers ? this.modifierClass(this.styleModifiers) : null;
    },
  },
};
</script>

<style>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrButton.pcss';
</style>
