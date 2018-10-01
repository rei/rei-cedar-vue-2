<template>
  <component
    :is="tag"
    :class="[modifierClass, themeClass]"
    :target="target"
    :rel="computedRel"
    :href="tag === 'a' ? href : null /* don't include the href attribute if not an <a> */"
  >
    <!-- @slot innerHTML on the inside of the anchor component -->
    <slot>Link Text</slot>
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';
/**
 *
 * Cedar 2 component for link.
 *
 * <span class="modifiers">Modifiers</span>
 * {standalone}
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrLink',
  mixins: [modifier],
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    href: {
      type: String,
      default: '#',
    },
    theme: String,
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
    themeClass() {
      return this.theme ? `on-${this.theme}` : '';
    },
  },
};
</script>

<style module>
  @import 'cssdir/settings/_index.pcss';
  @import './styles/CdrLink.pcss';
</style>
