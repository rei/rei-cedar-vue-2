<template>
  <component
    :is="el"
    :class="[styleModifiersClass, themeClass]"
    :type="type"
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
     * Sets a static size for the button. The only way to set top and bottom padding on component
     */
    staticSize: {
      type: String,
      default: '',
      validator: value => (['small', 'medium', 'large', 'full-width'].indexOf(value) >= 0) || false,
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
  },
  computed: {
    baseClass() {
      return this.el === 'button' ? 'cdr-button' : 'cdr-link';
    },
    styleModifiersClass() {
      const [base, staticSize] = [this.baseClass, this.staticSize];
      const propArrays = [...this.responsiveSize, ...this.styleModifiers];
      const final = [];

      if (!this.theme) {
        // insert base
        final.push(`${base}`);

        // undefined when creating an anchor
        if (staticSize) {
          final.push(`${base}--${staticSize}`);
        }

        if (this.fullWidth) {
          final.push(`${base}--full-width`);
        }

        propArrays.forEach((val) => {
          final.push(`${base}--${val}`);
        });
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
