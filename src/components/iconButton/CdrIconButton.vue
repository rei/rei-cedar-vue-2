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
  name: 'CdrIconButton',
  mixins: [buttonBase, classModifier],
  props: {
    size: {
      type: String,
      default: 'medium',
    },
  },
};
</script>

<style>
  @import '../../css/settings/_index.pcss';
  @import './styles/CdrIconButton.pcss';
</style>
