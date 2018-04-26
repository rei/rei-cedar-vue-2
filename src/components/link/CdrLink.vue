<template>
  <component
    :is="el"
    :class="modifierClass"
    :target="target"
    :rel="computedRel"
    :href="el === 'a' ? href : null /* don't include the href attribute if not an <a> */"
  >
    <!-- @slot innerHTML on the inside of the anchor component -->
    <cdr-icon use="#account-profile" />

    <cdr-icon
      v-if="iconLeft"
      :use="account-profile" />
    <span v-if="iconLeft">{{ iconLeft }}</span>
    <slot>Link Text</slot>
  </component>
</template>

<script>
import modifier from 'mixinsdir/modifier';
import { CdrIcon } from '@rei/cdr-icon';

/**
 *
 * Cedar 2 component for link.
 *
 * <span class="modifiers">Modifiers</span>
 * {on-dark, standalone}
 * @version 0.0.1
 * @author [REI Software Engineering](https://rei.github.io/rei-cedar/)
 */
export default {
  name: 'CdrLink',
  components: {
    CdrIcon,
  },
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
    iconLeft: {
      type: [String, Boolean],
      default: false,
    },
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
  @import './styles/CdrLink.pcss';
</style>
