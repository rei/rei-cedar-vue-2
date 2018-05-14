<template>
  <component
    :is="tag"
    :class="[blockClass, onDarkClass]"
    :type="tag === 'button' ? type : null"
    @click="onClick"
  >
    <!-- @slot innerHTML on the inside of the button component -->
    <slot/>
  </component>
</template>

<script>
import buttonBase from 'mixinsdir/buttonBase';
import classModifier from 'mixinsdir/classModifier';

export default {
  name: 'CdrIconOnlyButton',
  mixins: [buttonBase, classModifier],
  props: {
    onDark: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    blockClass() {
      return 'cdr-icon-only-button';
    },
    onDarkClass() {
      return this.onDark ? this.modifierClass('on-dark') : null;
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrIconOnlyButton.pcss';
</style>
