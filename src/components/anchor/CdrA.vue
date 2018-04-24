<template>
  <a
    :class="modifierClass"
    :target="target"
    :rel="newRel"
    :href="href"
  >
    <!-- @slot innerHTML on the inside of the anchor component -->
    <slot>Link Text</slot>
  </a>
</template>

<script>
import modifier from 'mixinsdir/modifier';

/**
 * Cedar 2 component for anchor.
 *
 * <span class="modifiers">Modifiers</span>
 *
 * Modifiers can be combined 1 from each grouping.
 * {contrast, overlay, standalone} **OR** button
 * Use of the 'button' modifier depends on including the css for CdrButton.
 * A modifier list that contains 'button' exposes the same modifiers as CdrButton and the other modifiers shouldn't be combined with it.
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
    href: {
      type: String,
      default: '#',
    },
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
  @import 'cssdir/settings/_index.pcss';
  @import './styles/vars/CdrA.vars.pcss';
  @import './styles/CdrA.pcss';
</style>

