<template>
  <a
    :class="modifierClass"
    :target="target"
    :rel="newRel"
  >
    <slot/>
  </a>
</template>

<script>
import modifier from 'Src/mixins/modifier';

/**
 * Cedar 2 component for anchor
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrA',
  mixins: [modifier],
  props: {
    target: String,
    rel: String,
  },
  computed: {
    baseClass() {
      const modifiers = this.modifier ? this.modifier.split(' ') : [];
      return modifiers.indexOf('button') >= 0 ? 'cdr-button' : 'cdr-link';
    },
    newRel() {
      if (this.target === '_blank') {
        return this.rel || 'noopener noreferrer';
      }
      return this.rel;
    },
  },
};
</script>

<style theme="default">
  @import '../../css/settings/_index.pcss';
  @import 'styles/vars/cdrA.vars.pcss';
  @import 'styles/cdrA.pcss';
</style>

