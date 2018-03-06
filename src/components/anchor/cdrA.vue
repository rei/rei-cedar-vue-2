<template>
  <a
    :class="modifierClass"
    :target="target"
    :rel="newRel"
  >
    <!-- @slot Text content on the inside of the anchor -->
    <slot/>
  </a>
</template>

<script>
import modifier from 'Mixins/modifier';

/**
 * Cedar 2 component for anchor.
 * Supports traditional atributes of anchor tag
 * Modifying classes: `button, contrast, standalone`
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrA',
  mixins: [modifier],
  props: {
    /** @ignore */
    target: String,
    /** @ignore */
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
  @import 'Css/settings/_index.pcss';
  @import './styles/vars/cdrA.vars.pcss';
  @import './styles/cdrA.pcss';
</style>

