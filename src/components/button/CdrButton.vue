<template>
  <button
    :class="[modifierClass, themeClass]"
    :type="type"
    @click="onClick"
  >
    <!-- @slot innerHTML on the inside of the button component -->
    <slot/>
  </button>
</template>

<script>
import theme from 'mixinsdir/theme';
import modifier from 'mixinsdir/modifier';

/**
 * Cedar 2 component for button
 *
 * <span class="modifiers">Modifiers</span>
 * Modifiers can be combined 1 from each grouping.
 * {secondary} | {sm,lg} | {block, fixed, responsive} **OR** link
 * Use of the 'link' modifier depends on including the css for cdrA.
 * A modifier list that contains 'link' exposes the same modifiers as cdrA and the other modifiers shouldn't be combined with it.
 * Responsive makes the button full width and block @ sm breakpoint.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrButton',
  mixins: [modifier, theme],
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
  },
  computed: {
    baseClass() {
      const modifiers = this.modifier ? this.modifier.split(' ') : [];
      return modifiers.indexOf('link') >= 0 ? 'cdr-link' : 'cdr-button';
    },
  },
};
</script>

<style>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrButton.vars.pcss';
  @import './styles/CdrButton.pcss';
</style>

<style cedar-theme="red">
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrButton.vars.pcss';
  @import './styles/vars/red.vars.pcss';
  @import './styles/CdrButton.pcss';
</style>

<style cedar-theme="green">
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrButton.vars.pcss';
  @import './styles/vars/green.vars.pcss';
  @import './styles/CdrButton.pcss';
</style>
