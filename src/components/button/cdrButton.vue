<template>
  <button
    :class="[modifierClass]"
    :type="type"
    @click="onClick"
  >
    <slot/>
  </button>
</template>

<script>
// import theme from '../../mixins/theme';
import modifier from '../../mixins/modifier';

export default {
  name: 'CdrButton',
  mixins: [modifier],
  props: {
    /**
     * {button, submit, reset}. Defines the button type.
     */
    type: {
      type: String,
      default: 'button',
      /* istanbul ignore next */
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

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'cdrButton.pcss';
</style>

<style theme="red">
  @import '../../css/settings/_index.pcss';
  @import '../../css/themes/red.pcss';
  @import 'cdrButton.pcss';
</style>
