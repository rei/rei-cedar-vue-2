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
import theme from 'Mixins/theme';
import modifier from 'Mixins/modifier';

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
  @import 'Css/settings/_index.pcss';
  @import './styles/vars/cdrButton.vars.pcss';
  @import './styles/cdrButton.pcss';
</style>

<style cedar-theme="red">
  @import 'Css/settings/_index.pcss';
  @import './styles/vars/cdrButton.vars.pcss';
  @import './styles/vars/red.vars.pcss';
  @import './styles/cdrButton.pcss';
</style>

<style cedar-theme="green">
  @import 'Css/settings/_index.pcss';
  @import './styles/vars/cdrButton.vars.pcss';
  @import './styles/vars/green.vars.pcss';
  @import './styles/cdrButton.pcss';
</style>
