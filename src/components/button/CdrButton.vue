<template>
  <component
    :is="tag"
    :class="[styleModifiersClass, themeClass]"
    :type="tag === 'button' ? type : null"
    @click="onClick"
  >
    <!-- @slot innerHTML on the inside of the button component -->
    <slot/>
  </component>
</template>

<script>
import theme from 'mixinsdir/theme';
import { CdrIcon } from '@rei/cdr-icon';

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
  components: {
    CdrIcon,
  },
  mixins: [theme],
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
     * Adds custom click actions.
     */
    onClick: {
      type: Function,
      default: () => () => null,
    },
    /**
     * Sets a static size for the button, which scales padding and text size. {small, medium, large}
     */
    staticSize: {
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
      default() {
        return [];
      },
    },
    /**
     * Additional style modifiers. Default function returns an empty array.
     * {`secondary`, `cta-brand`, `cta-light`, `cta-dark`, `cta-sale`}
     */
    styleModifiers: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    baseClass() {
      return 'cdr-button';
    },
    styleModifiersClass() {
      const base = this.baseClass;
      let responsive = this.responsiveSize;
      const final = [];

      if (!this.theme) {
        final.push(`${base}`);

        // handle style modifiers first - it will tell us if this is a CTA button
        this.styleModifiers.forEach((val) => {
          if (val.indexOf('cta-') >= 0) {
            // CTA buttons do not receive responsive classes
            responsive = [];
          }
          final.push(`${base}--${val}`);
        });

        final.push(`${base}--${this.staticSize}`);

        responsive.forEach((val) => {
          final.push(`${base}--${val}`);
        });

        if (this.fullWidth) {
          final.push(`${base}--full-width`);
        }
      }
      return final.join(' ');
    },
  },
};
</script>

<style>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrButton.pcss';
</style>

<style cedar-theme="red">
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/red.vars.pcss';
  @import './styles/CdrButton.pcss';
</style>

<style cedar-theme="green">
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/green.vars.pcss';
  @import './styles/CdrButton.pcss';
</style>
