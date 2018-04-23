<template>
  <button
    :class="[styleClass, themeClass]"
    :type="type"
    @click="onClick"
  >
    <!-- @slot innerHTML on the inside of the button component -->
    <slot/>
  </button>
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
    styleOptions: {
      type: Object,
      default: () => () => {},
    },
  },
  computed: {
    baseClass() {
      const styles = this.styleOptions.style ? this.styleOptions.style : [];
      return styles.indexOf('link') >= 0 ? 'cdr-link' : 'cdr-button';
    },
    styleClass() {
      /* styles default guarantees we'll have an object */
      const [base, styleOptions] = [this.baseClass, this.styleOptions];
      const final = [];

      if (!this.theme) {
        final.push(`${base}`);

        Object.keys(styleOptions).forEach((key) => {
          if (typeof styleOptions[key] === 'string') {
            final.push(`${base}--${styleOptions[key]}`);
          } else {
            styleOptions[key].forEach((val) => {
              final.push(`${base}--${val}`);
            });
          }
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
