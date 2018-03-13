<template>
  <article :class="[modifierClass]">
    <slot/>
  </article>
</template>

<script>
import modifier from 'Mixins/modifier';

/**
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
  @import 'Css/settings/_index.pcss';
  @import './styles/vars/cdrCard.vars.pcss';
  @import './styles/cdrCard.pcss';
</style>
