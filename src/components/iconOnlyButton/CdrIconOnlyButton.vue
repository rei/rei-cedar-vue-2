<template>
  <component
    :is="tag"
    :class="[modifierClass, onDarkClass]"
    :type="tag === 'button' ? type : null"
    @click="onClick"
  >
    <!-- @slot innerHTML on the inside of the button component -->
    <slot/>
  </component>
</template>

<script>
import buttonBase from 'mixinsdir/buttonBase';
import modifier from 'mixinsdir/modifier';

export default {
  name: 'CdrIconOnlyButton',
  mixins: [buttonBase, modifier],
  props: {
    /**
     * Sets icon fill to contrast light/dark background.
     */
    onDark: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    baseClass() {
      return 'cdr-icon-only-button';
    },
    onDarkClass() {
      return this.onDark ? this.modifyClassName(this.baseClass, 'on-dark') : null;
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrIconOnlyButton.pcss';
</style>
