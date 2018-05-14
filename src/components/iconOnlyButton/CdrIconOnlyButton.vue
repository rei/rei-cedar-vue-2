<template>
  <component
    :is="tag"
    :class="[blockClass]"
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
    size: {
      type: String,
      default: 'medium',
    },
  },
  computed: {
    blockClass() {
      return 'cdr-icon-only-button';
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrIconOnlyButton.pcss';
</style>
