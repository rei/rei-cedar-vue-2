<template>
  <component
    :is="tag"
    :class="[
      defaultClass,
      modifierClass,
      buttonSizeClass,
      fullWidthClass,
      iconClass,
      space
    ]"
    :type="tag === 'button' ? type : null"

    v-on="$listeners"
  >
    <!-- @slot for icon -->
    <slot name="icon" />
    <!-- @slot innerHTML on the inside of the button component -->
    <slot />
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import size from 'mixinsdir/size';
import space from 'mixinsdir/space';
import fullWidth from 'mixinsdir/fullWidth';

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
  mixins: [modifier, size, space, fullWidth],
  props: {
    /**
     * Controls render as button or anchor. {button, a}
     */
    tag: {
      type: String,
      default: 'button',
      validator: value => (['button', 'a'].indexOf(value) >= 0) || false,
    },
    /**
     * Sets the button type. {button, submit, reset}
     */
    type: {
      type: String,
      default: 'button',
      validator: value => (['button', 'submit', 'reset'].indexOf(value) >= 0) || false,
    },
    /**
     * Renders an icon-only button. Default slot is disabled. Overrides size and responsiveSize props.
     */
    iconOnly: {
      type: Boolean,
      default: false,
    },
    /**
     * Renders an icon-only button with a light fill color for use on dark backgrounds.
     * iconOnly must be true.
     */
    onDark: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-button';
    },
    defaultClass() {
      return this.modifyClassName(this.baseClass, 'primary');
    },
    buttonSizeClass() {
      return !this.iconOnly ? this.sizeClass : null;
    },
    iconClass() {
      const classes = [];

      if (this.$slots.icon && this.$slots.default) {
        /* only add class for buttons with text + icon */
        classes.push(this.modifyClassName(this.baseClass, 'has-icon'));
      }

      if (this.iconOnly) {
        classes.push(this.modifyClassName(this.baseClass, 'icon-only'));

        if (this.onDark) {
          classes.push(this.modifyClassName(this.baseClass, 'on-dark'));
        }
      }
      return classes.join(' ');
    },
  },
};
</script>

<style lang="scss" module>
  @import './styles/vars/CdrButton.vars.scss';
  @import './styles/CdrButton.scss';
</style>
