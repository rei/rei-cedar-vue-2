<template>
  <component
    :is="el"
    :class="[styleModifiersClass, themeClass]"
    :type="el === 'button' ? type : null"
    @click="onClick"
  >
    <!-- @slot innerHTML on the inside of the button component -->
    <slot/>
  </component>
</template>

<script>
import theme from 'mixinsdir/theme';

/**
 * Cedar 2 component for button
 *
 * <span class="modifiers">Modifiers</span>
 * Modifiers can be combined 1 from each grouping.
 * {secondary} | {sm, md, lg} | {sm@sm, lg@sm, sm@md, lg@md, sm@lg, lg@lg } | {block, fixed, responsive} **OR** link
 * Use of the 'link' modifier depends on including the css for cdrA.
 * A modifier list that contains 'link' exposes the same modifiers as cdrA and the other modifiers shouldn't be combined with it.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrButton',
  mixins: [theme],
  props: {
    /**
     * Controls render as button or anchor
     */
    el: {
      type: String,
      default: 'button',
      validator: value => (['button', 'a'].indexOf(value) >= 0) || false,
    },
    /**
     * Defines the button type. Possible values: {button, submit, reset}.
     */
    type: {
      type: String,
      default: 'button',
      validator: value => (['button', 'submit', 'reset'].indexOf(value) >= 0) || false,
    },
    /**
     * Add custom click actions.
     */
    onClick: {
      type: Function,
      default: () => () => null,
    },
    /**
     * Sets a static size for the button. When combined with responsiveSize, will control padding-top and -bottom.
     */
    staticSize: {
      type: String,
      default: 'medium',
      validator: value => (['small', 'medium', 'large'].indexOf(value) >= 0) || false,
    },
    /**
     * Sets width to be 100%. Can be combined with staticSize
    */
    fullWidth: {
      type: Boolean,
      default: false,
      validator: value => typeof value === 'boolean',
    },
    /**
     * Render a specific button size at a specific breakpoint. Takes precedence over staticSize and fullWidth
     */
    responsiveSize: {
      type: Array,
      default() {
        return [];
      },
    },
    /**
     * Additional style modifiers; essentially classes that you can pass in to alter the style
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
