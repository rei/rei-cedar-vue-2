<template>
  <article :class="[modifierClass]">
    <!-- @slot innerHTML on the inside of the card component -->
    <slot/>
  </article>
</template>

<script>
import modifier from 'mixinsdir/modifier';

/**
 * Cedar 2 component for a card container
 * The basic card is intended as a container for grouping like content.
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrCard',
  mixins: [modifier],
  computed: {
    baseClass() {
      return 'cdr-card';
    },
  },
};
</script>

<style>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/cdrCard.vars.pcss';
  @import './styles/cdrCard.pcss';
</style>
