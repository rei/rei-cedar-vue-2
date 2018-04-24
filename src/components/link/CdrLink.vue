<template>
  <component
    :is="el"
    :class="modifierClass"
    :target="target"
    :rel="computedRel"
    :href="el === 'a' ? href : null /* don't include the href attribute if not an <a> */"
  >
    <!-- @slot innerHTML on the inside of the anchor component -->
    <slot>Link Text</slot>
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';

/**
 * Cedar 2 component for link.
 *
 * <span class="modifiers">Modifiers</span>
 * {contrast, overlay, standalone}
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrLink',
  mixins: [modifier],
  props: {
    el: {
      type: String,
      default: 'a',
    },
    href: {
      type: String,
      default: '#',
    },
    /** @ignore */
    target: String,
    /** @ignore */
    rel: String,
  },
  computed: {
    baseClass() {
      return 'cdr-link';
    },
    computedRel() {
      if (this.target === '_blank') {
        return this.rel || 'noopener noreferrer';
      }
      return this.rel;
    },
  },
};
</script>

<style theme="default">
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrLink.vars.pcss';
  @import './styles/CdrLink.pcss';
</style>

