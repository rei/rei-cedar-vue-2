<template>
  <button
    :class="[modifierClass, themeClass]"
    :type="type"
    @click="onClick"
  >
    <slot/>
  </button>
</template>

<script>
import theme from '../../mixins/theme';
import modifier from '../../mixins/modifier';

/**
 * Cedar 2 component for button
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrButton',
  mixins: [modifier, theme],
  props: {
    /**
     * {button, submit, reset}. Defines the button type.
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
  @import '../../css/settings/_index.pcss';
  @import 'styles/vars/cdrButton.vars.pcss';
  @import 'styles/cdrButton.pcss';
</style>

<style cedar-theme="red">
  @import '../../css/settings/_index.pcss';
  @import 'styles/vars/cdrButton.vars.pcss';
  @import 'styles/vars/red.vars.pcss';
  @import 'styles/cdrButton.pcss';
</style>

<style cedar-theme="green">
  @import '../../css/settings/_index.pcss';
  @import 'styles/vars/cdrButton.vars.pcss';
  @import 'styles/vars/green.vars.pcss';
  @import 'styles/cdrButton.pcss';
</style>
