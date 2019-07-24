<template>
  <article :class="modifierClass">
    <!-- @slot innerHTML on the inside of the card component -->
    <slot />
  </article>
</template>

<script>
import modifier from 'mixinsdir/modifier';

/**
 * Cedar 2 component for a card container
 * The basic card is intended as a container for grouping like content.
 * @version 0.2.2
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrCard',
  mixins: [modifier], // TODO: does cdr-card even have modifiers available?
  computed: {
    baseClass() {
      return 'cdr-card';
    },
  },
};
</script>

<style lang="scss" module>
  @import './styles/vars/CdrCard.vars.scss';
  @import './styles/CdrCard.scss';
</style>
